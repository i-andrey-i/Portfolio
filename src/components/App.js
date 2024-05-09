import React, {useState} from "react";
import {BrowserRouter as Router, Route, Routes, BrowserRouter} from "react-router-dom";
// АКТУЛЬНАЯ ВЕРСИЯ
import MainWorksPage from "./MainWorksPage";
import AccountPage from "./AccountPage";
import UserRegistration from "./UserRegistration";
import UserAuthorization from "./UserAuthorization";
import CreateWorkPage from "./CreateWorkPage";
import ProjectPage from "./ProjectPage";
import UserProfileCreate from "./UserProfileCreate";
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