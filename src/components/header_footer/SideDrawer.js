import React from 'react';
import { scroller } from 'react-scroll';

import { Drawer, List, ListItem } from '@material-ui/core';


const SideDrawer = ( { open, handleClick } ) => {

    const links = [
        { where: 'featured', value: 'To top' },
        { where: 'venueInfo', value: 'Venue Info' },
        { where: 'highlights', value: 'Highlights' },
        { where: 'pricing', value: 'Pricing' },
        { where: 'location', value: 'Location' }
    ];

    const scrollToElement = (element) => {
        scroller.scrollTo(element, {
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: -80
        });
        handleClick();
    }

    const renderItem = (item, index) => 
        (
            <ListItem onClick={() => scrollToElement(item.where)} key={index} style={{cursor: 'pointer'}}>
                {item.value}
            </ListItem>
        );
    
     return (
        <Drawer 
            anchor="right"
            open={open}
            onClose={handleClick}
        >
            <List component="nav">
                { links.map((item, index) => renderItem(item, index)) }
            </List>
        </Drawer>
     );
}

export default SideDrawer;