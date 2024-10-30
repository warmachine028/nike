import { headerLogo, nikeLogo } from '../assets/images';
import { navLinks } from '../constants';
import ThemeSwitch from './ThemeSwitch';
import { useMenuUpdateContext } from '../contexts/MenuContext';
import { MagnifyingGlassIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';
import useScroll from '../../helpers/useScroll';
import { useState } from 'react';
import './Navbar.scss';

const SearchOverlay = ({ isOpen, onClose }) => {
  const popularSearches = ['Air Force 1', 'Jordan', 'Air Max', 'Blazer'];

  if (!isOpen) return null;

  return (
    <div id="🔥SearchOverlay">
      <div id="🔥SearchOverlay__X">
        {/* Search Bar */}
        <div id="🔥SearchOverlay__X__X">
          <div id="🔥SearchOverlay__X__X__X">
            <MagnifyingGlassIcon />
            <input id="🔥SearchOverlay__X__X__X__Input" autoFocus type="text" placeholder="Search" />
          </div>
          <button id="🔥SearchOverlay__X__X__Btn" onClick={onClose}>
            Cancel
          </button>
        </div>

        {/* Popular Search Terms */}
        <div id="🔥SearchOverlay__X__X2">
          <h3 id="🔥SearchOverlay__X__X2__H3">Popular Search Terms</h3>
          <ul id="🔥SearchOverlay__X__X2__Ul">
            {popularSearches.map((term) => (
              <li id="🔥SearchOverlay__X__X2__Ul__Li" key={term}>
                <a
                  id="🔥SearchOverlay__X__X2__Ul__Li__A"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    console.log(`Searched for: ${term}`);
                  }}
                >
                  {term}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Navbar = ({ handleClick, handleClick2 }) => {
  const toggleShowMenu = useMenuUpdateContext();
  const [isScrollingUp, isScrollingDown] = useScroll();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div id="🔥Navbar">
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      <header
        id="🔥Navbar__X"
        className={` ${isScrollingDown ? '--isScrollingDownTrue' : ''}${isScrollingUp ? '--isScrollingUpTrue' : ''}`}
      >
        <nav id="🔥Navbar__X__X">
          <a id="🔥Navbar__X__X__A" href="/">
            <img id="🔥Navbar__X__X__A__Img" src={headerLogo} alt="logo" width="200" height="29" />
            <img id="🔥Navbar__X__X__A__Img2" src={nikeLogo} alt="logo" />
          </a>
          <ul id="🔥Navbar__X__X__Ul">
            {navLinks.map((item) => (
              <li id="🔥Navbar__X__X__Ul__Li" key={item.label}>
                <button id="🔥Navbar__X__X__Ul__Li__Btn" onClick={handleClick2}>
                  <a id="🔥Navbar__X__X__Ul__Li__Btn__A" href={item.href}>
                    {item.label}
                  </a>
                </button>
              </li>
            ))}
          </ul>
          <div id="🔥Navbar__X__X__X">
            {/* Search Button */}
            <div id="🔥Navbar__X__X__X__X" onClick={() => setIsSearchOpen(true)}>
              <MagnifyingGlassIcon />
              <span id="🔥Navbar__X__X__X__X__Span">Search</span>
            </div>
            <ThemeSwitch handleClick={handleClick} />
            <div id="🔥Navbar__X__X__X__X2" onClick={toggleShowMenu}>
              <Bars3Icon height={25} width={25} />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
