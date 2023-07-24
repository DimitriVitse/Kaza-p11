import React from 'react';


const Card = (props) => {

    return (
        <li className='card'>
            <img src={props.image} alt='cover'></img>
            <div className='boxshadow'></div>
            <h2>{props.title}</h2>
        </li>
    );

};

export default Card