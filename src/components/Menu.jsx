import { useMenuContext, useMenuUpdateContext } from "../contexts/MenuContext";
import { navLinks } from "../constants";

const Menu = () => {
  const showMenu = useMenuContext();
  const toggleShowMenu = useMenuUpdateContext();

  return (
    <aside
      className={`z-50 absolute ${
        showMenu ? "right-0" : "right-[-100%]"
      } w-10/12 flex flex-col items-center justify-evenly bg-transparent dark:bg-transparent bg- h-screen opacity-[0.95] transition-all duration-500 ease-in-out backdrop-blur-2xl`}
    >
      <ul className="mt-0 w-full">
        <li className="flex justify-end text-slate-gray mt-2 mr-3 font-bold text-2xl"></li>
        {navLinks.map((item) => (
          <li key={item.label} className="px-2">
            <a
              href={item.href}
              className="flex justify-between mx-4 my-6 font-montserrat leading-normal text-2xl text-black hoverUnderline dark:mix-blend-difference"
              onClick={toggleShowMenu}
            >
              <span className="text-black dark:text-white ">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
      <button
        className="border rounded p-4 px-8 text-black border-black dark:text-white dark:border-white hover:opacity-80"
        onClick={toggleShowMenu}
      >
        Close
      </button>
    </aside>
  );
};

export default Menu;
