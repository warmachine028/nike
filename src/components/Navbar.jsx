/** @format */
import { headerLogo, nikeLogo } from '../assets/images';
import { navLinks } from '../constants';
import ThemeSwitch from './ThemeSwitch';
import { useMenuUpdateContext } from '../contexts/MenuContext';
import { MagnifyingGlassIcon, Bars3Icon } from '@heroicons/react/20/solid';

const Navbar = () => {
  const toggleShowMenu = useMenuUpdateContext();
  return (
    <header className="dark:bg-[#1C1C1C] bg-white padding-x py-6 lg:py-8 z-10 w-full shadow-2xl">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} className="hidden lg:block" alt="logo" width="130" height="29" />
          <img src={nikeLogo} className="lg:hidden h-[40px]" alt="logo" />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray dark:text-slate-100 hoverUnderline dark:mix-blend-difference"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-center gap-x-2">
          <div className="flex items-center justify-center sm:bg-transparent sm:p-2 rounded-3xl overflow-hidden sm:border dark:border-gray-500">
            <MagnifyingGlassIcon className="mr-3 h-6 w-6 transition duration-300 cursor-pointer text-slate-gray dark:text-coral-red" />
            <input
              placeholder="Search"
              type="text"
              className="bg-transparent hidden sm:block text-slate-gray outline-0 focus:outline-0 placeholder:font-semibold dark:placeholder-slate-400"
            />
          </div>
          <ThemeSwitch />
          <div className="lg:hidden dark:invert cursor-pointer" onClick={toggleShowMenu}>
            <Bars3Icon height={25} width={25} className="dark:text-coral-red" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
