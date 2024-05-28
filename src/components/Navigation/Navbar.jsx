import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Menu from './Menu';
import Backdrop from '../../Shared/UIElements/Backdrop';
import SideDrawer from '../../Shared/UIElements/SideDrawer';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  const [hideMenu, setHideMenu] = useState(true);
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const toggleDrawer = () => {
    return drawerIsOpen ? setDrawerIsOpen(false) : setDrawerIsOpen(true)
  }
  
  window.onresize = () => {
    if (window.innerWidth < 640) {
      setHideMenu(false);
    }
    else {
      setHideMenu(true);
    }
  }
  



  return (

    <div className="content d-flex justify-between px-16 py-3 sticky top-0 bg-gray-700 z-10" style={{ fontFamily: 'Beloved-Dreams' }} >
      <h1 className='text-2xl font-bold' ><NavLink to="/">DAVID</NavLink></h1>
      
      <div className="hidden md:flex">
        <Menu class="d-flex gap-8  text-2xl font-medium" />
      </div>
      <FontAwesomeIcon icon={faBars} className="text-3xl absolute right-10 md:hidden" onClick={toggleDrawer} />
      {drawerIsOpen && <Backdrop onClick={toggleDrawer} />}
      <SideDrawer show={drawerIsOpen} click={toggleDrawer}>
        <div className="d-flex flex-col gap-4 items-center py-10">
          <Menu class="d-flex flex-col gap-4  text-2xl font-medium" icons={true} />
        </div>
      </SideDrawer>

    </div>
  );
};

export default Navbar;
