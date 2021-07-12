import React from 'react';
import { Zoom } from 'react-awesome-reveal';

import VenueCard from './VenueCard';

import icon_calendar from '../../resources/images/icons/calendar.png';
import icon_location from '../../resources/images/icons/location.png';

const VenueInfo = () => {

    return (

        <div className="bck_black">
            <div className="center_wrapper">
                <div className="vn_wrapper">

                    <Zoom className="vn_item">
                        <VenueCard 
                            color="#ff4800"
                            icon={icon_calendar}
                            titleText="Event Date & Time"
                            descriptionText="Nov 10th, 2021 @10PM"
                        />
                    </Zoom>

                    <Zoom className="vn_item">
                        <VenueCard 
                            color="#ffa800"
                            icon={icon_location}
                            titleText="Event Location"
                            descriptionText="Downtown Chicago, IL"
                        />
                    </Zoom>

                </div>
            </div>
        </div>

    );
}

export default VenueInfo;