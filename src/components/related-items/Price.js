export default function Price(props) {
  //if (props.sale_price)
  if (props.sale_price===null) {
    return <small className='card-price' data-testid='card-price'>{'$ ' + props.original_price}</small>
  } else {
    return (
      <div className='on-sale' data-testid='on-sale'>
        <small className='stroke-price' data-testid='stroke-price'>{'$ ' + props.original_price}</small>
        <small className='sale-price' data-testid='sale-price'>{' $ ' + props.sale_price}</small>
      </div>
    )
  }
}