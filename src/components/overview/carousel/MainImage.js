import no_url from '../../../images/no_url.jpg';
import {useState, useContext} from 'react';
import {WebsiteContext} from '../../../App.js';


const MainImage = ({ id, image, expanded, expandOnClick }) => {
  const [viewOn, setViewOn] = useState('false');
  const {log, setLog} = useContext(WebsiteContext);

  const imgOnClick = (e)=>{
    if(viewOn !== false) {
      turnOffViewMode(e)
    }
    setViewOn(!viewOn);
    setLog(oldLog => [...oldLog].concat(`clicked ${e.target.className} magnified view ${viewOn}`));
  }
  const turnOnViewMode = (e) => {
    e.target.style.background = `url(${image})`;
    e.target.style.backgroundSize = "250%";
    e.target.style.objectPosition = "-99999px 99999px";
    e.target.style.cursor ="zoom-out";
    // turning off elements
    document.getElementsByClassName('expanded-thumbnail')[0].style.opacity = "0";
    document.getElementsByClassName('expanded-thumbnails-container')[0].style.opacity = "0";
    document.getElementsByClassName('expanded-thumbnail-previous')[0].style.opacity = "0";
    document.getElementsByClassName("expanded-thumbnail-next")[0].style.opacity ="0";
    document.getElementsByClassName("expanded-main-previous")[0].style.opacity ="0";
    document.getElementsByClassName("expanded-main-next")[0].style.opacity = "0";
    let offsetX, offsetY, x, y
    var zoomer = e.currentTarget;
    e.nativeEvent.offsetX ? offsetX = e.nativeEvent.offsetX : offsetX = 0
    e.nativeEvent.offsetY ? offsetY = e.nativeEvent.offsetY : offsetY = 0
    x = offsetX / e.target.offsetWidth * 100
    y = offsetY / e.target.offsetHeight * 100
    zoomer.style.backgroundPosition = x + '% ' + y + '%';

  }

  const turnOffViewMode = (e) => {
    e.target.style.background = "gray"
    e.target.style.objectPosition = "";
    e.target.style.cursor ="cell";
    document.getElementsByClassName('expanded-thumbnail')[0].style.opacity = "1";
    document.getElementsByClassName('expanded-thumbnails-container')[0].style.opacity = "1";
    document.getElementsByClassName('expanded-thumbnail-previous')[0].style.opacity = "1";
    document.getElementsByClassName("expanded-thumbnail-next")[0].style.opacity ="1";
    document.getElementsByClassName("expanded-main-previous")[0].style.opacity ="1";
    document.getElementsByClassName("expanded-main-next")[0].style.opacity = "1";
  }
  return (
    <div className={expanded ? "expanded-main-image" : "main-image"} data-testid="main-image">
      <img src={image} id={id} alt={no_url} onMouseMove={viewOn && expanded ? turnOnViewMode : () => { }} onMouseLeave={viewOn && expanded ? turnOffViewMode : () => { }} onClick={expanded ? imgOnClick : expandOnClick}></img>
    </div>
  )
}

export default MainImage;
