import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectIsCollectionFetching} from '../../redux/shop/shop.selector'
import Spinner from '../spinner/spinner.component'
import CollectionsOverview from './collections-overview.component'
import {compose} from 'redux'

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
})
const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  Spinner
)(CollectionsOverview)

export default CollectionsOverviewContainer;
