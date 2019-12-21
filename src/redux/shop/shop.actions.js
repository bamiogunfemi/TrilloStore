import ShopActionTypes from './shop.types'

export const fetchCollectionsStart = ()=>({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
  
})
export const fetchCollectionsSuccess = collectionsMap =>({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
  
})
export const fetchCollectionsFailure = errorMessage =>({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
  
})

