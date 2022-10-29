import ImageGallery from './carousel/ImageGallery.js';
import ProductSummary from './product-info/ProductSummary.js';
import Slogan from './product-info/Slogan.js';
import Navbar from '../Navbar.js';
import {useState, useEffect} from 'react';

export default function Overview ({setCurrentProduct, currentData}) {
  const [data, setData] = useState([{},[],0, 0])

  useEffect(()=>{
    // data[0] category, features name
    // data[1] styles array
    // data[2] current image index
    // data[3] ratings
    if (currentData.length === 0) {
      return;
    } else {
      let dataCopy = [];
      dataCopy.push({
        name: currentData.name,
        category: currentData.category,
        features: currentData.features,
        slogan: currentData.slogan,
        description: currentData.description});
      dataCopy.push(currentData.default_style);
      dataCopy.push(0);
      dataCopy.push(currentData.ratings);
      setData(dataCopy);
    }
  },[currentData]);

  return (
    <div className="overview" data-testid="overview">
      <Navbar setCurrentProduct={setCurrentProduct}/>
      <div className="image-summary">
      <ImageGallery data={data}/>
      <ProductSummary data={data} setData={setData}/>
      </div>
      <Slogan slogan={data[0].slogan} description={data[0].description} features={data[0].features}/>
    </div>
  )
}