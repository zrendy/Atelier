import {useContext} from 'react';
import {WebsiteContext} from '../../../App.js';

const StyleThumbnail = ({ thumbnailURL, setData, id, data, name}) => {
  const {log, setLog} = useContext(WebsiteContext);
  let imageContainerStyle, checkboxStyle;
  if(id === data[2]){
    imageContainerStyle ={
      border: "thick rgb(177, 150, 108) solid"
    };
    checkboxStyle ={
      display: "flex"
    }
  } else {
    imageContainerStyle ={border: 'none'};
    checkboxStyle = {display: 'none'};
  }
  // on click helper to set the style
  const styleOnClick = (e) => {
    let dataCopy = data.slice();
    dataCopy[2] = id;
    setData(dataCopy);
    let thumbnail = document.getElementsByClassName("style-thumbnail-container");
    let checkbox = document.getElementsByClassName("style-check-box");
    for (let i = 0; i < thumbnail.length; i++) {
      if (i === id) {
        thumbnail[i].style.border = "thick rgb(177, 150, 108) solid";
        checkbox[i].style.display = "flex"
      } else {
        thumbnail[i].style.border = "none";
        checkbox[i].style.display = "none";
      }
    }
    setLog(oldLog => [...oldLog].concat(`selected ${name}`))
  }
  return (<div className="style-thumbnail">
    <div className="style-name">
      {name}
    </div>
    <div className="style-check-box" style={checkboxStyle}>
      <i className="fa-regular fa-square-check"></i>
    </div>
    <div className="style-thumbnail-container" onClick={styleOnClick} style={imageContainerStyle}>
      <img src={thumbnailURL} ></img>
    </div>
  </div>
  );
};

export default StyleThumbnail;