import React, {useContext} from 'react';
import {ThemeContext} from '../../context/theme-context';

const ThemeToggle = () => {
  const {theme, setTheme} = useContext(ThemeContext);

  const handleThemeOnClick = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    console.log('theme clicked');
  };

  return (
    <div className="touch-pan-x  cursor-pointer select-none ">
      <div
        className="bg-bgGray rounded-[30px] h-6 w-12 transition-all duration-200 ease-out relative group"
        role="button"
        tabIndex="-1"
        onClick={handleThemeOnClick}
      >
        <div className="top-0 h-[10px] width-[14px] transition-opacity duration-300 translate-y-1/2 left-[12px] dark:opacity-full">
          <span className="items-center left-[6px] top-[2px]  flex h-[10px] justify-center w-[10px] rotate-180 absolute">
            🌛
          </span>
        </div>
        <div className="right-[10px] top-0 bottom-0 absolute my-auto mx-auto w-[10px] h-[10px] transition-opacity duration-300 dark:opacity-0">
          <span className="items-center flex h-[10px] justify-center w-[10px]">
            🌞
          </span>
        </div>
        <div className="bg-white left-0 shadow-none border border-bgGray rounded-full top-[1px] absolute transition-all duration-300 w-[22px] h-[22px] dark:left-[27px] group-hover:shadow-[0_0_3px_2px_blue]"></div>
      </div>
    </div>
  );
};

export default ThemeToggle;
