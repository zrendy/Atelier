import OutfitCard from './OutfitCard.js';
import { useEffect, useState } from 'react';
import React from 'react';

//props should contain current product infos
//category, name, price(sale or not), star reviews
export default function YourOutfit(props) {
  // console.log(props);
  const [outfitList, setOutfitList] = useState([]);
  const [showLeftArrow, setLeftArrow] = useState(false);
  const [showRightArrow, setRightArrow] = useState(false);

  //slide value in px
  const slideWindow = 280;

  const prevHandler = () => {
    let prevSlide = document.getElementById('sliderOutfit');
    prevSlide.scrollLeft -= slideWindow;
    if (prevSlide.scrollLeft === 0) {
      setLeftArrow(false);
    }
    setRightArrow(true);
  }

  const nextHandler = () => {
    let nextSlide = document.getElementById('sliderOutfit');
    nextSlide.scrollLeft += slideWindow;
    setLeftArrow(true);
    if (nextSlide.scrollLeft >= (nextSlide.scrollWidth - nextSlide.clientWidth)) {
      setRightArrow(false);
    }
  }

  const handleAddOutfit = () => {
    if (!outfitList.includes(props.currentProduct)){
      setOutfitList(existing => [...existing, props.currentProduct])
      // console.log(outfitList);
    }
  }

  useEffect(() => {
    // console.log('rendered', outfitList);
    if (outfitList.length > 0) {
      setRightArrow(true)
    }
  }, [outfitList])

  return (
    <div className='outfit-list' data-testid='outfit-list'>
      <h1 className='related-title'>Your Outfit</h1>

      <div className='outfit'>
      {showLeftArrow ? <i className='outfit-left-arrow' onClick={prevHandler}>
        <i className="fa-solid fa-chevron-left" data-testid='left-arrow'></i>
      </i> : null}
      {showRightArrow ? <i className='outfit-right-arrow' >
        <i className="fa-solid fa-chevron-right" data-testid='right-arrow' onClick={nextHandler}></i>
      </i> : null}
      <button type='button' className='outfit-add' onClick={handleAddOutfit} data-testid='outfit-add'>
          <div className='outfit-add-icon' >
            <i class='fa fa-plus' aria-hidden='true'></i>
            <h2 className='outfit-add-text'> Add This Outfit</h2>
          </div>
        </button>
      <div className='outfit-carousel' id='sliderOutfit'>
        {outfitList && outfitList.map((outfit) => {
          return (
            <OutfitCard outfit={outfit} outfitList={outfitList} setOutfitList={setOutfitList} />
            )
        })
        }
      </div>
      </div>



    </div>
  )
}