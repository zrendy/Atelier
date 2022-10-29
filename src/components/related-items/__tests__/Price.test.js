import { render, screen, waitFor, cleanup } from '@testing-library/react';
import React from 'react';
import RelatedAndComparison from '../RelatedAndComparison.js';
import axios from 'axios';
import Price from '../Price.js';

jest.mock('axios');

describe('RELATED AND COMPARISON PRICE FUNCTIONALITY TEST', () => {
  beforeAll(() => {

    });
    afterEach(() => {
      cleanup()
    });

    it("Should render Price component and card-price class if sale-price is null", async () => {
      render(<Price original_price={'100'} sale_price={null}/>);
      const app = screen.getByTestId('card-price')
      expect(app).toBeTruthy()
    });

    it("Should render Price component and on-sale class if sale-price is not null", async () => {
      render(<Price original_price={'100'} sale_price={'20'}/>);
      const sale = screen.getByTestId('on-sale')
      expect(sale).toBeTruthy();
    });

    it("Should have original price stroke and sale price if sale-price is not null", async () => {
      render(<Price original_price={'100'} sale_price={'20'}/>);
      const stroke = screen.getByTestId('stroke-price')
      const sale = screen.getByTestId('sale-price')
      expect(stroke).toBeTruthy();
      expect(sale).toBeTruthy();
    });

  });