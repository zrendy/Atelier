import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import React from 'react';
// import RelatedAndComparison from '../RelatedAndComparison.js';
// import axios from 'axios';
import YourOutfit from '../YourOutfit.js';
import outfitTestData from './TestData.js';

// jest.mock('axios');

describe('RELATED AND COMPARISON OUTFIT LIST FUNCTIONALITY TEST', () => {
  beforeAll(() => {

    });
    afterEach(() => {
      cleanup()
    });

    it("Should render OUTFIT List", async () => {
      render(<YourOutfit currentProduct={outfitTestData} />);
      const outfitlist = screen.getByTestId('outfit-list')
      expect(outfitlist).toBeTruthy()
    });

    it("Should have Add OUTFIT Card", () => {
      render(<YourOutfit currentProduct={outfitTestData} />);
      const addoutfit = screen.getByTestId('outfit-add')
      expect(addoutfit).toBeTruthy()
    });

    it("Can click on Add OUTFIT Card to add outfit", async () => {
      let outfitList = [];

      render(<YourOutfit currentProduct={outfitTestData} />);
      const addoutfit = screen.getByTestId('outfit-add')
      fireEvent.click(addoutfit)
      const outfit = screen.getByTestId('outfit-card')
      expect(outfit).toBeTruthy()
    });

    it("Should have right arrow at the begining", async () => {
      render(<YourOutfit currentProduct={outfitTestData} />);
      const rightarrow = screen.getByTestId('right-arrow')
      expect(rightarrow).toBeTruthy()
    });
    it("Should have and can click on left arrow after clicking right arrow", async () => {
      render(<YourOutfit currentProduct={outfitTestData} />);
      const rightarrow = screen.getByTestId('right-arrow')
      fireEvent.click(rightarrow)
      const leftarrow = screen.getByTestId('left-arrow')
      fireEvent.click(leftarrow)
      expect(rightarrow).toBeTruthy()
      expect(leftarrow).toBeTruthy()

    });


  });