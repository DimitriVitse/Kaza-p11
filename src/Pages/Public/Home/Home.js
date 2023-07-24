import React from 'react';
import Hero from '@/Components/Hero/Hero.js';
import Bannerimg from '@/Assets/Images/logo/Banner.png'
import LogementService from '@/_Services/logements.services';
import { NavLink } from 'react-router-dom';
import Card from '@/Components/Card/Card.js';

const Home = () => {

    return (
        <section className='sectionhome'>
            <Hero bannertitle='Chez vous, partout et ailleurs' bannerimage={Bannerimg}></Hero>
            <ul className='ulhome'>
                {LogementService.GetAllLogement().map((logement) =>
                    <NavLink key={logement.id} to={"/logement/" + logement.id + "/#"}>
                        <Card key={logement.id} image={logement.cover} title={logement.title} />
                    </NavLink>
                )}
            </ul>
        </section>

    );

}

export default Home;