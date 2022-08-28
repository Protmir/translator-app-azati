import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { routes } from './constants/routePath';
import { Translator } from './pages/Translator';
import { Favourite } from './pages/Favourite';
import { NotFoundPage } from './pages/NotFoundPage';
import { Header } from './components/Header';

const App = () => (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path={routes.root} element={<Translator />} />
            <Route path={routes.favourite} element={<Favourite />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </BrowserRouter>
);

export default App;
