import Overview from './components/overview/Overview.js';
import RelatedAndComparison from './components/related-items/RelatedAndComparison.js';
import RatingsAndReviews from './components/ratings-reviews/RatingsAndReviews.js'
import QuestionsAndAnswers from './components/question-answer/questionsAnswersMain.js';
import axios from 'axios'
import { useState, useEffect, createContext } from 'react';
export const WebsiteContext = createContext(null);

function App() {

  const [currentProduct, setCurrentProduct] = useState('37311');
  const [currentData, setCurrentData] = useState(null);
  const [viewedProduct, setViewedProduct] = useState({}); //{product_id: product-data-retrieved-from-server}

  useEffect(() => {
    if (viewedProduct.hasOwnProperty(currentProduct)) {
      console.log('BEFORE ', viewedProduct, currentData);
      setCurrentData(viewedProduct[currentProduct]);
      console.log('APP JS NO AXIOS USED', currentProduct, currentData);
    } else {
      let options = {
        url: `/api/related/${currentProduct}`,
        //url: `/api/related/${currentProduct}`,
        method: 'get',
      };
      axios.get(options.url)
        .then((data) => {
          setCurrentData(data.data);
          let temp = viewedProduct;
          temp[data.data.product_id] = data.data;
          setViewedProduct(temp);
        })
        .catch(err => { console.log(err) })
    }
  }, [currentProduct, currentData]);

  console.log('INSIDE APP JS', viewedProduct);


  const [log, setLog] = useState([]);
  console.log('user log', log);
  return (
    <WebsiteContext.Provider value={{log, setLog}}>
    <div className="App" data-testid="App">
      {currentData && <Overview setCurrentProduct={setCurrentProduct} currentData={currentData} />}
      {currentData && currentProduct && viewedProduct &&<RelatedAndComparison currentData={currentData}
      currentProduct={currentProduct}
      setCurrentProduct={setCurrentProduct}
      viewedProduct={viewedProduct}
      setViewedProduct={setViewedProduct}/>}
      {currentProduct && currentData && <RatingsAndReviews productName={currentData.name} product_id={currentProduct} />}
      { currentProduct && <QuestionsAndAnswers product_id={currentProduct} />}
    </div>
    </WebsiteContext.Provider>
  );
}

export default App;
