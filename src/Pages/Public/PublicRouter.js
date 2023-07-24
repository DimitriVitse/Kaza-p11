import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home, Apropos, Logement, NotFound404 } from '@/Pages/Public/Index.js';

import Layout from '@/Layout/Layout.js';


const PublicRouter = () => {

    return (

        <Routes>
            <Route element={<Layout />}>
                <Route path="" element={<Navigate to="/Home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/logement/:id" element={<Logement />} />
                <Route path="/apropos" element={<Apropos />} />
                <Route path="/*" element={<NotFound404 />} />
            </Route>
        </Routes>

    );
};

export default PublicRouter;
