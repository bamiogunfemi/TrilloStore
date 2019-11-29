import React from 'react';
import PreviewCollection from '../../components/preview-collection/preview-collection'
const ShopPage =({collections})=> 
 
   ( <div className='shop-page'>
            {
             collections.map(({id, ...otherCollectionProps})=><PreviewCollection key={id}{...otherCollectionProps}/>)
             }
        </div>
    )


export default ShopPage



