import StarRating from '../../shared/StarRating.js';
export default function Ratings ({breakdown, filterByRating}) {

  //math to determine average rating...
  var totalNumOfRatings = 0;
  var total = 0;
  for(const num in breakdown.ratings) {
    var val = parseInt(num);
    var count = parseInt(breakdown.ratings[num]);
    totalNumOfRatings+=count;
    total+=(val*count)
  }

  var averageRating = (((total/parseFloat(totalNumOfRatings)) * 100)/100).toFixed(1)

  //for use in printing out the progress bars
  //reverse to start array from 5 stars...
  var ratingsKeys = Object.keys(breakdown.ratings).reverse();
  var ratingsValues = Object.values(breakdown.ratings).reverse();
  var recommended = Math.round(parseInt(breakdown.recommended.true)/parseFloat((parseInt(breakdown.recommended.true)+ parseInt(breakdown.recommended.false)))*100);

  //handle clicking on a ratings bar
  var filterBar = (e) => {
    e.preventDefault();
    var currentBarNo = e.currentTarget.dataset.barno;
    filterByRating(parseInt(currentBarNo));
  }

  return (
    <div data-testid="ratings-comp" className="ratings">
      <h5>RATINGS & REVIEWS</h5>

      {/*RATING STARS*/}
      <div id="num-stars">
        <span id="num"><strong>{averageRating}</strong></span>
        <StarRating rating={averageRating}/>
      </div>
      <p>{recommended}% of reviews recommend this product</p>

      {/*RATING BARS*/}
      {ratingsKeys.map((key, i) => {
        return (
        <div onClick={filterBar} data-barno={key} key={i} className="progress-bar">
        <div><u>{key} stars</u></div>
        <div className="whole-bar">
          <div className="partial-bar" style={{width:`${Math.round((parseInt(ratingsValues[i])/parseFloat(totalNumOfRatings))*100)}%`}}></div>
        </div>
      </div>)
      })}

    {/*RANGES*/}
    <div className="range">
      {Object.keys(breakdown.characteristics).map((key, i) => {
        return (<div key={i} className="characteristics">
          <h6>{key}</h6>
          <input readOnly type="range" min="0" max="100" value={((breakdown.characteristics[key].value)/parseFloat(5))*100} list="ticks-size"/>
          <datalist id="ticks-size">
            <option value="33"></option>
            <option value="66"></option>
          </datalist>
        </div>)
      })}
    </div>
    </div>
  )
}

