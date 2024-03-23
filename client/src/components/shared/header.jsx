import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const handleNavigation = (route) => {
    navigate(route);
  };
  return (
    <div className="w-full fixed right-0 md:flex justify-end items-center hidden">
      <div className="flex h-[70px] justify-end items-center w-fit border-b border-l border-sidebarBorder rounded-bl-full px-8 bg-sidebarBg text-sidebarHeading">
        <div
          onClick={() => handleNavigation('/')}
          className="px-4 mx-4 py-0 font-bold cursor-pointer text-lg hover:text-headerTextHover"
        >
          Home
        </div>
        <div
          onClick={() => handleNavigation('/about')}
          className="px-4 mx-4 py-0 font-bold cursor-pointer text-lg hover:text-headerTextHover"
        >
          About
        </div>
        <div
          onClick={() => handleNavigation('/portfolio')}
          className="px-4 mx-4 py-0 font-bold cursor-pointer text-lg hover:text-headerTextHover"
        >
          Portfolio
        </div>
        <div
          onClick={() => handleNavigation('/blogs')}
          className="px-4 mx-4 py-0 font-bold cursor-pointer text-lg hover:text-headerTextHover"
        >
          Blogs
        </div>
        <div
          onClick={() => handleNavigation('/contact')}
          className="px-4 mx-4 py-0 font-bold cursor-pointer text-lg hover:text-headerTextHover"
        >
          Contact
        </div>
      </div>
    </div>
  );
};

export default Header;
