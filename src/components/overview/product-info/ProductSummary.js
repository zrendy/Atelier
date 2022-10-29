import StarRating from '../../shared/StarRating.js';
import StyleSelector from '../style-selector/StyleSelector.js';
import ShoppingCart from '../shopping-cart/ShoppingCart.js';
import Price from '../../related-items/Price.js';
import {useContext} from 'react';
import {WebsiteContext} from '../../../App.js';

export default function ProductSummary ({data, setData}) {
  const {log, setLog} = useContext(WebsiteContext);
  // counter on click
  const counterOnClick = (e)=>{
    setLog(oldLog => [...oldLog].concat(`clicked ${e.target.className} share button`));
  }
  return (
    <aside className="product-summary" data-testid="product-summary">
    <StarRating rating={data[3]}/>
      <h5>{data[0].category}</h5>
      <h1>{typeof data[1][data[2]] === 'object' ? <span>{data[1][data[2]].name}</span>: null}</h1>
      <h5>{typeof data[1][data[2]] === 'object' ? <Price original_price={data[1][data[2]].original_price} sale_price={data[1][data[2]].sale_price}/>: null}</h5>
    <StyleSelector data={data} setData={setData}/>
    <ShoppingCart data={data}/>
    <div className="share-buttons">
      <h4>share on social media!</h4>
      <a className="facebook" href="https://www.facebook.com/sharer.php" onClick={counterOnClick}>
        <i className="fab fa-facebook"></i>
      </a>
      <a className="twitter" href={`https://twitter.com/share?text='wow'`} onClick={counterOnClick}>
        <i className="fab fa-twitter"></i>
      </a>
      <a className="pinterest" href="https://pinterest.com/pin/create/bookmarklet/?media=[post-img]&url=[post-url&description=[post-title]" onClick={counterOnClick}>
        <i className="fab fa-pinterest"></i>
      </a>
    </div>
    </aside>
  )
}