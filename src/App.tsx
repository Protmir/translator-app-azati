import React from 'react';
import { Route, Routes } from 'react-router';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { routes } from './constants/routePath';
import { Translator } from './pages/Translator';
import { Favourite } from './pages/Favourite';
import { NotFoundPage } from './pages/NotFoundPage';
import { Header } from './components/Header';
import { store } from './store';

const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path={routes.root} element={<Translator />} />
                <Route path={routes.favourite} element={<Favourite />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    </Provider>
);

export default App;
