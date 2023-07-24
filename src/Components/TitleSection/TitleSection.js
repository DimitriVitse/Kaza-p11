import React from 'react';



const TitleSection = ({ title, location }) => {

    return (

        <div className="title-location">
            <h2 className="title">{title}</h2>
            <p className="location">{location}</p>
        </div>
    );

};

export default TitleSection