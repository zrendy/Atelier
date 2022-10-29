const SizeSelector = ({size, sku, maxQuantity, sizeOnClick})=>{
  return (
    <div className={size+','+sku+','+maxQuantity+' size-option'} onClick={sizeOnClick}>{size}</div>
  )
}

export default SizeSelector;