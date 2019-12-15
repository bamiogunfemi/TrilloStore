import React, {useEffect} from 'react';
import { Route } from 'react-router-dom'
import { fetchCollectionsStart } from '../../redux/shop/shop.actions'
import CollectionPageContainer from '../collection/collection.component'
import CollectionOverviewContainer from '../../components/collections-overview/collection-overview.container'
import { connect } from 'react-redux'

const ShopPage=({ match, fetchCollectionsStart} )=> {
 useEffect(()=>{
  fetchCollectionsStart()
 },[fetchCollectionsStart ])
      return (
        <div className='shop-page'>
          <Route
            exact
            path={`${match.path}`}
            component={CollectionOverviewContainer}
          />
          <Route
            path={`${match.path}/:collectionId`}
            component={CollectionPageContainer}
          />
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
