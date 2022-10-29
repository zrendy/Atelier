import Review from './Review.js';
import WriteReview from './WriteReview.js';
import {useState, useEffect} from 'react';

export default function ReviewsList ({handleHelpful, sortReviews, rerender, productName, reviews, breakdown}) {

  //show 2 reviews initially
  const [showAmount, setShowAmount] = useState(2);

  useEffect(()=>{
    if(reviews.length<2) {
      setShowAmount(reviews.length);
    }
  }, [reviews.length])

  var handleClick = (e) => {
    //adds 2 to the previous show amount, caps at the length of reviews.
    e.preventDefault();
    if(showAmount < reviews.length-1) {
      setShowAmount(prev => prev + 2);
    } else {
      setShowAmount(reviews.length);
    }
  }

  //write reviews modal opening and closing
  const [modalOpen, setModalOpen] = useState("none");
  var handleModalOpen = () => {
    setModalOpen("block");
  }
  var handleModalClose = ()=> {
    setModalOpen("none");
  }

  return (
    <div>
      <div data-testid="reviewslist-comp" className="reviews-list">
        <div className="sort-options">
          <span>{reviews.length} reviews, sorted by
            <select onChange={function(e) {
              sortReviews(e)
            }} className="sort-dropdown">
              <option value="Helpful">Helpful</option>
              <option value="Newest">Newest</option>
              <option value="Relevant" defaultValue>Relevant</option>
            </select>
          </span>
        </div>
        {reviews.slice(0, showAmount).map((review, i) => {
          return (<Review handleHelpful={handleHelpful} key={i} review={review}/>)
        })}
      </div>
      <div className="more-write-buttons">
      {reviews && reviews.length > 2 ?
        (<button className="more-reviews" onClick={function(e){handleClick(e);
        }}>More Reviews</button>) : null}
        <button className="write-reviews" onClick={handleModalOpen}>Write Review</button>
        <WriteReview rerender={rerender} productName={productName} breakdown={breakdown} modalOpen={modalOpen} handleModalClose={handleModalClose}/>
      </div>
    </div>
  )
}