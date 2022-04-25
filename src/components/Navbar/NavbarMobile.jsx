import React from 'react';
import {IconContext} from 'react-icons';

import {
  IoHomeOutline,
  IoNewspaperOutline,
  IoListOutline,
  IoCalculatorOutline,
  IoChatbubblesOutline,
  IoSettingsOutline,
  IoLogOutOutline,
} from 'react-icons/io5';

import NavbarLink from './NavbarLink/NavbarLink';

import './navbar.scss';

const NavbarMobile = ({className}) => {
  return (
    <nav className={`flex-col justify-between h-full ${className}  text-4xl`}>
      <div className="flex flex-col gap-4 mb-4">
        <NavbarLink to="/">
          <IoHomeOutline />
        </NavbarLink>
        <NavbarLink to="news">
          <IoNewspaperOutline />
        </NavbarLink>
        <NavbarLink to="watchlist">
          <IoListOutline />
        </NavbarLink>
        <NavbarLink to="calculator">
          <IoCalculatorOutline />
        </NavbarLink>
        <NavbarLink to="chat">
          <IoChatbubblesOutline />
        </NavbarLink>
      </div>
      <div className="flex flex-col gap-4 bottom-0">
        <NavbarLink to="settings">
          <IconContext.Provider value={{className: 'icon__mt-2'}}>
            <IoSettingsOutline />
          </IconContext.Provider>
        </NavbarLink>
        <NavbarLink to="logout">
          <IconContext.Provider value={{className: 'icon__mt-2'}}>
            <IoLogOutOutline />
          </IconContext.Provider>
        </NavbarLink>
      </div>
    </nav>
  );
};

export default NavbarMobile;
