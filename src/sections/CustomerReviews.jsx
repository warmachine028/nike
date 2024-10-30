/** @format */

import ReviewCard from '../components/ReviewCard';
import { reviews } from '../constants';
import { useEffect, useState } from 'react';
import './CustomerReviews.scss';

const CustomerReviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = reviews.length - 1;
    } else if (newIndex >= reviews.length) {
      newIndex = newIndex % reviews.length;
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
    <section id="🔥CustomerReviews">
      <div id="🔥CustomerReviews__X">
        <h3 id="🔥CustomerReviews__X__H3">
          What Our
          <span id="🔥CustomerReviews__X__H3__Span"> Customers </span>
          Say?
        </h3>
        <p id="🔥CustomerReviews__X__P">
          Hear Genuine stories from our satisfied customers about their exceptional experiences with us.
        </p>
      </div>

      <div id="🔥CustomerReviews__X2">
        <div
          id="🔥CustomerReviews__X2__X"
          style={{
            transform: `translate(-${activeIndex * 100}%)`
          }}
        >
          {reviews.map((review, index) => {
            return <ReviewCard review={review} key={index} />;
          })}
        </div>

        <div id="🔥CustomerReviews__X2__X2">
          <button
            id="🔥CustomerReviews__X2__X2__Btn"
            onClick={() => {
              updateIndex(activeIndex - 1);
            }}
          >
            <span id="🔥CustomerReviews__X2__X2__Btn__Span" className="material-symbols-outlined">
              arrow_back_ios
            </span>{' '}
          </button>

          <div id="🔥CustomerReviews__X2__X2__X">
            {reviews.map((item, index) => {
              return (
                <button
                  id="🔥CustomerReviews__X2__X2__X__Btn"
                  key={index}
                  onClick={() => {
                    updateIndex(index);
                  }}
                >
                  <span
                    id="🔥CustomerReviews__X2__X2__Btn__Span"
                    className={`material-symbols-outlined ${index === activeIndex ? 'indicator-symbol-active' : 'indicator-symbol'}`}
                  >
                    radio_button_checked
                  </span>
                </button>
              );
            })}
          </div>

          <button
            id="🔥CustomerReviews__X2__X2__Btn"
            onClick={() => {
              updateIndex(activeIndex + 1);
            }}
          >
            <span id="🔥CustomerReviews__X2__X2__Btn__Span" className="material-symbols-outlined">
              arrow_forward_ios
            </span>
          </button>
        </div>
      </div>

      <div id="🔥CustomerReviews__X3">
        <button id="🔥CustomerReviews__X3__Btn" onClick={handlePlayPauseToggle}>
          <span id="🔥CustomerReviews__X2__X2__Btn__Span" className="material-symbols-outlined">
            {autoplay ? 'pause' : 'play_arrow'}
          </span>
        </button>
      </div>
    </section>
  );
};

export default CustomerReviews;
