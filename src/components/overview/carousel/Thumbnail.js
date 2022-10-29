import no_url from '../../../images/no_url.jpg';
import {useContext} from 'react';
import {WebsiteContext} from '../../../App.js';

const Thumbnail= ({thumbnail, showImage, id, index, expanded})=>{
  const {log, setLog} = useContext(WebsiteContext);
  let thumbnailStyle;
  if (id === index) {
    thumbnailStyle = {
      border: "thick rgb(177, 150, 108) solid"
    }
  } else {
    thumbnailStyle = {
      border: "none"
    }
  }
  return (
    <div className={expanded ? "expanded-thumbnail": "thumbnail"} onClick={(e)=>{showImage(id);
      setLog(oldLog => [...oldLog].concat(`clicked ${e.target.className}${id} showing image${id}`));}} style={thumbnailStyle} data-testid="thumbnail">
      <img  src={thumbnail} alt={no_url}></img>
    </div>
  )
}

export default Thumbnail;