import { useState, useEffect } from 'react';

const useScroll = () => {
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useEffect(() => {
    let prevScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < prevScrollY) {
        setIsScrollingUp(true);
        setIsScrollingDown(false);
      } else if (currentScrollY > prevScrollY) {
        setIsScrollingUp(false);
        setIsScrollingDown(true);
      }

      prevScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return [isScrollingUp, isScrollingDown];
};

export default useScroll;
