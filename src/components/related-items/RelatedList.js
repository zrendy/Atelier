import RelatedCard from './RelatedCard.js';
import {useState, useEffect} from 'react';

export default function RelatedList (props) {
  const [showLeftArrow, setLeftArrow] = useState(false);
  const [showRightArrow, setRightArrow] = useState(true);
  //console.log('TESTING PROPS IN RELATED LIST ', props)
  //slide value in px
  const slideWindow = 280;

  const prevHandler = () => {
    let prevSlide = document.getElementById('slider');
    prevSlide.scrollLeft -= slideWindow;
    console.log(prevSlide.scrollLeft)
    if (prevSlide.scrollLeft === 0) {
      setLeftArrow(false);
    }
    setRightArrow(true);
  }

  const nextHandler = () => {
    let nextSlide = document.getElementById('slider');
    nextSlide.scrollLeft += slideWindow;
    console.log(nextSlide.scrollLeft);
    console.log(nextSlide.scrollWidth, nextSlide.clientWidth)
    setLeftArrow(true);
    if (nextSlide.scrollLeft >= (nextSlide.scrollWidth - nextSlide.clientWidth)) {
      setRightArrow(false);
    }
  }
  useEffect(() => {
    document.getElementById('slider').scrollLeft = 0;
    setLeftArrow(false);
    setRightArrow(true);
  },[props]);

  if (props.currentData.relatedProducts.length === 0) {
    return (
      <div className='related-list' data-testid='related-list'>
        <h1 className='related-title'> Related Products</h1>
        <h4 className='related-title'>THERE IS NO OTHER PRODUCTS LIKE THIS</h4>
      </div>
    )
  }

  return (
    <div className='related-list' data-testid='related-list'>
      <h1 className='related-title'> Related Products</h1>
      {showLeftArrow ? <i className='left-arrow' onClick={prevHandler}>
        <i className="fa-solid fa-chevron-left" data-testid='left-arrow'></i>
      </i> : null}
      {showRightArrow ? <i className='right-arrow' >
        <i className="fa-solid fa-chevron-right" onClick={nextHandler} data-testid='right-arrow'></i>
      </i> : null}
      <div className='related-carousel' id='slider'>
        {//relatedProduct is product_id
          props.currentData.relatedProducts.map((relatedProduct, index) => {
            return <RelatedCard
            currentData={props.currentData}
            relatedProduct={relatedProduct}
            currentProduct={props.currentProduct} setCurrentProduct={props.setCurrentProduct}
            viewedProduct={props.viewedProduct}
            setViewedProduct={props.setViewedProduct}
            data-testid='related-card'/>
          })
        }
      </div>
    </div>
  )

}