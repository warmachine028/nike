/** @format */
import { headerLogo } from "../assets/images";
import { mobileLogo } from "../assets/images"
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
    <header className="bg-[#1C1C1C] dark:bg-white padding-x py-1 sm:py-6 lg:py-8 absolute z-10 w-full shadow-2xl">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width="100" height="22" className="hidden sm:block" />
          <img src={mobileLogo} alt="logo" width="40" height="22" className="block sm:hidden" />
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
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
