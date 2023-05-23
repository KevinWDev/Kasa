// Styles
import '../../utils/styles/Carousel.css';
// Assets
import arrowLeft from '../../assets/arrows/arrowLeft.png';
import arrowRight from '../../assets/arrows/arrowRight.png';
// Hooks
import { useEffect, useState } from 'react';

function Carousel({ picturesById }) {

  const [activeIndex, setActiveIndex] = useState(0);
  
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = picturesById.length - 1;
    } else if (newIndex >= picturesById.length) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    if (picturesById.length < 2) {
      const deleteBtn = document.querySelectorAll('.button-arrow');
      const deletIndic = document.querySelector('.indicators');

      deleteBtn.forEach((e) => {
        e.style.display = 'none';
      });
      deletIndic.style.display = 'none';
    }
  }, []);

  return (
    <div className="carousel">

        <img src={picturesById[activeIndex]} alt="" className='imgCarousel' />

      <div className="carousel-buttons">
        <button
          aria-label='previous'
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <img src={arrowLeft} className="imgArrow" alt="" />
        </button>
        <div className="indicators">
          {
            <span>
              {activeIndex + 1}/{picturesById.length}
            </span>
          }
        </div>
        <button
          aria-label='next'
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <img src={arrowRight} className="imgArrow" alt="" />
        </button>
      </div>
    </div>
  );
}

export default Carousel;
