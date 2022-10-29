import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import React from 'react';
// import RelatedAndComparison from '../RelatedAndComparison.js';
// import axios from 'axios';
import RelatedAndComparison from '../RelatedAndComparison.js';
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

    it("Should render Related List and YourOutfit ", async () => {
      render(<RelatedAndComparison  />);
      const relatedlist = screen.getByTestId('related-comparison')
      expect(relatedlist).toBeTruthy()
    });


  });