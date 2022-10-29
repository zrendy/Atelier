import axios from 'axios';
import { useState, useEffect } from 'react';
import RelatedModal from './RelatedModal.js';
import Price from './Price.js';
import StarRating from '../shared/StarRating.js';
//In props
//related product id
//current product name, features
export default function RelatedCard(props) {
    const [isLoading, setLoading] = useState(true);
    const [relatedProduct, setRelatedProduct] = useState(null);
    // const [url, setUrl] = useState('../images/no_url.jpg');
    const [showModal, setShowModal] = useState(false);
    // const [starRating, setStarRating] = useState(0);
    console.log('RELATED CARD PROPS', props)
    // const calStar = (ratings) => {
    //     let totalNumOfRatings = 0;
    //     let total = 0;
    //     for (const num in ratings) {
    //         var val = parseInt(num);
    //         var count = parseInt(ratings[num]);
    //         totalNumOfRatings += count;
    //         total += (val * count);
    //     }
    //     let averageRating = ((total / parseFloat(totalNumOfRatings)) * 100) / 100;
    //     return averageRating.toFixed(1);
    // };

    //Make sure to show sales price
    useEffect(() => {
        // if (props.viewedProduct.hasOwnProperty(currentProduct)) {
        //     console.log('BEFORE ', viewedProduct, currentData);
        //     setCurrentData(viewedProduct[currentProduct]);
        //     console.log('APP JS NO AXIOS USED', currentProduct, currentData);
        //   }
        if (props.viewedProduct.hasOwnProperty(props.relatedProduct)) {
            console.log('SAVED API CALL')
            setRelatedProduct(props.viewedProduct[props.relatedProduct]);
            setLoading(false);
        } else {
            console.log('NEED TO CALL API');
            let options = {
                url: `/api/related/${props.relatedProduct}`,
                //url: `/api/related/${props.relatedProduct}`,
                method: 'get',
            }
            axios.get(options.url)
                .then((data) => {
                    setRelatedProduct(data.data);
                    // setStarRating(calStar(data.data.ratings));
                    let temp = props.viewedProduct;
                    temp[data.data.product_id] = data.data;
                    props.setViewedProduct(temp);
                    setLoading(false);

                })
                .catch(err => { console.log('RELATED CARD JS ', err) });
        }
        // return setLoading(true);
    }, [props.relatedProduct]);

    const handleModal = () => {
        if (showModal === true) {
            setShowModal(false);
        } else {
            setShowModal(true);
        }
    }

    const cardHandler = () => {
        // console.log('card clicked');
        // console.log(relatedProduct);
        props.setCurrentProduct(relatedProduct.product_id);
    }

    if (isLoading) {
        return (<div className='related-card' data-testid='related-card-loading'>Loading Production Information</div>)
    }

    return (
        <div className='related-card' data-testid='related-card'>
            <div onClick={cardHandler} data-testid='card-click'>
                <img className='card-image' src={relatedProduct.default_style[0].photos[0].url} alt={relatedProduct.name} ></img>
                <div className='card-info'>
                    <i className='card-category'>{relatedProduct.category}</i>
                    <b className='card-name'>{relatedProduct.name}</b>
                    <Price original_price={relatedProduct.default_style[0].original_price} sale_price={relatedProduct.default_style[0].sale_price} />
                    {/* <small className='card-price'>{'$ ' + relatedProduct.default_style.original_price}</small>
                <small className='card-sale-price'>{'$ ' + relatedProduct.default_style.sale_price}</small> */}
                    <small className='card-stars'>
                        <StarRating rating={relatedProduct.ratings} />
                    </small>
                </div>
            </div>
            <div className='card-modal'>
                <i class="fa-regular fa-star" onClick={handleModal} data-testid='modal-click'></i>
                <RelatedModal showModal={showModal} onClose={handleModal} currentData={props.currentData} relatedProduct={relatedProduct} />
            </div>
        </div>


    )
}