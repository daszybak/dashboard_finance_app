import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {toggle} from '../../containers/SideBar/sidebar-slice';

const BurgerMenu = () => {
  const dispatch = useDispatch();
  const sidebarStatus = useSelector((state) => state.sidebar.sidebarStatus);
  console.log(sidebarStatus);
  const handleMenuOnClick = () => {
    dispatch(toggle());
    console.log(sidebarStatus);
  };

  return (
    <button
      id="nav-icon"
      className={`w-9 relative mx-auto rotate-0 duration-500 ease-in-out cursor-pointer`}
      onClick={handleMenuOnClick}
    >
      <span
        className={`span-burger top-[23px] ${
          sidebarStatus ? 'top-[18px] w-0 left-1/2' : ''
        }`}
      ></span>
      <span
        className={`span-burger top-[35px] ${sidebarStatus ? 'rotate-45' : ''}`}
      ></span>
      <span
        className={`span-burger top-[35px] ${
          sidebarStatus ? '-rotate-45' : ''
        }`}
      ></span>
      <span
        className={`span-burger top-[47px] ${
          sidebarStatus ? 'top-[18px] w-0 left-1/2' : ''
        }`}
      ></span>
    </button>
  );
};

export default BurgerMenu;
