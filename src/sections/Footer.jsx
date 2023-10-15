/** @format */

import { copyrightSign } from '../assets/icons';
import { footerLogo } from '../assets/images';
import { footerLinks, socialMedia } from '../constants';

const Footer = () => {
  return (
    <footer className="padding-x padding-t pb-8 bg-black">
      <div className="max-container">
        <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
          <div className="flex flex-col items-start">
            <a href="/">
              <img src={footerLogo} alt="footer-logo" width={150} height={46} />
            </a>
            <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
              Get shoes ready for the new term at your nearest Nike store. Find your perfect Size in store. Get{' '}
              <span className="underline cursor-pointer hoverUnderline hover:no-underline">rewards</span>
            </p>
            <div className="flex items-center gap-5 mt-8">
              {socialMedia.map((icon) => (
                <a
                  key={icon.alt}
                  href={icon?.link}
                  target="_blank"
                  className="flex w-12 h-12 justify-center items-center bg-white rounded-full hover:scale-110 hover:border-black hover:border-[1px] hover:invert duration-300 ease-in-out cursor-pointer"
                  rel="noreferrer"
                >
                  <img src={icon.src} alt={icon.alt} width={24} height={24} />
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap relative">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="text-white font-montserrat text-2xl leading-normal font-bold mb-6">{section.title}</h4>
                <ul className="relative">
                  {section.links.map((link) => (
                    <li key={link.name} className="mt-3 text-white-400 font-montserrat text-base leading-normal">
                      <a className="hoverUnderline" href={link.link}>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
          <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
            <img src={copyrightSign} alt="copyright" width={20} height={20} className="rounded-full m-0" />
            <p>Copyright. All rights reserved.</p>
          </div>
          <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
