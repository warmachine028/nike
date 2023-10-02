/** @format */
import { headerLogo } from "../assets/images";
import { nikeLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import ThemeSwitch from "./ThemeSwitch";
import { useMenuUpdateContext } from "../contexts/MenuContext";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const toggleShowMenu = useMenuUpdateContext();
  return (
    <header className="bg-[#1C1C1C] dark:bg-white padding-x py-6 lg:py-8 absolute z-10 w-full shadow-2xl">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} className="hidden lg:block" alt="logo" width="130" height="29" />
          <img src={nikeLogo}  className="lg:hidden h-[40px]" alt="logo"/>
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray hoverUnderline dark:mix-blend-difference"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-center gap-x-2">
          <div className="flex items-center justify-center sm:bg-white-400 sm:p-2 rounded-3xl overflow-hidden sm:border border-slate-gray">
            <MagnifyingGlassIcon
              className={`mr-3 h-6 w-6 transition duration-300 cursor-pointer ${
                currentTheme === "dark" ? "text-coral-red" : "text-slate-gray"
              }`}
            />
            <input placeholder="Search" type="text" className='bg-transparent hidden sm:block text-slate-gray outline-0 focus:outline-0 placeholder:font-semibold' />
          </div>
          <ThemeSwitch />
          <div
            className="lg:hidden max-lg:block dark:invert"
            onClick={toggleShowMenu}
          >
            <img src={hamburger} alt="hamburger" height="25" width="25" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
