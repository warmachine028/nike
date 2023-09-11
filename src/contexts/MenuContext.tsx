import React, { useContext } from 'react'

const MenuContext = React.createContext()
const MenuUpdateContext = React.createContext()

export const useMenuContext = () => {
  return useContext(MenuContext)
}

export const useMenuUpdateContext = () => {
  return useContext(MenuUpdateContext)
}

export function MenuProvider({ children }) {
  const [showMenu, setShowMenu] = React.useState(false)

  const toggleShowMenu = () => setShowMenu((prevState) => !prevState)
  return (
    <MenuContext.Provider value={showMenu}>
      <MenuUpdateContext.Provider value={toggleShowMenu}>{children}</MenuUpdateContext.Provider>
    </MenuContext.Provider>
  )
}
