/** @format */

import Button from '../components/Button';
import { arrowRight } from '../assets/icons';
import { shoes, statistics } from '../constants';
import { bigShoe1 } from '../assets/images';
import ShoeCard from '../components/ShoeCard';
import { useState, useEffect } from 'react';
import './Hero.scss';

const formatNumber = (number) => {
  if (number < 1000) {
    return number;
  } else {
    return Math.floor(number / 1000) + 'k';
  }
};

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  const [animatedStatistics, setAnimatedStatistics] = useState({
    brands: 0,
    shops: 0,
    customers: 0
  });
  useEffect(() => {
    const animationDuration = 2500;
    const targetStatistics = {
      brands: 1000,
      shops: 500,
      customers: 250000
    };

    const stepDuration = animationDuration / 100;

    const updateStatistics = (currentStep) => {
      if (currentStep >= 100) {
        setAnimatedStatistics(targetStatistics);
      } else {
        setTimeout(() => {
          const percentage = (currentStep + 1) / 100;
          setAnimatedStatistics({
            brands: Math.floor(percentage * targetStatistics.brands),
            shops: Math.floor(percentage * targetStatistics.shops),
            customers: Math.floor(percentage * targetStatistics.customers)
          });
          updateStatistics(currentStep + 1);
        }, stepDuration);
      }
    };

    updateStatistics(0);
  }, []);

  return (
    <section id="🔥Hero">
      <div id="🔥Hero__X">
        <div id="🔥Hero__X__X">
          <h1 id="🔥Hero__X__X__H1">
            <span id="🔥Hero__X__X__H1__Span">The New Arrival</span>
            <br />
            <span id="🔥Hero__X__X__H1__Span2">Nike </span> Shoes
          </h1>
          <p id="🔥Hero__X__X__P">
            Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
          </p>
          <Button icon={arrowRight}>Shop now</Button>
          <div id="🔥Hero__X__X__X">
            {statistics.map((stat) => (
              <div id="🔥Hero__X__X__X__X" key={stat.label}>
                <p id="🔥Hero__X__X__X__X__P">{formatNumber(animatedStatistics[stat.label.toLowerCase()])}+</p>
                <p id="🔥Hero__X__X__X__X__P2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div id="🔥Hero__X__X2">
          <img id="🔥Hero__X__X2__Img" src={bigShoeImg} alt="shoe" width="610" height="500" />
          <div id="🔥Hero__X__X2__X">
            {shoes.map((shoe) => (
              <div id="🔥Hero__X__X2__X__X" key={shoe.thumbnail}>
                <ShoeCard img={shoe} change={(shoe) => setBigShoeImg(shoe)} largeImg={bigShoeImg} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
