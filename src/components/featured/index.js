import React from 'react';
import Carousel from './Carousel';

const Featured = () => {

    return (
        <div className="featured_container">
            <Carousel />
            <div className="artist_name">
                <div className="wrapper">
                    Live music all night
                </div>
                
            </div>
        </div>
    );
}

export default Featured;