import {useState, useEffect} from 'react';
import {CloudinaryContext, Image} from 'cloudinary-react';
import { fetchPhotos, openUploadWidget } from "../../../CloudinaryService.js";
import isEmail from 'validator/lib/isEmail';
import axios from 'axios';

export default function WriteReview ({rerender, breakdown, productName, modalOpen, handleModalClose}) {

  var product_id = parseInt(breakdown.product_id);
  //for collecting uploaded images
  const [images, setImages] = useState([]);
  //functions to handle upload onClick
  const beginUpload = tag => {
    const uploadOptions = {
      cloudName: "dvijvlkad",
      tags: [tag],
      uploadPreset: "upload"
    };
    openUploadWidget(uploadOptions, (error, photos) => {
      if (!error) {
        if(photos.event === 'success'){
          setImages([...images, `https://res.cloudinary.com/dvijvlkad/image/upload/${photos.info.public_id}`])
        }
      } else {
      }
    })
  }

  useEffect( () => {
    fetchPhotos("image", setImages);
  }, [])

  //states to hold form data;
  const [rating, setRating] = useState(null);
  const[body, setBody] = useState('');
  const[summary, setSummary] = useState('');
  const [recommend, setRecommend] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [size, setSize] = useState(0)
  const [quality, setQuality] = useState(0);
  const [width, setWidth] = useState(0)
  const [comfort, setComfort] = useState(0)
  const [fit, setFit] = useState(0)

  //handle clicking recommend
  var handleRecommend =(e)=>{
    if(e.target.value === "true") {
      setRecommend(true);
    } else{
      setRecommend(false);
    }
  }

  //handle clicking a rating
  var handleRating = (e) => {
    setRating(parseInt(e.target.value));
  }

  var characteristics = Object.keys(breakdown.characteristics);

  var handleSubmit = (e) => {
    var obj = {}
    for(var characteristic of characteristics) {
      var id = breakdown.characteristics[characteristic]["id"];
      switch (characteristic) {
        case "Size":
          obj[id]=size;
          break;
        case "Quality":
          obj[id]=quality;
          break;
        case "Width":
          obj[id]=width;
          break;
        case "Comfort":
          obj[id]=comfort;
          break;
        case "Fit":
          obj[id]=fit;
          break;
        default:
          break;
      }
    }
    var data = {
      product_id: product_id,
      rating: rating,
      summary: summary,
      body: body,
      recommend: recommend,
      name: name,
      email: email,
      photos: images,
      characteristics: obj,
    }
    e.preventDefault();
    if(body.length < 60 || !isEmail(email) || !name || !summary || !rating) {

      let message = '';
      if(body.length<60) {
        message+="Body is not long enough \n";
      }
      if(!isEmail(email)) {
        message+="Email is in an incorrect format \n";
      }
      if(!name) {
        message+="Name cannot be empty \n";
      }
      if(!summary) {
        message+="Please write a summary \n";
      }
      if(!rating) {
        message+="Please provide a rating \n";
      }
      alert(message)
    } else {
      axios.post('/api/reviews/post', data)
      .then(result => {
        handleModalClose();
        rerender();
      })
    }
  }

  return (
  <CloudinaryContext cloudName="dvijvlkad">
  <div data-testid="write-review-comp" className="modal" style={{display:`${modalOpen}`}}>
    <div className="modal-content">
      <form>
        <h4>Write Your Review</h4>
        {/*About Product*/}
        <h5>(About {productName})</h5>
        {/*recommended yes or no*/}
        <br></br>
        <span>Do you recommend this product?</span>
        <div className="recommendation" onChange={handleRecommend}><input type="radio" id="recommend-yes" name="recommend" value="true"></input>
        <label htmlFor="recommend-yes">Yes</label>
        <input type="radio" id="recommend-no" name="recommend" value="false"></input>
        <label htmlFor="recommend-no">No</label></div>

        {/*star rating*/}
        <div onChange={handleRating} className="rate">
          <input id="rating5" type="radio" name="rating" value="5"/>
          <label htmlFor="rating5"></label>
          <input id="rating4" type="radio" name="rating" value="4"/>
          <label htmlFor="rating4"></label>
          <input id="rating3" type="radio" name="rating" value="3"/>
          <label htmlFor="rating3">3</label>
          <input id="rating2" type="radio" name="rating" value="2"/>
          <label htmlFor="rating2"></label>
          <input id="rating1" type="radio" name="rating" value="1"/>
          <label htmlFor="rating1">1</label>
        </div>

        {/*Review Summary*/}
        <label htmlFor="review-summary">Review Summary</label>
        <br></br>
        <textarea onChange={(e)=> {
          e.preventDefault();
          setSummary(e.target.value);
        }} value={summary} id="review-summary" placeholder="Example: Best purchase ever!" maxLength="60"></textarea>

        <br></br>
        {/*Review Body*/}
        <label htmlFor="review-body">Review Body</label>
        <br/>
        <textarea minLength='50' maxLength='1000' required onChange={(e)=> {
          e.preventDefault();
          setBody(e.target.value);
        }} value={body} id="review-body" placeholder="Why did you like the product or not?"></textarea>
        <p>{1000-body.length} characters remaining.</p><br/>

        {/*image upload*/}
        <label>Upload</label>
        <div className="image-upload">
        {images.map(i => <Image
              key={i}
              publicId={i}
              fetch-format="auto"
              quality="auto"
            />)}
          <button onClick={function(e) {
            e.preventDefault();
            beginUpload();
          }}>Upload Images</button>
        </div>

        {/*Characteristics Table*/}
        <table className="char">
          <tbody>
          <tr>
          {characteristics.map((characteristic, i)=> {
            switch(characteristic) {
              case "Size":
                return (<td key={i}>
                  <tr><th>{characteristic}</th></tr>
                  <tr>
                  <td>
                  <div onChange={(e)=>{
                    setSize(parseInt(e.target.value));
                  }}>
                  <input id="s1" type="radio" name="size" value="1"/>
                  <label htmlFor="s1">A size too small<br/></label>
                  <input id="s2" type="radio" name="size" value="2"/>
                  <label htmlFor="s2">1/2 size too small<br/></label>
                  <input id="s3" type="radio" name="size" value="3"/>
                  <label htmlFor="s3">Perfect<br/></label>
                  <input id="s4" type="radio" name="size" value="4"/>
                  <label htmlFor="s4">1/2 size too big<br/></label>
                  <input id="s5" type="radio" name="size" value="5"/>
                  <label htmlFor="s5">A size too wide<br/></label>
                  </div>
                  </td>
                </tr></td>)

                case "Width":
                  return (<td key={i}>
                    <tr><th>{characteristic}</th></tr>
                    <tr>
                      <td>
                    <div onChange={(e)=> {
                      setWidth(parseInt(e.target.value));
                    }}>
                    <input id="w1" type="radio" name="width" value="1"/>
                    <label htmlFor="w1">Too Narrow<br/></label>
                    <input id="w2" type="radio" name="width" value="2"/>
                    <label htmlFor="w2">Slightly Narrow<br/></label>
                    <input id="w3" type="radio" name="width" value="3"/>
                    <label htmlFor="w3">Perfect<br/></label>
                    <input id="w4" type="radio" name="width" value="4"/>
                    <label htmlFor="w4">Slightly Wide<br/></label>
                    <input id="w5" type="radio" name="width" value="5"/>
                    <label htmlFor="w5">Too Wide<br/></label>
                    </div></td>
                  </tr></td>)

                  case "Comfort":
                    return (<td key={i}>
                    <tr><th>{characteristic}</th></tr>
                    <tr>
                      <td>
                      <div onChange={(e)=>{
                        setComfort(parseInt(e.target.value));
                      }}>
                      <input id="c1" type="radio" name="comfort" value="1"/>
                      <label htmlFor="c1">Uncomfortable<br/></label>
                      <input id="c2" type="radio" name="comfort" value="2"/>
                      <label htmlFor="c2">Slightly Comfortable<br/></label>
                      <input id="c3" type="radio" name="comfort" value="3"/>
                      <label htmlFor="c3">OK<br/></label>
                      <input id="c4" type="radio" name="comfort" value="4"/>
                      <label htmlFor="c4">Comfortable<br/></label>
                      <input id="c5" type="radio" name="comfort" value="5"/>
                      <label htmlFor="c5">Perfect<br/></label>
                      </div></td>
                    </tr></td>)
                    case "Quality":
                      return (<td key={i}>
                      <tr><th>{characteristic}</th></tr>
                      <tr>
                        <td>
                        <div onChange={e=> {
                          setQuality(parseInt(e.target.value));
                        }}>
                        <input id="q1" type="radio" name="quality" value="1"/>
                        <label htmlFor="q1">Poor<br/></label>
                        <input id="q2" type="radio" name="quality" value="2"/>
                        <label htmlFor="q2">Below Average<br/></label>
                        <input id="q3" type="radio" name="quality" value="3"/>
                        <label htmlFor="q3">What I Expected<br/></label>
                        <input id="q4" type="radio" name="quality" value="4"/>
                        <label htmlFor="q4">Pretty Great<br/></label>
                        <input id="q5" type="radio" name="quality" value="5"/>
                        <label htmlFor="q5">Perfect<br/></label>
                        </div></td>
                      </tr></td>)

                    case "Fit":
                      return (<td key={i}>
                        <tr><th>{characteristic}</th></tr>
                        <tr>
                        <td>
                        <div onChange={e=> {
                          setFit(parseInt(e.target.value));
                        }}>
                        <input id="f1" type="radio" name="fit" value="1"/>
                        <label htmlFor="f1">Runs Tight<br/></label>
                        <input id="f2" type="radio" name="fit" value="2"/>
                        <label htmlFor="f2">Runs Slightly Tight<br/></label><input id="f3" type="radio" name="fit" value="3"/>
                        <label htmlFor="f3">Perfect<br/></label>
                        <input id="f4" type="radio" name="fit" value="4"/>
                        <label htmlFor="f4">Runs Slightly Long<br/></label>
                        <input id="f5" type="radio" name="fit" value="5"/>
                        <label htmlFor="f5">Runs Long<br/></label>
                        </div></td>
                      </tr></td>)
                      default:
                        break;
            }
           })}
           </tr>
           </tbody>
        </table>
        <label htmlFor="name-input">Name</label>
        <br/>
        <input id="name-input" type="text" onChange={(e)=>{
          e.preventDefault();
          setName(e.target.value);
          }} value={name}/>
        <br/>
        <label htmlFor="email-input">Email</label>
        <br/>
        <input id='email-input' type="text" onChange={(e)=> {
          e.preventDefault();
          setEmail(e.target.value);
        }} value={email}/>
        <br/>
        <button type="submit" className="submit" onClick={handleSubmit}>Submit Review</button>
      </form>
      <button className="close-modal" onClick={handleModalClose}> Close</button>
    </div>
  </div>
  </CloudinaryContext>)
}