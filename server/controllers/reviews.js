const axios = require('axios');

module.exports.reviews = (req, res) => {
  var end = req.params.endpoint;
  console.log('END POINT', end)
  switch (req.method) {
    case "GET":
      //to render Reviews-List component
      if(end === "base") {
        var options = {
          url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews',
          params: {
            page: parseInt(req.query.page),
            count: parseInt(req.query.count),
            sort: req.query.sort,
            product_id: parseInt(req.query.product_id)
          },
          method: "get",
          headers: {"Authorization": process.env.AUTH}
        }
        axios(options)
        .then(result => {
          res.send(result.data)
        })
      }
      //to render the Ratings component
      if(end === "meta") {
        var options = {
          url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/${end}`,
          params: {
            product_id: parseInt(req.query.product_id)
          },
          method: "get",
          headers: {"Authorization": process.env.AUTH}
        }
        axios(options)
        .then(result => {
          res.send(result.data)
        })
      }
      break;
    case "POST":
      if(end === "post") {
        console.log('INSIDE POST WRITING REVIEW', JSON.stringify(req.body))
        var options = {
          url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews',
          data: req.body,
          method: "post",
          headers: {"Authorization": process.env.AUTH}
        }
        axios(options)
        .then(result => {
          res.send(result);
        })
        .catch(err => {
          res.send(err);
        })
      }
    case "PUT":
      if(end === "helpful") {
        console.log('REVIEW ID', req.query.review_id)
        var options = {
          url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/${req.query.review_id}/helpful`,
          method: "put",
          headers: {"Authorization": process.env.AUTH}
        }
        axios(options)
        .then(result => {
          res.send('ok')
        })
      }
  }
}
