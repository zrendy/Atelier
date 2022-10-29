import Price from './Price.js';
// import { useState, useEffect } from 'react';
import StarRating from '../shared/StarRating.js';

export default function OutfitCard ({outfit, outfitList, setOutfitList}) {
  // const [starRating, setStarRating] = useState(0);
  const deleteHandle = () => {
    let tempList = outfitList.slice();
    let indx = tempList.indexOf(outfit);
    tempList.splice(indx,1);
    setOutfitList(tempList);
  };

  return (
    <div className='outfit-card' data-testid='outfit-card'>
      <i class="fa fa-times-circle-o" data-testid='delete-icon' onClick={deleteHandle}></i>
      <img className='card-image' src={outfit.default_style[0].photos[0].url} alt={outfit.name} ></img>
      <div className='card-info'>
        <i className='card-category'>{outfit.category}</i>
        <b className='card-name'>{outfit.name}</b>
        <Price original_price={outfit.default_style[0].original_price} sale_price={outfit.default_style[0].sale_price}/>
        <small className='card-stars'>
          <StarRating rating={outfit.ratings}/>
        </small>
      </div>

    </div>
  )
}