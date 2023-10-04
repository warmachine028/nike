/* eslint-disable no-unused-vars */
import React from 'react';

export default function SmoothScroll({ target, children, className }) {
  const smoothScroll = () => {
    const targetElement = document.querySelector(target);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <a
      href={target}
      onClick={(e) => {
        e.preventDefault();
        smoothScroll();
      }}
      className={className}
    >
      {children}
    </a>
  );
}
