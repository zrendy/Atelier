import {render, screen, cleanup} from '@testing-library/react';
import renderer from 'react-test-renderer';
import RatingsAndReviews from '../RatingsAndReviews.js';
import {reviews, breakdown} from '../reviewsTestData.js';
import axios from 'axios';


afterEach(() => {
  cleanup()
});

jest.mock('axios', () => ({
  __esModule: true,
  get: jest.fn(() => Promise.resolve({ data: "data" })),
  default: jest.fn(() => Promise.resolve({ data: 'data' })),
}));

describe("RatingsAndReviews Component", ()=> {
  render(<RatingsAndReviews product_id={37311} productName={'Jeans'} />);
    const container = screen.getByTestId('ratings-reviews-comp')

  test("Should render RatingsAndReviews component", ()=> {
    expect(container).toBeInTheDocument();
  })

  test("It should render ReviewList component", ()=> {
    expect(container.getElementsByClassName("reviews-list")).toBeDefined();
  })

  test('matches snapshot', ()=> {
    const tree = renderer.create(<RatingsAndReviews product_id={37311} productName={'Jeans'} />).toJSON();
    expect(tree).toMatchSnapshot();
  })
})

