import React from 'react';

import { Drawer, List, ListItem } from '@material-ui/core';


const SideDrawer = ( {open, handleClick } ) => {
     return (
        <Drawer 
            anchor="right"
            open={open}
            onClose={handleClick}
        >
            <List component="nav">
                <ListItem onClick={() => alert('click')} style={{cursor: 'pointer'}}>
                    Name of Item 1
                </ListItem>
            </List>
        </Drawer>
     );
}

export default SideDrawer;