import React from 'react';
import MyButton from '../utils/MyButton';
import { Zoom } from 'react-awesome-reveal';

import ticket_icon from '../../resources/images/icons/ticket.png';


const Pricing = () => {

    const priceState = {
        prices: [ 100, 200, 300 ],
        position: [ 'Silver', 'Gold', 'VIP' ],
        description: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        ],
        linkTo: [
            "_blank",
            "_blank",
            "_blank"
        ],
        delay: [ 500, 0, 500]
    }

    const showBoxes = () => (
        priceState.prices.map( (box, index) => (
            <Zoom className="pricing_item" key={index} delay={priceState.delay[index]}>
                <div className="pricing_inner_wrapper">
                    <div className="pricing_title">
                        <span>${box}</span>
                        <span>{priceState.position[index]}</span>
                    </div>
                    <div className="pricing_description">
                        {priceState.description[index]}
                    </div>
                    <div className="pricing_buttons">
                        <MyButton 
                            text = 'Purchase'
                            link ={priceState.linkTo[index]}
                            target = '_blank'
                            background = '#8e8e8e'
                            color = '#fff'
                            icon ={ticket_icon}
                        />
                    </div>
                </div>
            </Zoom>
        ))
    );

    return (
        <div class="bck_black">
            <div className="center_wrapper pricing_section">
                <h2>Pricing</h2>

                <div className="pricing_wrapper">
                    { showBoxes() }
                </div>
            </div>
        </div>
    );

}

export default Pricing;