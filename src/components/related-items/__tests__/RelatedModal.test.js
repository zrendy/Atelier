import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import React from 'react';
// import RelatedAndComparison from '../RelatedAndComparison.js';
// import axios from 'axios';
import RelatedModal from '../RelatedModal.js';
import {outfitTestData, compareTestData, outfitTestDataId} from './TestData.js';

describe('RELATED AND COMPARISON RELATED MODAL FUNCTIONALITY TEST', () => {
  beforeAll(() => {

    });
    afterEach(() => {
      cleanup()
    });

    it("Should render Modal if showModal is true", async () => {
      const setCurrentProduct = () => {
      }
      render(<RelatedModal showModal={true} currentData={outfitTestData} relatedProduct={compareTestData} />);
      const relatedmodal = screen.getByTestId('related-modal')
      expect(relatedmodal).toBeTruthy()
    });

    it("Should NOT render Modal if showModal is false", async () => {
      const setCurrentProduct = () => {
      }
      render(<RelatedModal showModal={false} currentData={outfitTestData} relatedProduct={compareTestData} />);
      const relatedmodal = screen.queryByTestId('related-modal');
      console.log(relatedmodal);
      expect(relatedmodal).not.toBeTruthy();
    });

  });