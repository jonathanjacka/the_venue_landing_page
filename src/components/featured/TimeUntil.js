import React, { useState, useEffect, useCallback } from 'react';
import { Slide } from 'react-awesome-reveal';

//temporary variable used to always have event date later than current date -> see getTimeUntil() function bel0w
const someFutureDate = (Date.parse(new Date()) + 5000000000);

const TimeUntil = () => {

    const [ time, setTime ] = useState( {
        days: '0',
        hours: '0',
        minutes: '0',
        seconds: '0'
    } );

    const getTimeUntil = useCallback(() => {

        const timeUntil = someFutureDate - Date.parse(new Date());

        //use below to specify a hard-coded date
        //const eventDate = 'Jul, 10, 2022, 22:00:00';
        //const timeUntil = Date.parse(eventDate) - Date.parse(new Date());

        if(timeUntil < 0) {
            console.log('Date has passed!');
        } else {
            const seconds = Math.floor( (timeUntil / 1000) % 60 );
            const minutes = Math.floor( (timeUntil / 1000 / 60) % 60 );
            const hours = Math.floor( (timeUntil / ( 1000 * 60 *60 )) % 24);
            const days = Math.floor( (timeUntil / ( 1000 * 60 *60 * 24)));

            setTime( { days, hours, minutes, seconds });
        }
    }, []); 
    
    useEffect(() => {
        const timer = () => setInterval(() => getTimeUntil(), 1000);
        timer();
        return () => clearInterval(timer);
    }, [getTimeUntil]);

    const renderItem = (time, value) => (
        <div className="countdown_item">
            <div className="countdown_time">
                {time}
            </div>
            <div className="countdown_tag">
                {value}
            </div>
        </div>
    )

    return (
        <Slide left delay={1000}>

            <div className="countdown_wrapper">

                <div className="countdown_top">
                    Doors open in
                </div>

                <div className="countdown_bottom">
                    {renderItem(time.days, 'days')}
                    {renderItem(time.hours, 'hours')}
                    {renderItem(time.minutes, 'min')}
                    {renderItem(time.seconds, 'secs')}
                </div>

            </div>

        </Slide>
    );
}

export default TimeUntil;