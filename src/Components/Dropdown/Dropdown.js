import React, { useState } from "react";
import arrow from '@/Assets/Images/components/ArrowDrop.svg'
const Dropdown = (about) => {

    const [valuedrop, setvaluedrop] = useState(false);

    const toggleview = () => {
        setvaluedrop(!valuedrop);
    }

    return (
        <>
            {
                about.viewpages === false && (
                    <li className='dropdown'>
                        <div className="dropdownhead" onClick={toggleview}>
                            <h2>{about.title}</h2>
                            <img className={`${valuedrop ? "drophaut" : "dropbas"}`} src={arrow} alt="fleche dropdown"></img>
                        </div>

                        {
                            valuedrop && (
                                <p className="dropdowntext">{about.description}</p>
                            )
                        }
                    </li>

                )
            }

            {
                about.viewpages === true && (
                    <li className='dropdown'>
                        <div className="dropdownhead" onClick={toggleview}>
                            <h2>{about.title}</h2>
                            <img className={`${valuedrop ? "drophaut" : "dropbas"}`} src={arrow} alt="fleche dropdown"></img>
                        </div>

                        {
                            valuedrop && (
                                <ul className="dropdowntext">
                                    {about.description.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            )
                        }
                    </li>

                )
            }
        </>
    )
}
export default Dropdown