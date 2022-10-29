import { useState, useEffect, useContext } from 'react';
import SizeSelector from './SizeSelector.js'
import axios from 'axios';
import {WebsiteContext} from '../../../App.js';

const ShoppingCart = ({ data }) => {
  const [cartDetail, setCartDetail] = useState(['OUT OF STOCK', "-", false]);
  const {log, setLog} = useContext(WebsiteContext);
  // useEffect to reset stock
  useEffect(() => {
    setCartDetail(['OUT OF STOCK', "-", false])
  }, [data[0]])
  // quantity array maker
  const ArrayMaker = (str) => {
    if (str === undefined || str === '' || str === '0') {
      return ['-'];
    }
    let num = parseInt(str);
    if (num > 15) { num = 15; }
    let result = [];
    for (let i = 1; i <= num; i++) { result.push(i); }
    return result;
  }
  // size onClick helper functions
  const sizeOnClick = (e) => {
    document.getElementsByClassName('please-select')[0].style.opacity = "0";
    let cartDetailCopy = cartDetail.slice();
    if (e.target.className === 'select-size size-option') {
      cartDetailCopy[0]="SELECT SIZE";
    } else {
      cartDetailCopy[0] = e.target.className;
      cartDetailCopy[1] = "1";
    }
    selectedOnClick();
    setCartDetail(cartDetailCopy);
    setLog(oldLog => [...oldLog].concat(`clicked ${e.target.className} size`));
  }
  // quantity onChange helper function
  const quantityOnChange = (e) => {
    let cartDetailCopy = cartDetail.slice();
    cartDetailCopy[1] = e.target.value;
    setCartDetail(cartDetailCopy);
    setLog(oldLog => [...oldLog].concat(`clicked ${e.target.className} quantity option`));
  }
  // display selected onClick helper function
  const selectedOnClick = (e)=>{
    let container = document.getElementsByClassName('size')[0];
    if (!cartDetail[2]) {
      return;
    }
    if(container.style.overflow ==='') {
      container.style.overflow = 'hidden';
    } else {
      container.style.overflow = '';
    }
    // setLog(oldLog => [...oldLog].concat(`clicked ${e.target.dataset.selected} selected size`));
  }
  // request handler
  const addToCart = (e) => {
    console.log(e);
    if (cartDetail[1] === "-" || cartDetail[0] === 'OUT OF STOCK' || cartDetail[0] === 'SELECT SIZE') {
      console.log('are we there?')
      document.getElementsByClassName('please-select')[0].style.opacity = "1";
      document.getElementsByClassName('size')[0].style.overflow = '';
      return;
    }
    let option = {
      url: `http://localhost:3000/api/cart/${parseInt(cartDetail[0].split(',')[1])}`,
      method: "post",
    }
    axios(option)
      .then((response) => {
        console.log('added to cart');
      })
      .catch((err) => {
        console.log('failed to add to cart');
      })
      setLog(oldLog => [...oldLog].concat(`clicked add to cart button`));
  }
  return (
    <div className="shopping-cart">
      <div className="please-select" style={{opacity: "0"}}>Please select size</div>
      <div className="size-quantity">
        <div className="size" style={{overflow: "hidden"}}>
          <div className="display-selected"  onClick={selectedOnClick} data-selected="display-selected">{cartDetail[0].split(",")[0]}</div>
          <div className="select-size size-option" onClick={sizeOnClick}>SELECT SIZE</div>
          {typeof data[1][data[2]] === 'object' ? Object.entries(data[1][data[2]].skus).map((sku, i) => {
            if (sku[1].quantity === 0 || !sku[1].quantity) {
              return;
            }
            if (cartDetail[2] === false) {
              setCartDetail(['SELECT SIZE',"-", true]);
            }
            return <SizeSelector size={sku[1].size} sku={sku[0]} maxQuantity={sku[1].quantity} sizeOnClick={sizeOnClick} key={i}/>
          }) : null}
        </div>
        <select className="quantity" value={cartDetail[2]} onChange={quantityOnChange} disabled={!cartDetail[2]}>
          {typeof data[1][data[2]] === 'object' ? ArrayMaker(cartDetail[0].split(',')[1]).map((quantity, i)=>{
            return <option value={quantity} key={i}>{quantity}</option>;
          }): null}
        </select>
      </div>
      <div className="add-to-cart">
        {cartDetail[2] ? <button className="add-to-bag-button" onClick={addToCart}>ADD TO CART<span>+</span></button>: null}
        <button className="favorite">⭐</button>
      </div>
    </div >
  )
}

export default ShoppingCart;