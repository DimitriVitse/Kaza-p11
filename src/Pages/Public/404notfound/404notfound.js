import React from 'react'
import { NavLink } from 'react-router-dom';


const NotFound404 = () => {
    return (
        <section className='section404'>
            <div>
                <h1>404</h1>

                <h2>Oups! La page que vous demandez n'existe pas.</h2>
            </div>
            <div className='linkhome'>
                <NavLink to="/home" className="navlink" style={({ isActive }) => isActive ? { borderBottom: "1px solid #ff6060" } : { borderBottom: "unset" }}>Retourner sur la page d’accueil</NavLink></div>

        </section>
    );
}
export default NotFound404