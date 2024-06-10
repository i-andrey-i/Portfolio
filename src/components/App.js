import React, {useState} from "react";
import {BrowserRouter as Router, Route, Routes, BrowserRouter} from "react-router-dom";
import MainWorksPage from "../pages/MainWorksPage";
import AccountPage from "../pages/AccountPage";
import UserRegistration from "../pages/UserRegistration";
import UserAuthorization from "../pages/UserAuthorization";
import CreateWorkPage from "../pages/CreateWorkPage";
import ProjectPage from "../pages/ProjectPage";
import UserProfileCreate from "../pages/UserProfileCreate";

const App = () => {
    const token = localStorage.getItem("accessToken");
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<MainWorksPage/>}/>
                <Route path="login" element={<UserAuthorization/>}/>
                <Route path="signup" element={<UserRegistration/>}/>
                <Route path="profile/create" element={<UserProfileCreate/>}/>
                <Route path="profile/:id" element={<AccountPage/>}/>
                <Route path="project/create" element={<CreateWorkPage/>}/>
                <Route path="project/:id" element={<ProjectPage/>}/>

            </Routes>
        </BrowserRouter>
    );
};

export default App