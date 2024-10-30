/** @format */

import { offer } from '../assets/images';
import Button from '../components/Button';
import { arrowRight } from '../assets/icons';
import './SpecialOffers.scss';
const SpecialOffers = () => {
  return (
    <section id="🔥SpecialOffers">
      <div id="🔥SpecialOffers__X">
        <div id="🔥SpecialOffers__X__X">
          <img id="🔥SpecialOffers__X__X__Img" src={offer} alt="offer" width={773} height={687} />
        </div>
        <div id="🔥SpecialOffers__X__X2">
          <h2 id="🔥SpecialOffers__X__X2__H2">
            <span id="🔥SpecialOffers__X__X2__H2__Span">Special </span>
            Offer
          </h2>
          <p id="🔥SpecialOffers__X__X2__P">
            Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections
            to incredible savings, we offer unparalleled value that sets us apart.
          </p>
          <p id="🔥SpecialOffers__X__X2__P2">
            Navigate a realm of possiblilities designed to fulfil your unique desires, surpassing the softest
            expectations. Your journey with us is nothing short of exceptional.
          </p>
          <div id="🔥SpecialOffers__X__X2__X">
            <Button icon={arrowRight}>Shop Now</Button>
            <Button
              backgroundColor="bg-white dark:bg-transparent"
              borderColor="border-slate-gray"
              textColor="text-slate-gray dark:text-slate-200 dark:hover:text-slate-800"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
