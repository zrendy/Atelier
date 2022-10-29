// import { render, screen, waitFor, cleanup } from '@testing-library/react';
// import React from 'react';
// import App from '../App.js';
import axios from 'axios';
jest.mock('axios');


// describe('Overall Question Component and Functionality', () => {
  beforeAll(() => {
      axios.mockResolvedValue({ data: null });
    });
    afterEach(() => {
      cleanup()
    });


//     it("Should render all the component in App", async () => {
//       render(<App />);
//       const app = screen.getByTestId('App')
//       expect(app).toBeTruthy()
//     });
//   });
