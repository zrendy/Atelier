import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import React from 'react';
// import RelatedAndComparison from '../RelatedAndComparison.js';
// import axios from 'axios';
import OutfitCard from '../OutfitCard.js';
import {outfitTestData} from './TestData.js';

describe('RELATED AND COMPARISON OUTFIT CARD FUNCTIONALITY TEST', () => {
  beforeAll(() => {

    });
    afterEach(() => {
      cleanup()
    });

    it("Should render OUTFIT Card", async () => {
      let outfitList = [];
      const setOutfitListFunc = (product) => {outfitList.push(product)}
      render(<OutfitCard outfit={outfitTestData} outfitList={outfitList} />);

      const outfitcard = screen.getByTestId('outfit-card')
      expect(outfitcard).toBeTruthy()
    });

    it("Can click delete on OUTFIT Card", async () => {
      const outfitList = [];
      const setOutfitListFunc = (product) => {outfitList.push(product)}
      render(<OutfitCard outfit={outfitTestData} outfitList={[]} setOutfitList={setOutfitListFunc}/>);
      const outfitcard = screen.getByTestId('outfit-card')
      const deleteIcon = screen.getByTestId('delete-icon')
      fireEvent.click(deleteIcon)
      expect(outfitList.length).to(1);
    });
  });