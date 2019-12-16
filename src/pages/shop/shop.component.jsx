import React, {useEffect, lazy, Suspense} from 'react';
import { Route } from 'react-router-dom'
import { fetchCollectionsStart } from '../../redux/shop/shop.actions'


import { connect } from 'react-redux'
import Loader from '../../components/loader/loader.component'

const CollectionPageContainer = lazy(()=>
  import('../collection/collection.container')
)
const CollectionOverviewContainer = lazy (()=>
 import('../../components/collections-overview/collection-overview.container')
)
const ShopPage=({ match, fetchCollectionsStart} )=> {
 useEffect(()=>{
  fetchCollectionsStart()
 },[fetchCollectionsStart ])
      return (
        <div className='shop-page'>
          <Suspense callback={<Loader/>}>
          <Route
            exact
            path={`${match.path}`}
            component={CollectionOverviewContainer}
          />
          <Route
            path={`${match.path}/:collectionId`}
            component={CollectionPageContainer}
          />
          </Suspense>
        </div>
      );
    }
  
  const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
  });
  
  export default connect(
    null,
    mapDispatchToProps
  )(ShopPage);
