import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import React from 'react';
import App from '../App.js';
//import {outfitTestData, outfitTestDataId} from './TestData.js';
import axios from 'axios';

jest.mock('axios', () => ({
  get: () => Promise.resolve({ data: 'data' }),
}));

describe('APP JS FUNCTIONALITY TEST', () => {
  beforeAll(() => {

    });
    afterEach(() => {
      cleanup()
    });

    it("Should render APP ", async () => {
      render(<App  />);
      const app = screen.getByTestId('App')
      expect(app).toBeTruthy()
    });


  });
