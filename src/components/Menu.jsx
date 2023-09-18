import { useMenuContext, useMenuUpdateContext } from "../contexts/MenuContext";
import { navLinks } from "../constants";

const Menu = () => {
  const showMenu = useMenuContext();
  const toggleShowMenu = useMenuUpdateContext();

  return (
    <aside
      className={`z-50 absolute right-0 w-10/12 flex flex-col items-center justify-evenly bg-coral-red dark:bg-white bg- h-screen border opacity-[0.95] ${
        showMenu ? "lg:hidden" : "hidden"
      }`}
    >
      <ul className="mt-0 w-full">
        <li className="flex justify-end text-slate-gray mt-2 mr-3 font-bold text-2xl"></li>
        {navLinks.map((item) => (
          <li key={item.label} className="px-2">
            <a
              href={item.href}
              className="flex justify-between mx-4 my-6 font-montserrat leading-normal text-2xl text-slate-gray hoverUnderline dark:mix-blend-difference"
              onClick={toggleShowMenu}
            >
              <span className="text-white">{item.label}</span>
              <span className="text-white">{" >"}</span>
            </a>
          </li>
        ))}
      </ul>
      <button
        className="border p-4 px-8 text-white hover:opacity-80"
        onClick={toggleShowMenu}
      >
        Close
      </button>
    </aside>
  );
};

export default Menu;
