import { useMenuContext, useMenuUpdateContext } from '../contexts/MenuContext';
import { navLinks } from '../constants';
import { Link } from 'react-router-dom';

const Menu = () => {
  const showMenu = useMenuContext();
  const toggleShowMenu = useMenuUpdateContext();

  return (
    <aside
      onClick={toggleShowMenu}
      className={`z-50 fixed cursor-pointer ${
        showMenu ? 'right-0' : 'right-[-100%]'
      } w-full flex flex-col items-center justify-evenly bg-transparent dark:bg-transparent h-screen transition-all duration-500 ease-in-out backdrop-blur-md`}
    >
      <div
        className="aside__content bg-white dark:bg-black w-10/12 ml-auto h-screen flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* close btn svg */}
        <svg
          onClick={toggleShowMenu}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 ml-auto my-4 mr-4"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>

        <ul className="mt-0 w-full">
          <li className="flex justify-end text-slate-gray mt-2 mr-3 font-bold text-xl"></li>
          {navLinks.map((item) => (
            <li key={item.label} className="px-2 font-semibold">
              <a
                href={item.href}
                className="flex items-center justify-between mx-4 my-6 font-montserrat leading-normal text-xl text-black hoverUnderline dark:mix-blend-difference"
                onClick={toggleShowMenu}
              >
                <span className="text-black dark:text-white ">{item.label}</span>
                {/* arrow svg */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 stroke-black dark:stroke-white "
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </a>
            </li>
          ))}
        </ul>
        <div className="jordanIcon flex items-center gap-5 py-4">
          <svg className="fill-black dark:fill-white ml-6" height="35px" width="35px" viewBox="0 0 26 32">
            <path d="M14.4 5.52v-.08q0-.56.36-1t.92-.44 1 .36.48.96-.36 1-.96.4l-.24.08.08.12-.08.44-.16 1.28q.08.08.08.16l-.16.8q-.08.16-.16.24l-.08.32q-.16.64-.28 1.04t-.2.64V12q-.08.4-.12.64t-.28.8q-.16.32 0 1.04l.08.08q0 .24.2.56t.2.56q.08 1.6-.24 2.72l.16.48q.96.48.56 1.04l.4.16q.96.48 1.36.84t.8.76q.32.08.48.24l.24.08q1.68 1.12 3.36 2.72l.32.24v.08l-.08.16.24.16h.08q.24.16.32.16h.08q.08 0 .16-.08l.16-.08q.16-.16.32-.24h.32q.08 0 0 .08l-.32.16-.4.48h.56l.56.08q.24-.08.4-.16l.4-.24q.24-.08.48.16h.08q.08.08-.08.24l-.96.88q-.4.32-.72.4l-1.04.72q-.08.08-.16 0l-.24-.32-.16-.32-.2-.28-.24-.32-.2-.24-.16-.2-.32-.24q-.16 0-.32-.08l-1.04-.8q-.24 0-.56-.24-1.2-1.04-1.6-1.28l-.48-.32-.96-.16q-.48-.08-1.28-.48l-.64-.32q-.64-.32-.88-.32l-.32-.16q-.32-.08-.48-.16l-.16-.16q-.16 0-.32.08l-1.6.8-2 .88q-.8.64-1.52 1.04l-.88.4-1.36.96q-.16.16-.32 0l-.16.16q-.24.08-.32.08l-.32.16v.16h-.16l-.16.24q-.16.32-.32.36t-.2.12-.08.12l-.16.16-.24.16-.36-.04-.48.08-.32.08q-.4.08-.64-.12t-.4-.6q-.16-.24.16-.4l.08-.08q.08-.08.24-.08h.48L1.6 26l.32-.08q0-.16.08-.24.08-.08.24-.08v-.08q-.08-.16-.08-.32-.08-.16-.04-.24t.08-.08h.04l.08.24q.08.4.24.24l.08-.16q.08-.16.24-.16l.16.16.16-.16-.08-.08q0-.08.08-.08l.32-.32q.4-.48.96-.88 1.12-.88 2.4-1.36.4-.4.88-.4.32-.56.96-1.2.56-.4.8-.56.16-.32.4-.32H10l.16-.16q.16-.08.24-.16v-.4q0-.4.08-.64t.4-.24l.32-.32q-.16-.32-.16-.72h-.08q-.16-.24-.16-.48-.24-.4-.32-.64h-.24q-.08.24-.4.32l-.08.16q-.32.56-.56.84t-.88.68q-.4.4-.56.88-.08.24 0 .48l-.08.16h.08q0 .16.08.16h.08q.16.08.16.2t-.24.08-.36-.16-.2-.12l-.24.24q-.16.24-.32.2t-.08-.12l.08-.08q.08-.16 0-.16l-.64.16q-.08.08-.2 0t.04-.16l.4-.16q0-.08-.08-.08-.32.16-.64.08l-.4-.08-.08-.08q0-.08.08-.08.32.08.8-.08l.56-.24.64-.72.08-.16q.32-.64.68-1.16t.76-.84l.08-.32q.16-.32.32-.56t.4-.64l.24-.32q.32-.48.72-.48l.24-.24q.08-.08.08-.24l.16-.16-.08-.08q-.48-.4-.48-.72-.08-.56.36-.96t.88-.36.68.28l.16.16q.08 0 .08.08l.32.16v.24q.16.16.16.24.16-.24.48-.56l.4-1.28q0-.32.16-.64l.16-.24v-.16l.24-.96h.16l.24-.96q.08-.24 0-.56l-.32-.8z"></path>
          </svg>
          <span className="text-lg font-semibold">Jordan</span>
        </div>
        <div className="div my-auto px-5">
          <p className="text-gray-500 font-semibold mb-4">
            Become a Nike Member for best products, inspiration and stories in sport.{' '}
            <span className="text-black dark:text-white font-bold">Learn more</span>
          </p>
          <div className="actions flex gap-3">
            <Link
              to="/register"
              className="bg-black text-white dark:bg-white dark:text-black font-semibold px-4 py-1 rounded-full"
            >
              Join Us
            </Link>
            <Link
              to="/login"
              className="dark:bg-black dark:text-white font-semibold px-4 py-1 rounded-full border border-gray-300"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Menu;
