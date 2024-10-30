import { useState, useEffect } from 'react';
import chevronUpSvg from '../assets/icons/chevron-up.svg';
import './ScrollToTopButton.scss';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const sectionHeight = window.innerHeight;
      const scrollThreshold = sectionHeight * 2;

      setIsVisible(scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      id="🔥ScrollToTopButton"
      className={` ${isVisible ? '--isVisibleTrue' : '--isVisibleFalse'}`}
      onClick={scrollToTop}
    >
      <img id="🔥ScrollToTopButton__Img" src={chevronUpSvg} alt="Move to top" />
    </button>
  );
};

export default ScrollToTopButton;
