import React from 'react';
import './collections-overview.style.scss'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import PreviewCollection from '../../components/preview-collection/preview-collection'
import { selectCollectionForPreview } from '../../redux/shop/shop.selector'
const CollectionOverview = ({ collections }) => (
  <div className="collections-overview">
    {
      collections.map(({ id, ...otherCollectionProps }) => <PreviewCollection key={id}{...otherCollectionProps} />)
    }
  </div>
)
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview
})
export default connect(mapStateToProps)(CollectionOverview)
