import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainProvider } from './context/MainProvider';
import { LandingPage } from './views/public/LandingPage';
import { LayoutPage } from './views/public/LayoutPage';

export const AppLanding = () => {
  return (
    <MainProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutPage />}>
            <Route index element={<LandingPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MainProvider>
  );
};
