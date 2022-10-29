import {render, screen, cleanup} from '@testing-library/react';
import renderer from 'react-test-renderer';
import WriteReview from '../components/WriteReview.js';
import {reviews, breakdown} from '../reviewsTestData.js';


afterEach(() => {
  cleanup()
});

var writeProps = {
    rerender: ()=>{},
    breakdown: breakdown,
    productName: "Jeans",
    modalOpen: ()=>{},
    handleModalClose: ()=>{}
  }


describe("WriteReview Component", ()=> {
  render(<WriteReview {...writeProps} />);
    const container = screen.getByTestId('write-review-comp')

  test("Should render WriteReview component", ()=> {
    expect(container).toBeInTheDocument();
  })

  test("Should have email field", () => {
    expect(container).toHaveTextContent('EMAIL')
  })

  test("Should have name field", () => {
    expect(container).toHaveTextContent('NAME')
  })

  test("Should have upload field", () => {
    expect(container).toHaveTextContent('Upload')
  })

  test("Should have characteristics selection table", () => {
    expect(container.getElementsByClassName('char')).toBeDefined()
  })

  test("It should have image upload component", ()=> {
    expect(container.getElementsByClassName("image-upload")).toBeDefined();
  })

  test('matches snapshot', ()=> {
    const tree = renderer.create(<WriteReview {...writeProps}/>).toJSON();
    expect(tree).toMatchSnapshot();
  })
})

