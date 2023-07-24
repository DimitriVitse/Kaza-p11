import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import LogementService from '@/_Services/logements.services';
import GallerySlideshow from '@/Components/Gallery/Gallery.js';
import TitleSection from '@/Components/TitleSection/TitleSection.js';
import Profil from '@/Components/Profil/Profil';
import Tags from '@/Components/Tags/Tags';
import StarRating from '@/Components/Stars/Stars';
import Dropdown from '@/Components/Dropdown/Dropdown';



const Logement = () => {

    const [logement, setLogement] = useState({});
    const [isWait, setisWait] = useState(true);
    console.log(logement)
    let { id } = useParams();
    let navigate = useNavigate();
    useEffect(() => {
        LogementService.GetOneLogement(id)
            .then((response) => {
                if (response) {
                    setLogement(response);
                    setisWait(false);
                } else {
                    navigate("/404");
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }, [id, navigate])

    if (isWait) return (<h3>Loading...</h3>)

    return (

        <section className='sectionlogement'>
            <GallerySlideshow images={logement.pictures}></GallerySlideshow>
            <div className='infos'> <TitleSection title={logement.title} location={logement.location}></TitleSection>
                <Profil host={logement.host}></Profil>
                <Tags tags={logement.tags}></Tags>
                <StarRating initialRating={logement.rating} /></div>


            <ul className='sectiondropdown'>
                <Dropdown viewpages={false} title='Description' description={logement.description} />
                <Dropdown viewpages={true} title='Équipements' description={logement.equipments} />
            </ul>
        </section>

    );

}

export default Logement;