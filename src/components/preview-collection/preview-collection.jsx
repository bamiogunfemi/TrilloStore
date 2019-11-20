import React from 'react';
import CollectionItem from '../../components/collection-item/collection-item.component'
import './preview-collection.style.scss';



const PreviewCollection = ({title, items})=> (
    <div className='preview-collection'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className= 'preview'>
        
           {items
              .filter((item,idx )=> idx < 4)
               .map(({item}) =>(
               <CollectionItem key={item.id} item={item} />
        ))
        }
        </div>
    </div>
)


export default PreviewCollection;