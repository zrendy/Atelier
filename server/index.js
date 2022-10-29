
require('dotenv').config()
const express = require('express');
const path = require('path');
const app = express();
const {reviews} = require('./controllers/reviews.js');
const {addToCart} = require('./controllers/overview.js');
const {related} = require('./controllers/related.js');
var { router } = require('./controllers/questions.js');
// require file in server controllers q/a


//middleware
app.use(express.json());
//serve up REACT static assets, static assets are created during build.
app.use(express.static(path.join(__dirname, "../build")))

// questions router
app.get('/api/questions', router);
// post request router
// app.post('/api/questions', router)


app.all('/api/reviews/:endpoint', reviews);

// overview
app.post('/api/cart/:sku_id', addToCart);

app.all('/api/related/:endpoint', related);

//listen at environment PORT 3000 (see .env)
app.listen(process.env.PORT, () => {
  console.log('LISTENING AT PORT', process.env.PORT);
});
