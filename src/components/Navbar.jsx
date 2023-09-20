/** @format */
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import ThemeSwitch from "./ThemeSwitch";
import { useMenuUpdateContext } from "../contexts/MenuContext";

const Navbar = () => {
  const toggleShowMenu = useMenuUpdateContext();
  return (
    <header className="bg-[#1C1C1C] dark:bg-white padding-x py-6 lg:py-8 absolute z-10 w-full shadow-2xl">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width="130" height="29" />
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
        <ThemeSwitch />
        <div
          className="lg:hidden max-lg:block dark:invert"
          onClick={toggleShowMenu}
        >
          <img src={hamburger} alt="hamburger" height="25" width="25" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
