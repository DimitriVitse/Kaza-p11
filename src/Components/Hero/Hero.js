import React from 'react'



const Hero = (props) => {
    return (

        <div className='Banner'>
            <img src={props.bannerimage} alt='Banniere'></img>
            <div className='boxshadow_banner'></div>
            <h1>{props.bannertitle}</h1>
        </div>


    );

};
export default Hero