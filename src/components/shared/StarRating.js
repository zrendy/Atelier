
export default function StarRating ({rating}) {
  //average stars
  //divide by 5
  var percent = (rating/parseFloat(5))*100;
  var style = {width:`${percent}%`}
  return (
    <div className="star-rating">
      <div className="empty-stars"></div>
      <div className="full-stars" style={style}></div>
    </div>
  )
}