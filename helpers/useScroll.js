import { useEffect, useState } from 'react';

const scrollOffset = 100; // threshold to pass

const useScroll = () => {
  const [scrolled, setScrolled] = useState(false); // stores if scrolled value passes scrolled offset

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scrollOffset) {
        // if scrolled value passes scrolled offset
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
  return scrolled;
};

export default useScroll;
