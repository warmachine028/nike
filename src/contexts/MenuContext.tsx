import React, { useContext } from 'react';

const MenuContext = React.createContext();
const MenuUpdateContext = React.createContext();
const MenuCloseContext = React.createContext();

export const useMenuContext = () => {
  return useContext(MenuContext);
};

export const useMenuUpdateContext = () => {
  return useContext(MenuUpdateContext);
};

export const useMenuCloseContext = () => {
  return useContext(MenuCloseContext);
};

export function MenuProvider({ children }) {
  const [showMenu, setShowMenu] = React.useState(false);

  const toggleShowMenu = () => setShowMenu((prevState) => !prevState);

  const dontShowMenu = () => setShowMenu(false);

  return (
    <MenuContext.Provider value={showMenu}>
      <MenuUpdateContext.Provider value={toggleShowMenu}>
        <MenuCloseContext.Provider value={dontShowMenu}>{children}</MenuCloseContext.Provider>
      </MenuUpdateContext.Provider>
    </MenuContext.Provider>
  );
}
