import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">

            <iframe
                title="ggleMaps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8647.999449530816!2d-87.63140137667264!3d41.88237189985315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2ca68a4f9c03%3A0x44182cdcb5a91004!2sMillennium%20Park!5e0!3m2!1sen!2sus!4v1626142053655!5m2!1sen!2sus" 
                loading="lazy"
                width="100%"
                height="500px"
                allowFullScreen={true}
            ></iframe>

            <div className="location_tag">
                <div>
                    Location
                </div>
            </div>

        </div>
    );
}

export default Location;
