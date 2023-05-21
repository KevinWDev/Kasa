// Styles
import '../../utils/styles/Carousel.css';
// Assets
import arrowLeft from '../../assets/arrows/arrowLeft.png';
import arrowRight from '../../assets/arrows/arrowRight.png';
// Hooks
import { useEffect, useState } from 'react';

function Carousel({ dataById }) {

  const picturesbYId = dataById?.pictures;
  const [activeIndex, setActiveIndex] = useState(0);
  
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = picturesbYId.length - 1;
    } else if (newIndex >= picturesbYId.length) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    if (picturesbYId.length < 2) {
      const deleteElem = document.querySelectorAll('.button-arrow');
      const deletIndec = document.querySelector('.indicators');

      deleteElem.forEach((e) => {
        e.style.display = 'none';
      });
      deletIndec.style.display = 'none';
    }
  }, []);

  return (
    <div className="carousel">
      <div
        className="inner"
        style={{ transform: `translate(-${activeIndex * 100}%)` }}
      >
        {picturesbYId.map((item, index) => {
          return <img className="imgCarousel" src={item} key={index} alt="" />;
        })}
      </div>

      <div className="carousel-buttons">
        <button
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
              {activeIndex + 1}/{picturesbYId.length}
            </span>
          }
        </div>
        <button
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
