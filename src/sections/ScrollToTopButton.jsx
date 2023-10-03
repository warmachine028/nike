import { useState, useEffect } from 'react';
import chevronUpSvg from '../assets/icons/chevron-up.svg';

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
      className={`fixed right-4 bottom-4 bg-transparent text-blue-500 py-2 px-4 rounded-full  ${
        isVisible ? 'block' : 'hidden'
      }`}
      onClick={scrollToTop}
    >
      <img src={chevronUpSvg} alt="Move to top" style={{ background: 'none' }} />
    </button>
  );
};

export default ScrollToTopButton;
