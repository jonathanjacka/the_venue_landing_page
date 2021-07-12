import React from 'react';
import Button from '@material-ui/core/Button';

const MyButton = ( {
        text = 'Btn Text', 
        link = '#', 
        target = '_blank',
        size = 'large', 
        variant = "contained",
        background = '#8e8e8e',
        color = '#fff',
        icon = ''
    } 
    
) => {
    return (
        <Button 
            href={link}
            target={target}
            size={size}
            variant={variant}
            style={{ 
                background: background,
                color: color
            }}
        >
            {icon && <img className="iconImage" alt="ticket icon button" src={icon} />}
            {text}

        </Button>
    );
}

export default MyButton;