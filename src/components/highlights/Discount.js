import React, { useState, useEffect } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';

const Discount = () => {

    const endPercentage = 30;

    const [ percentage , setPercentage ] = useState(0);

    const updatePercent = () => {
        if (percentage < endPercentage){
            setPercentage(prev => prev + 1);
        }
    }

    useEffect( () => {
        if(percentage > 0 && percentage < 30){
            setTimeout(() => {
                setPercentage(prev => prev + 1);
            }, 30);
        }
    }, [percentage]);

    return(
        <div className="center_wrapper">
            <div className="discount_wrapper">

            <Fade
                onVisibilityChange={ (inView) => {
                    if(inView) {
                        updatePercent();
                    }
                }}
            >
                <div className="discount_percentage">
                    <span>{`${percentage}%`}</span>
                    <span>Off</span>
                </div>
            </Fade>

            <Slide right={true}>
                <div className="discount_description">
                    <h3>Early Bird Ticket Price </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </Slide>

            </div>
        </div>
    );
}

export default Discount;