import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SideDrawer from './SideDrawer';

const Header = () => {

  const [ drawerOpen, setDrawerOpen ] = useState(false);

  //open and close sideDrawer on Menu icon click
  const handleClick = () => {
    drawerOpen ? setDrawerOpen(false) : setDrawerOpen(true);
  }
  
  return (
    <AppBar 
      position="fixed"
      style={{ 
        backgroundColor: '#2f2f2f', 
        boxShadow: 'none',
        padding: '10px 0'
      }}
    >
      <Toolbar>
        <div className="header_logo">
          <div className="font_righteous header_logo_venue">The Venue</div>
          <div className="header_logo_title">Musical Events</div>
        </div>

        <IconButton 
          aria-label="Menu"
          color="inherit"
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>

        <SideDrawer open={drawerOpen} handleClick={handleClick}/>

      </Toolbar>
    </AppBar>
  );
};

export default Header;
