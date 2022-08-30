import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import { routes } from './constants/routePath';
import { Translator } from './pages/Translator';
import { Favourite } from './pages/Favourite';
import { NotFoundPage } from './pages/NotFoundPage';
import { Header } from './components/Header';
import { History } from './pages/History';

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const App = () => (
    <BrowserRouter>
        <Header />
        <StyledRoot>
            <Routes>
                <Route path={routes.root} element={<Translator />} />
                <Route path={routes.favourites} element={<Favourite />} />
                <Route path={routes.history} element={<History />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </StyledRoot>
    </BrowserRouter>
);

export default App;
