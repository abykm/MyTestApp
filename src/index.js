import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import App from './App';
import Hooktest from './Hooktest';
import Component_1 from './UseContextHook';
import UseReucer from './UseReducer';
import UseCallback from './UseCallback';
// <Route path="/" element={<App array={...array}/>} />

const array = [1, 2];
const routes = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<UseReucer name={'aby'} />} />
    </Routes>
  </BrowserRouter>
);

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(routes);
