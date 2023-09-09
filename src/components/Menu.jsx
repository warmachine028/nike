import React from 'react'
import { useMenuContext } from '../contexts/MenuContext'

const Menu = () => {
  const showMenu = useMenuContext()

  return <div className={'z-50 fixed top-0 right-0 ' + (showMenu ? 'lg:hidden' : 'hidden')}>Menu</div>
}

export default Menu
