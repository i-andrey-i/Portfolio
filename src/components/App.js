import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
// АКТУЛЬНАЯ ВЕРСИЯ
import MainWorksPage from "./MainWorksPage";
import MyAccountPage from "./MyAccountPage";
import UserRegistration from "./UserRegistration";
import UserAuthorization from "./UserAuthorization";
import CreateWorkPage from "./CreateWorkPage";
import EachWorkPage from "./EachWorkPage";
import UserRegInformation from "./UserRegInformation";

const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<MainWorksPage/>} />
        <Route path="auto" element={<UserAuthorization/>} />
        <Route path="auto/reg" element={<UserRegistration/>} />
        <Route path="auto/reg/inf" element={<UserRegInformation/>} />
        <Route path="auto/my-page" element={<MyAccountPage/>} />
        <Route path="auto/my-page/create-work" element={<CreateWorkPage/>} />
        <Route path="each-work" element={<EachWorkPage/>} />

      </Routes>
    </BrowserRouter>
  );
};

export default App