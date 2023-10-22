/** @format */

import Button from '../components/Button';
import { arrowRight } from '../assets/icons';
import { shoes, statistics } from '../constants';
import { bigShoe1 } from '../assets/images';
import ShoeCard from '../components/ShoeCard';
import { useState, useEffect } from 'react';

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
    <section className="xl:padding-l wide:padding-r padding-b">
      <div id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
        <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
          <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[110px] font-bold">
            <span className=" xl:whitespace-nowrap relative z-10 pr-10 xl:pl-6 dark:xl:bg-slate-gray duration-400 rounded-lg">
              The New Arrival
            </span>
            <br />
            <span className="text-coral-red inline-block mt-6">Nike </span> Shoes
          </h1>
          <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm dark:text-gray-400">
            Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
          </p>
          <Button icon={arrowRight}>Shop now</Button>
          <div className="flex md:justify-start flex-wrap items-start w-full mt-20 gap-16 justify-center">
            {statistics.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-palanquin font-bold">
                  {formatNumber(animatedStatistics[stat.label.toLowerCase()])}+
                </p>
                <p className="leading-7 font-montserrat text-slate-gray dark:text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative flex flex-1 justify-center items-center xl: min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
          <img
            src={bigShoeImg}
            alt="shoe"
            width="610"
            height="500"
            className="object-contain relative z-10 hover:scale-95 duration-300 ease-in-out"
          />
          <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
            {shoes.map((shoe) => (
              <div key={shoe.thumbnail}>
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
