import React from 'react';
import {useMatch, Link, useResolvedPath} from 'react-router-dom';

import './navbarlink.scss';

const NavbarLink = ({to, children}) => {
  const resolvedPath = useResolvedPath(to);
  const isMatch = useMatch({path: resolvedPath.pathname, end: true});

  return (
    <Link
      to={to}
      className={` ${isMatch && 'bg-blue rounded text-white'}  no-underline`}
      type="button"
    >
      <div className="flex items-center gap-2 mb-0 p-2">{children}</div>
    </Link>
  );
};

export default NavbarLink;
