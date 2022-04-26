import React from 'react';

import {BurgerMenu, ThemeToggle, Search} from '../../components';

const TopBar = ({className}) => {
  return (
    <div className="row-[1/1] col-[1/-1] grid grid-cols-[82px_repeat(5,1fr)] xl:grid-cols-[220px_repeat(5,1fr)] items-center border h-[70px]">
      <div className="hidden xl:flex xl:justify-center xl:items-center">
        Lobel Investing
      </div>
      <div className="m-auto flex flex-col min-h-[70px] items-center xl:hidden">
        <BurgerMenu />
      </div>
      <div className="flex justify-center">
        <Search />
      </div>
      <div className="col-start-5">
        <p>Languages</p>
      </div>
      <div className="col-start-6">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default TopBar;
