// require("dotenv").config();
const express = require('express')
// const { join } = require('path');
// router instance = middleware
const router = express.Router()
const axios = require('axios');
const app = express();

const getProductId = (req, res) => {
  // console.log('testing this works', req.query)
  const options = {
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions',
    headers: {"Authorization": process.env.AUTH},
    params: {
      product_id: parseInt(req.query.product_id)
    },
    method: 'get'
  }
   axios(options)
  .then((result)=>{
    console.log(result, 'from api call server ')
    res.send(result.data)
  })
  .catch((error)=>{
   res.sendStatus(501, 'error making request ')
  })
}


const postQuestion = (req, res) => {
  // console.log('testing this works', req.query)
  const options = {
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions',
    headers: {"Authorization": process.env.AUTH},
    params: {
      product_id: parseInt(req.query.product_id)
    },
    method: 'post'
  }
   axios(options)
  .then((result)=>{
    console.log(result, 'from api call server ')
    res.send(result.data)
  })
  .catch((error)=>{
   res.sendStatus(501, 'error making request ')
  })
}






    module.exports = {
      router: getProductId
    };