import React from 'react';

const VenueCard = ( {

    color,
    icon,
    titleText,
    descriptionText,

} ) => {

    return (
        <div className="vn_outer">
            <div className="vn_inner">
                <div className="vn_icon_square" style={{background:color}}></div>
                <div
                    className="vn_icon"
                    style={{
                        background: `url(${icon})`
                    }}
                ></div>
                <div className="vn_title">
                    {titleText}
                </div>
                <div className="vn_desc">
                    {descriptionText}
                </div>
            </div>
        </div>
    );
}

export default VenueCard;