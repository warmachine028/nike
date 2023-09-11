import React from 'react'
import { useMenuContext, useMenuUpdateContext, useMenuCloseContext } from '../contexts/MenuContext'
import { navLinks } from '../constants'

const Menu = () => {
  const showMenu = useMenuContext()
  const toggleShowMenu = useMenuUpdateContext()
  // const dontShowMenu = useMenuCloseContext()
  // const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

  // const updateWidth = () => {
  //   setWindowWidth(window.innerWidth)
  // }

  // React.useEffect(() => {
  //   window.addEventListener('resize', updateWidth)
  //   return () => {
  //     window.removeEventListener('resize', updateWidth)
  //   }
  // }, [windowWidth])

  // React.useEffect(() => {
  //   if (windowWidth > 1024) {
  //     dontShowMenu
  //   }
  // }, [windowWidth])

  return (
    <>
      {showMenu ? 'True' : 'False'}
      <div className={'z-50 absolute right-0 w-10/12 bg-coral-red h-screen ' + (showMenu ? 'lg:hidden' : 'hidden')}>
        <ul>
          <li className="flex justify-end text-slate-gray mt-2 mr-3 font-bold text-2xl">
            <span onClick={toggleShowMenu}>X</span>
          </li>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="flex justify-between mx-4 my-6 font-montserrat leading-normal text-2xl text-slate-gray hoverUnderline dark:mix-blend-difference"
                onClick={toggleShowMenu}
              >
                <span>{item.label}</span>
                <span>{' >'}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Menu
