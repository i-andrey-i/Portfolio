import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
// АКТУЛЬНАЯ ВЕРСИЯ
import MainWorksPage from "./MainWorksPage";
import MyAccountPage from "./MyAccountPage";
import UserRegistration from "./UserRegistration";
import UserAutorization from "./UserAutorization";

const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<UserAutorization/>} />
        <Route path="reg" element={<UserRegistration/>} />
        <Route path="main" element={<MainWorksPage/>} />
        <Route path="main/my-page" element={<MyAccountPage/>} />

      </Routes>
    </BrowserRouter>
  );
};

export default App