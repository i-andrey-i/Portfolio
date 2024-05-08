import React, {useState} from "react";
import {BrowserRouter as Router, Route, Routes, BrowserRouter} from "react-router-dom";
// АКТУЛЬНАЯ ВЕРСИЯ
import MainWorksPage from "../pages/MainWorksPage";
import AccountPage from "../pages/AccountPage";
import UserRegistration from "../pages/UserRegistration";
import UserAuthorization from "../pages/UserAuthorization";
import CreateWorkPage from "../pages/CreateWorkPage";
import ProjectPage from "../pages/ProjectPage";
import UserProfileCreate from "../pages/UserProfileCreate";
import {getMe} from "../api/AuthApi";

const App = () => {
    const token = localStorage.getItem("accessToken");
    if (token != null) {
        getMe()
            .then(response => {
                localStorage.setItem("userId", response.id);
            }).catch(error => {
                localStorage.removeItem("accessToken");
                console.error(error);
        })
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<MainWorksPage/>}/>
                <Route path="login" element={<UserAuthorization/>}/>
                <Route path="signup" element={<UserRegistration/>}/>
                <Route path="profile/create" element={<UserProfileCreate/>}/>
                <Route path="profile/:id" element={<AccountPage/>}/>
                <Route path="auto/my-page/create-work" element={<CreateWorkPage/>}/>
                <Route path="project/:id" element={<ProjectPage/>}/>

            </Routes>
        </BrowserRouter>
    );
};

export default App