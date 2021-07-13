import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Footer = () => {
    return (
        <footer className="bck_red">
            <Fade>
                <div className="font_righteous footer_logo_venue">The Rock Show</div>
                <div className="footer_copyright">The Rock Show 2021: All Rights Reserved</div>
            </Fade>
        </footer>
    );
}

export default Footer;