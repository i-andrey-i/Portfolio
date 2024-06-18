import React, {useState} from "react";
import {BrowserRouter as Router, Route, Routes, BrowserRouter} from "react-router-dom";
import MainWorksPage from "../pages/MainWorksPage/MainWorksPage";
import AccountPage from "../pages/AccountPage/AccountPage";
import UserRegistration from "../pages/UserRegistration/UserRegistration";
import UserAuthorization from "../pages/UserAuthorization/UserAuthorization";
import CreateWorkPage from "../pages/CreateWorkPage/CreateWorkPage";
import ProjectPage from "../pages/ProjectPage/ProjectPage";
import UserProfileCreate from "../pages/UserProfileCreate/UserProfileCreate";
import {AuthorizationRoutes, ProtectedRoutes} from "./RouteGuardian";
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
                <Route path="profile/:id" element={<AccountPage/>}/>
                <Route path="project/:id" element={<ProjectPage/>}/>
                <Route element={<AuthorizationRoutes/>}>
                    <Route path="login" element={<UserAuthorization/>}/>
                    <Route path="signup" element={<UserRegistration/>}/>
                </Route>
                <Route element={<ProtectedRoutes/>}>
                    <Route path="profile/create" element={<UserProfileCreate/>}/>
                    <Route path="project/create" element={<CreateWorkPage/>}/>
                </Route>


            </Routes>
        </BrowserRouter>
    );
};

export default App