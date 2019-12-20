import React, { useEffect, lazy, Suspense } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/header/header.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selector";
import { userSession } from "./redux/user/user.actions";
import Loader from "./components/loader/loader.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";

import Footer from './components/footer/footer.component'

const HomePage = lazy(() => import("./pages/homepage/homepage.component"));
const ShopPage = lazy(() => import("./pages/shop/shop.component"));
const SignInAndSignUpPage = lazy(() =>
  import("./pages/sign-in-and-sign-up/sign-in-and-sign-up.component")
);
const CheckoutPage = lazy(() => import("./pages/checkout/checkout.component"));

const Contact = lazy(()=> import ('./pages/contact/contact.component'))
const App = ({ userSession, currentUser }) => {
  useEffect(() => {
    userSession();
  }, [userSession]);

  return (
    <div>
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Loader />}>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route path='/contact' component={Contact}/>
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route
              exact
              path="/signin"
              render={() =>
                currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
              }
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
      <Footer/>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});
const mapDispatchToProps = dispatch => ({
  userSession: () => dispatch(userSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
