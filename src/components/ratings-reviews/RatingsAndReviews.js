import ReviewsList from './components/ReviewsList.js';
import Ratings from './components/Ratings.js';
import {useState, useEffect} from 'react';
import axios from 'axios';

//this component should render based on the product_id provided
export default function RatingsAndReviews ({productName, product_id}) {

  const [breakdown, setBreakdown] = useState(null);
  //used to trigger re-render on submit
  const [render, setRender] = useState(false);
  var rerender = () => {
    setRender(prev=> !prev);
  }

  const [reviewsParent, setReviewsParent] = useState(null);
  //get reviews and ratings from server
  useEffect(()=> {
    var options1 = {
      url: "/api/reviews/base",
      params: {
        page: 1,
        count: 100,
        sort: "newest",
        product_id: product_id
      },
      method: "get",
    }
    axios(options1)
    .then(result => {
      setReviewsParent(result.data.results);
      console.log('Reviews Data', result.data.results)
    })
    .catch(err => {
      console.log(err);
    })
    var options2 = {
      url: "/api/reviews/meta",
      params: {
        product_id: product_id
      },
      method: "get",
    }
    axios(options2)
    .then(result => {
      setBreakdown(result.data)
      console.log('Breakdown', result.data)
    })
    .catch(err => {
      console.log(err);
    })
  }, [render, product_id])


  var handleHelpful = (id) => {
    axios.put(`/api/reviews/helpful?review_id=${id}`)
    .then((result)=> {
      var options3 = {
        url: "/api/reviews/base",
        params: {
          page: 1,
          count: 100,
          sort: "newest",
          product_id: product_id
        },
        method: "get",
      }
      axios(options3)
      .then(result => {
        var newArr=result.data.results.slice();
        setReviewsParent(newArr);
      })
      .catch(err => {
        console.log(err);
      })
    })
  }

  //sorting reviews
  const [sortedReviews, setSortedReviews] = useState(null);

  //handles sorting the reviews
  var selectedSort = (sort) => {
    if(!reviewsParent) return;
    switch (sort) {
      case "Helpful":
        setSortedReviews((prev)=>
          [...reviewsParent.sort((b, a) => {
          return a.helpfulness - b.helpfulness
          })])
        break;
      case "Newest":
        setSortedReviews((prev)=>
          [...reviewsParent.sort((a, b) => {
          var dateA=new Date(a.date);
          var dateB=new Date(b.date);
          return dateB-dateA;
        })])
        break;
      default:
        setSortedReviews(prev=>
          [...reviewsParent.sort((a, b) => {
            var dateA=new Date(a.date);
            var dateB=new Date(b.date);
            return dateB-dateA;
          }).sort((a, b) => {
            return a.helpfulness - b.helpfulness
            })]);
          break;
    }
  }

  var sortReviews=(e)=> {
    selectedSort(e.target.value);
  }

    //filter by rating number
  var filterByRating = (num) => {
    var newArr=reviewsParent.filter(review=> {
      return num===review.rating
    })

    if(newArr.length===0) {
      return;
    } else{
      setSortedReviews(newArr);
    }

  }

  //watch for reviews changes
  useEffect(()=> {
    selectedSort();
  },[reviewsParent])

  return (
    <div data-testid="ratings-reviews-comp" className="ratings-reviews">
      {breakdown && <Ratings breakdown={breakdown} filterByRating={filterByRating}/>}
      {sortedReviews && breakdown && <ReviewsList rerender={rerender} handleHelpful={handleHelpful} productName={productName} sortReviews={sortReviews} reviews={sortedReviews} breakdown={breakdown}/>}
    </div>
  )
}