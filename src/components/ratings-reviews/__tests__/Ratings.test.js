import {render, screen, cleanup} from '@testing-library/react';
import renderer from 'react-test-renderer';
import Ratings from '../components/Ratings.js';
import {reviews, breakdown} from '../reviewsTestData.js';


afterEach(() => {
  cleanup()
});



describe("Ratings Component", ()=> {
  render(<Ratings breakdown={breakdown} />);
    const container = screen.getByTestId('ratings-comp')

  test("Should render Ratings component", ()=> {
    expect(container).toBeInTheDocument();
  })

  test("Should have '% of reviews recommend this product'", () => {
    expect(container).toHaveTextContent('% of reviews recommend this product')
  })

  test("It should render StarRating component", ()=> {
    expect(container.getElementsByClassName("star-rating")).toBeDefined();
  })

  test('matches snapshot', ()=> {
    const tree = renderer.create(<Ratings breakdown={breakdown}/>).toJSON();
    expect(tree).toMatchSnapshot();
  })
})
