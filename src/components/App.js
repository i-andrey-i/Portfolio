import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
// АКТУЛЬНАЯ ВЕРСИЯ
import MainWorksPage from "./MainWorksPage";
import MyAccountPage from "./MyAccountPage";
import UserRegistration from "./UserRegistration";
import UserAuthorization from "./UserAuthorization";
import CreateWorkPage from "./CreateWorkPage";
import EachWorkPage from "./EachWorkPage";

const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<UserAuthorization/>} />
        <Route path="reg" element={<UserRegistration/>} />
        <Route path="main" element={<MainWorksPage/>} />
        <Route path="main/my-page" element={<MyAccountPage/>} />
        <Route path="main/my-page/create-work" element={<CreateWorkPage/>} />
        <Route path="main/each-work" element={<EachWorkPage/>} />

      </Routes>
    </BrowserRouter>
  );
};

export default App