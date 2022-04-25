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

const NavbarDesktop = ({className}) => {
  return (
    <nav className={`flex flex-col justify-between h-full ${className}`}>
      <div className="flex flex-col gap-4 mb-4">
        <NavbarLink to="/">
          <IoHomeOutline size={'20px'} /> Home
        </NavbarLink>
        <NavbarLink to="news">
          <IoNewspaperOutline size={'20px'} /> News
        </NavbarLink>
        <NavbarLink to="watchlist">
          <IoListOutline size={'20px'} /> Watchlist
        </NavbarLink>
        <NavbarLink to="calculator">
          <IoCalculatorOutline size={'20px'} /> Calculator
        </NavbarLink>
        <NavbarLink to="chat">
          <IoChatbubblesOutline size={'20px'} /> Chat
        </NavbarLink>
      </div>
      <div className="flex flex-col gap-4 bottom-0">
        <NavbarLink to="settings">
          <IconContext.Provider value={{className: 'icon__mt-2'}}>
            <IoSettingsOutline size={'20px'} />
            <h6>Settings</h6>
          </IconContext.Provider>
        </NavbarLink>
        <NavbarLink to="logout">
          <IconContext.Provider value={{className: 'icon__mt-2'}}>
            <IoLogOutOutline size={'20px'} />
            <h6> Log out</h6>
          </IconContext.Provider>
        </NavbarLink>
      </div>
    </nav>
  );
};

export default NavbarDesktop;
