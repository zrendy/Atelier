import { render, screen, waitFor, cleanup, fireEvent } from '@testing-library/react';
import axios from 'axios';
import React from 'react';
// Overview
import Overview from '../Overview.js';
// carousel
import ImageGallery from '../carousel/ImageGallery.js';
import MainImage from '../carousel/MainImage.js';
import Thumbnail from '../carousel/thumbnail.js';
// product info
import ProductSummary from '../product-info/ProductSummary.js';
import Slogan from '../product-info/Slogan.js';
// shopping cart
import ShoppingCart from '../shopping-cart/ShoppingCart.js';
import SizeSelector from '../shopping-cart/SizeSelector.js';
// style selector
import StyleSelector from '../style-selector/StyleSelector.js';
import StyleThumbnail from '../style-selector/StyleThumbnail.js'
import {DummyCurrentData, DummyCurrentProduct, DummyData} from './dummyData';
jest.mock('axios');


describe('comprehensive overview widget test', () => {
    afterEach(() => {
      cleanup()
    });


    it("Should render all the components in Overview widget", async () => {
      render(<Overview currentData={DummyCurrentData}/>);
      const navbar = screen.getByTestId('navbar');
      const imageGallery = screen.getByTestId('image-gallery');
      const productSummary = screen.getByTestId('product-summary');
      const slogan = screen.getByTestId('slogan');

      expect(imageGallery).toBeTruthy();
      expect(navbar).toBeTruthy();
      expect(productSummary).toBeTruthy();
      expect(slogan).toBeTruthy();
    });

    it("thumbnail navigation buttons should not show when there are less than 8 photos", async ()=>{
      render(<Overview currentData={DummyCurrentData}/>);
      const thumbnailNext = screen.getByTestId('thumbnail-next');
      const thumbnailprevious = screen.getByTestId('thumbnail-previous');

      expect(thumbnailNext).toBeTruthy();
      expect(thumbnailNext.style.opacity).toEqual('0');
      expect(thumbnailprevious).toBeTruthy();
      expect(thumbnailprevious.style.opacity).toEqual('0');
    })

    it("Image Gallery should render all images, Thumbnail should have same number as the photos given", async ()=> {
      render(<Overview currentData={DummyCurrentData}/>);
      const thumbnail = screen.getAllByTestId('thumbnail');
      const mainImage = screen.getAllByTestId('main-image');

      expect(mainImage.length).toEqual(6);
      expect(thumbnail.length).toEqual(6);
    })

    it("Image Gallery navigation button should let the user scroll through images", async ()=>{
      render(<Overview currentData={DummyCurrentData}/>);
      const mainNext = screen.getByTestId('main-next');
      const mainPrevious = screen.getByTestId('main-previous');
      // intial x index
      let imageIndex = screen.getByTestId('slides').style._values.transform;
      // "translateX(0vh)"

      // next clicked once
      fireEvent.click(mainNext);
      let imageIndex1 = screen.getByTestId('slides').style._values.transform;
      // "translateX(-80vh)"

      // previous clicked twice
      fireEvent.click(mainPrevious);
      fireEvent.click(mainPrevious);
      let imageIndex2 = screen.getByTestId('slides').style._values.transform;
      // "translateX(-400vh)"

      // next pressed once
      fireEvent.click(mainNext);
      let imageIndex3 = screen.getByTestId('slides').style._values.transform;
      // "translateX(0vh)"

      expect(mainNext).toBeTruthy()
      expect(mainPrevious).toBeTruthy();
      expect(imageIndex).toEqual("translateX(0vh)");
      expect(imageIndex1).toEqual("translateX(-80vh)");
      expect(imageIndex2).toEqual("translateX(-400vh)");
      expect(imageIndex3).toEqual("translateX(0vh)");
    })

    it("thumbnail navigation buttons should let the user scroll through thumbnails", async ()=>{
      render(<ImageGallery data={DummyData}/>);
      const thumbnailNext = screen.getByTestId('thumbnail-next');
      const thumbnailPrevious = screen.getByTestId('thumbnail-previous');

      // intial y index
      let thumbnailIndex = screen.getByTestId('thumbnails-container').style._values.transform;
      // "translateY(0vh)"

      // click previous once
      fireEvent.click(thumbnailPrevious);
      let thumbnailIndex1 = screen.getByTestId('thumbnails-container').style._values.transform;
      // "translateY(0vh)"

      // click Next once
      fireEvent.click(thumbnailNext);
      let thumbnailIndex2 = screen.getByTestId('thumbnails-container').style._values.transform;
      // "translateY(-6vh)"

      // click Next 4 times
      fireEvent.click(thumbnailNext);
      fireEvent.click(thumbnailNext);
      fireEvent.click(thumbnailNext);
      fireEvent.click(thumbnailNext);
      let thumbnailIndex3 = screen.getByTestId('thumbnails-container').style._values.transform;
      // "translateY(-24vh)"

      // click previous once
      fireEvent.click(thumbnailPrevious);
      let thumbnailIndex4 = screen.getByTestId('thumbnails-container').style._values.transform;
      // "translateY(-18vh)"

      expect(thumbnailIndex).toEqual("translateY(0vh)")
      expect(thumbnailIndex1).toEqual("translateY(0vh)")
      expect(thumbnailIndex2).toEqual("translateY(-6vh)")
      expect(thumbnailIndex3).toEqual("translateY(-24vh)")
      expect(thumbnailIndex4).toEqual("translateY(-18vh)")
      console.log(thumbnailIndex3);
    })

  });


