import {render, screen, cleanup} from '@testing-library/react';
import renderer from 'react-test-renderer';
import ReviewsList from '../components/ReviewsList.js';
import {reviews, breakdown} from '../reviewsTestData.js';


afterEach(() => {
  cleanup()
});

var reviewsListProps = {
  reviews: reviews.results,
  breakdown: breakdown,
  rerender: '()=> {}',
  handleHelpful: '()=>{}',
  productName: 'NICE',
}

describe("ReviewsList Component", ()=> {
  render(<ReviewsList {...reviewsListProps} />);
    const rrComp = screen.getByTestId('reviewslist-comp')

  test("Should render ReviewsList component", ()=> {
    expect(rrComp).toBeInTheDocument();
  })

  test("Should have the body of one of the reviews", () => {
    expect(rrComp).toHaveTextContent('This product is super duper cool and i lkove it')
  })

  test("It should render review component", ()=> {
    expect(rrComp.getElementsByClassName("review")).toBeDefined();
  })

  test('matches snapshot', ()=> {
    const tree = renderer.create(<ReviewsList {...reviewsListProps}/>).toJSON();
    expect(tree).toMatchSnapshot();
  })
})






