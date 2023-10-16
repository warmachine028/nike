/** @format */

import ReviewCard from '../components/ReviewCard';
import { reviews } from '../constants';
import { useEffect, useState } from 'react';

const CustomerReviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= reviews.length) {
      newIndex = reviews.length - 1;
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    let intervalFunc;

    if (autoplay) {
      intervalFunc = setInterval(() => {
        updateIndex((activeIndex + 1) % reviews.length);
      }, 3000);
    }
    return () => {
      clearInterval(intervalFunc);
    };
  }, [activeIndex, autoplay]);

  const handlePlayPauseToggle = () => {
    setAutoplay(!autoplay);
  };

  return (
    <section className="bg-pale-blue padding dark:bg-slate-700">
      <div className="max-container">
        <h3 className="font-palanquin text-4xl font-bold text-center dark:text-gray-100">
          What Our
          <span className="text-coral-red"> Customers </span>
          Say?
        </h3>
        <p className="info-text m-auto mt-4 max-w-lg text-center dark:text-gray-300">
          Hear Genuine stories from our satisfied customers about their exceptional experiences with us.
        </p>
      </div>

      <div className="mt-20 justify-center items-center right-0 flex">
        <ReviewCard key={reviews[activeIndex].customerName} {...reviews[activeIndex]} />
      </div>

      <div className="carousel-buttons">
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <span className="material-symbols-outlined">arrow_back_ios</span>{' '}
        </button>
        <div className="indicators">
          {reviews.map((item, index) => {
            return (
              <button
                className="indicator-buttons"
                key={index}
                onClick={() => {
                  updateIndex(index);
                }}
              >
                <span
                  className={`material-symbols-outlined ${
                    index === activeIndex ? 'indicator-symbol-active' : 'indicator-symbol'
                  }`}
                >
                  radio_button_checked
                </span>
              </button>
            );
          })}
        </div>
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>
      <div className="justify-center flex">
        <button onClick={handlePlayPauseToggle}>
          <span className="material-symbols-outlined ">{autoplay ? 'pause' : 'play_arrow'}</span>
        </button>
      </div>
    </section>
  );
};

export default CustomerReviews;
