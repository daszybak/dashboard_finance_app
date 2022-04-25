import React from 'react';
import {useSelector} from 'react-redux';
import {SideBar, TopBar, MainContent} from '../../containers';

const Layout = ({children}) => {
  const sidebarStatus = useSelector((state) => state.sidebar.sidebarStatus);
  return (
    <div className="grid  grid-cols-[82px_repeat(15,1fr)] xl:grid-cols-[220px_repeat(15,1fr)] grid-rows-[70px_1fr] h-screen auto-rows-auto text-black dark:text-white bg-white dark:bg-bgBlack">
      <SideBar className={sidebarStatus ? '' : 'hidden'} />
      <TopBar />
      <MainContent className={sidebarStatus ? 'col-[2/-1]' : 'col-span-full'}>
        {children}
      </MainContent>
    </div>
  );
};

export default Layout;
