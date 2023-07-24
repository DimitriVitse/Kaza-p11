import React from 'react'
import Hero from '../../../Components/Hero/Hero'
import Bannerimg from '@/Assets/Images/logo/Banner2.png'
import Dropdown from '../../../Components/Dropdown/Dropdown.js'
import ServiceAbout from '@/_Services/about.services.js';


const Apropos = () => {
    return (
        <section className='sectionAbout'>
            <Hero bannerimage={Bannerimg}></Hero>
            <ul>
                {
                    ServiceAbout.GetAbout().map((about) =>
                        <Dropdown key={about.title} viewpages={false} title={about.title} description={about.description} />
                    )
                }
            </ul>
        </section>

    )

}
export default Apropos