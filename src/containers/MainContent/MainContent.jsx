import React from 'react';

import './main-content.scss';

const MainContent = ({children, className}) => {
  return (
    <div className={`${className} row-[2] border`}>
      <h6>MainContent (Stock data, charts)</h6>
      {children}
    </div>
  );
};

export default MainContent;
