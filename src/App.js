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
      setCurrentData(viewedProduct[currentProduct]);
    } else {
      let options = {
        url: `/api/related/${currentProduct}`,
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

  const [log, setLog] = useState([]);
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
      {/* { currentProduct && <QuestionsAndAnswers product_id={currentProduct} />} */}
    </div>
    </WebsiteContext.Provider>
  );
}

export default App;
