import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selector'
import Spinner from '../../components/spinner/spinner.component'
import CollectionPage from './collections.component'
import { compose } from 'redux'

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionsLoaded(state)
})
const CollectionsPageContainer = compose(
  connect(mapStateToProps),
  Spinner
)(CollectionPage)

export default CollectionsPageContainer;
