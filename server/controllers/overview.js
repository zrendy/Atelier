const axios = require('axios');

const addToCart = (req, res) => {
  let skuID = parseInt(req.params.sku_id);
  console.log(`adding ${skuID} to cart`);
  var option = {
    url: "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/cart/",
    headers: {"Authorization": process.env.AUTH},
    data: {
      sku_id: skuID
    },
    method: 'post'
  }
  axios(option)
  .then((response)=>{
    res.status(201).end(response.data);
  })
  .catch((err)=>{
    res.status(err.response.status).send(err);
  })

}


module.exports = {
  addToCart: addToCart
}