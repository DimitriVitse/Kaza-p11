import React from 'react';



const Profil = ({ host }) => {

    return (
        <div className='profil-section'>
            <h3>{host.name}</h3>
            <img src={host.picture} alt={host.name}></img>
        </div >


    );

};

export default Profil