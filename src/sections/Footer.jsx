/** @format */

import { copyrightSign } from '../assets/icons';
import { footerLogo } from '../assets/images';
import { footerLinks, socialMedia } from '../constants';
import './Footer.scss';

const Footer = () => {
  return (
    <footer id="🔥Footer">
      <div id="🔥Footer__X">
        <div id="🔥Footer__X__X">
          <div id="🔥Footer__X__X__X">
            <a id="🔥Footer__X__X__X__A" href="/">
              <img id="🔥Footer__X__X__X__A__Img" src={footerLogo} alt="footer-logo" width={150} height={46} />
            </a>
            <p id="🔥Footer__X__X__X__P">
              Get shoes ready for the new term at your nearest Nike store. Find your perfect Size in store. Get{' '}
              <span id="🔥Footer__X__X__X__P__Span">rewards</span>
            </p>
            <div id="🔥Footer__X__X__X__X">
              {socialMedia.map((icon) => (
                <a id="🔥Footer__X__X__X__X__A" key={icon.alt} href={icon?.link} target="_blank" rel="noreferrer">
                  <img id="🔥Footer__X__X__X__X__A__Img" src={icon.src} alt={icon.alt} width={24} height={24} />
                </a>
              ))}
            </div>
          </div>
          <div id="🔥Footer__X__X__X2">
            {footerLinks.map((section) => (
              <div id="🔥Footer__X__X__X2__X" key={section.title}>
                <h4 id="🔥Footer__X__X__X2__X__H4">{section.title}</h4>
                <ul id="🔥Footer__X__X__X2__X__Ul">
                  {section.links.map((link) => (
                    <li id="🔥Footer__X__X__X2__X__Ul__Li" key={link.name}>
                      <a id="🔥Footer__X__X__X2__X__Ul__Li__A" href={link.link}>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div id="🔥Footer__X__X2">
          <div id="🔥Footer__X__X2__X">
            <img id="🔥Footer__X__X2__X__Img" src={copyrightSign} alt="copyright" width={20} height={20} />
            <p id="🔥Footer__X__X2__X__Copyright">Copyright. All rights reserved.</p>
          </div>
          <p id="🔥Footer__X__X2__P">Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
