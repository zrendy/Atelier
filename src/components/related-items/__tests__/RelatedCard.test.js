import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import React from 'react';
// import RelatedAndComparison from '../RelatedAndComparison.js';
// import axios from 'axios';
import RelatedCard from '../RelatedCard.js';
import {outfitTestData, compareTestData, outfitTestDataId} from './TestData.js';
import axios from 'axios';

jest.mock('axios', () => ({
  get: () => Promise.resolve({ data: 'data' }),
}));

describe('RELATED AND COMPARISON RELATED CARD FUNCTIONALITY TEST', () => {
  beforeAll(() => {

    });
    afterEach(() => {
      cleanup()
    });

    it("Should render RELATED Card and show loading", async () => {
      render( <RelatedCard />);
      const relatedcard = screen.getByTestId('related-card-loading')
      expect(relatedcard).toBeTruthy()
    });

    it("Should render RELATED Card", async () => {
      render( <RelatedCard relatedProduct={outfitTestDataId}/>);
      await screen.findByTestId('related-card');
    });

    it("Should have MODAL in RELATED Card", async () => {
      render( <RelatedCard />);
      await screen.findByTestId('modal-click')
    });

  });