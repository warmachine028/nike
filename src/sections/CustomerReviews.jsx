import ReviewCard from '../components/ReviewCard';
import { reviews } from '../constants';
import { useEffect, useState } from 'react';

const CustomerReviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = reviews.length - 1;
    } else if (newIndex >= reviews.length) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    let intervalFunc;
    if (autoplay) {
      intervalFunc = setInterval(() => {
        updateIndex(activeIndex + 1);
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
    <section className="bg-pale-blue padding dark:bg-slate-700 flex justify-center items-center flex-col">
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

      <div className="w-full max-w-5xl mt-12 relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`
          }}
        >
          {reviews.map((review, index) => (
            <div className="min-w-full flex-shrink-0" key={index}>
              <ReviewCard review={review} />
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center mt-8">
          <button
            className="bg-coral-red text-white p-2 rounded-full hover:bg-opacity-80 focus:outline-none"
            onClick={() => updateIndex(activeIndex - 1)}
            aria-label="Previous review"
          >
            <span className="material-symbols-outlined">arrow_back_ios</span>
          </button>

          <div className="flex gap-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => updateIndex(index)}
                className={`w-3 h-3 rounded-full focus:outline-none ${
                  index === activeIndex ? 'bg-coral-red' : 'bg-gray-300'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>

          <button
            className="bg-coral-red text-white p-2 rounded-full hover:bg-opacity-80 focus:outline-none"
            onClick={() => updateIndex(activeIndex + 1)}
            aria-label="Next review"
          >
            <span className="material-symbols-outlined">arrow_forward_ios</span>
          </button>
        </div>
      </div>

      <button
        onClick={handlePlayPauseToggle}
        className="mt-6 bg-coral-red text-white p-3 rounded-full hover:bg-opacity-80 focus:outline-none"
        aria-label={autoplay ? 'Pause carousel' : 'Play carousel'}
      >
        <span className="material-symbols-outlined">{autoplay ? 'pause' : 'play_arrow'}</span>
      </button>
    </section>
  );
};

export default CustomerReviews;
