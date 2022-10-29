// import {useState, useEffect} from 'react';
import RelatedList from './RelatedList.js';
import YourOutfit from './YourOutfit.js';
// import axios from 'axios';

export default function RelatedAndComparison (props) {
  return (
    <div className='related-comparison' data-testid='related-comparison'>
      <RelatedList
      currentData={props.currentData}
      currentProduct={props.currentProduct}
      setCurrentProduct={props.setCurrentProduct}
      viewedProduct={props.viewedProduct}
      setViewedProduct={props.setViewedProduct}/>
      <YourOutfit currentProduct={props.currentData} />
    </div>
  )



}