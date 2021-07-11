import React from 'react';
import Slider from 'react-slick';

import slide_one from '../../resources/images/slide_1.jpg';
import slide_two from '../../resources/images/slide_2.jpg';
import slide_three from '../../resources/images/slide_3.jpg';
import slide_four from '../../resources/images/slide_4.jpg';

const Carousel = () => {

    const slidesSettings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500
    };

    const imageStyle = {
        height: `${window.innerHeight}px`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom center'
    }

    return (
        <div 
            className="carousel_wrapper"
            style={ {
                height: `${window.innerHeight}px`
            } }
        >

            <Slider {...slidesSettings}>
                <div>
                    <div
                        className="carousel_image"
                        style={
                            {...imageStyle, background: `url(${slide_one})`}
                        }
                    >
                    </div>
                </div>
                <div>
                    <div
                        className="carousel_image"
                        style={
                            {...imageStyle, background: `url(${slide_two})`}
                        }
                    >
                    </div>
                </div>
                <div>
                    <div
                        className="carousel_image"
                        style={
                            {...imageStyle, background: `url(${slide_three})`}
                        }
                    >
                    </div>
                </div>
                <div>
                    <div
                        className="carousel_image"
                        style={
                            {...imageStyle, background: `url(${slide_four})`}
                        }
                    >
                    </div>
                </div>
            </Slider>

        </div>
    );
}

export default Carousel;