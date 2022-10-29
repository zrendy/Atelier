import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import React from 'react';
// import RelatedAndComparison from '../RelatedAndComparison.js';
// import axios from 'axios';
import RelatedList from '../RelatedList.js';
import {outfitTestData, outfitTestDataId} from './TestData.js';
import axios from 'axios';

jest.mock('axios', () => ({
  get: () => Promise.resolve({ data: 'data' }),
}));

describe('RELATED AND COMPARISON RELATED LIST FUNCTIONALITY TEST', () => {
  beforeAll(() => {

    });
    afterEach(() => {
      cleanup()
    });

    it("Should render Related List and Related Card", async () => {
      render(<RelatedList  />);
      const relatedlist = screen.getByTestId('related-list')
      expect(relatedlist).toBeTruthy()
    });

    it("Should have right arrow at the begining", async () => {
      const currentProduct = '37311';
      const setCurrentProduct = () => {};

      render(<RelatedList currentData={outfitTestData} currentProduct={currentProduct} />);
      const rightarrow = screen.getByTestId('right-arrow')
      expect(rightarrow).toBeTruthy()
    });
    it("Should have and can click on left arrow after clicking right arrow", async () => {
      const currentProduct = '37311';
      const setCurrentProduct = () => {};

      render(<RelatedList currentData={outfitTestData} currentProduct={currentProduct} />);
      const rightarrow = screen.getByTestId('right-arrow')
      fireEvent.click(rightarrow)
      const leftarrow = screen.getByTestId('left-arrow')
      fireEvent.click(leftarrow)
      expect(rightarrow).toBeTruthy()
      expect(leftarrow).toBeTruthy()

    });

    // it("Can click delete on OUTFIT Card", async () => {
    //   const setOutfitListFunc = () => {}
    //   render(<OutfitCard currentProduct={outfitTestData} outfitList={[]} setOutfitList={setOutfitListFunc}/>);
    //   const outfitcard = screen.getByTestId('outfit-card')
    //   const deleteIcon = screen.getByTestId('delete-icon')
    //   fireEvent.click(deleteIcon)
    //   expect(outfitcard).not.toBeTruthy()
    // });
  });