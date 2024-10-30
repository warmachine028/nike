import { shoe8 } from '../assets/images';
import Button from '../components/Button';
import './SuperQuality.scss';
const SuperQuality = () => {
  return (
    <section id="🔥SuperQuality">
      <div id="🔥SuperQuality__X">
        <div id="🔥SuperQuality__X__X">
          <h2 id="🔥SuperQuality__X__X__H2">
            We Provide You{' '}
            <span id="🔥SuperQuality__X__X__H2__Span">
              Super <br /> Quality{' '}
            </span>
            Shoes
          </h2>
          <p id="🔥SuperQuality__X__X__P">
            Ensuring premium comfort and style, out meticulously crafted footwear is designed to elevate your
            experience, providing you with unmatched quality, innovation, and a touch of elegance.
          </p>
          <p id="🔥SuperQuality__X__X__P2">Our dedication to detail and excellence ensures your satisfaction</p>
          <div id="🔥SuperQuality__X__X__X">
            <Button>View Details</Button>
          </div>
        </div>
        <div id="🔥SuperQuality__X__X2">
          <img id="🔥SuperQuality__X__X2__Img" src={shoe8} alt="shoe" width={570} height={522} />
        </div>
      </div>
    </section>
  );
};

export default SuperQuality;
