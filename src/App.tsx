import React from 'react';
import {Route, Routes} from 'react-router';
import './App.css';
import {routes} from './constants/routePath';
import {Translator} from './pages/Translator';
import {Favourite} from './pages/Favourite';
import {BrowserRouter} from 'react-router-dom';
import {NotFoundPage} from './pages/NotFoundPage';
import {Header} from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path={routes.root} element={<Translator/>}/>
          <Route path={routes.favourite} element={<Favourite/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
