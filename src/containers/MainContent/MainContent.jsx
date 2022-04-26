import React from 'react';

import './main-content.scss';

const MainContent = ({children, className}) => {
  return <div className={`${className} row-[2] border`}>{children}</div>;
};

export default MainContent;
