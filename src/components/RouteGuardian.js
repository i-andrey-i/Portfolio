import React from 'react';
import {Navigate, Outlet} from "react-router-dom";

export const AuthorizationRoutes = () => {
    const userId = localStorage.getItem("userId");
    const isAuthorised = userId && userId !== "undefined";

    return isAuthorised ? (
        <Navigate to={"/"} replace/>) : (
        <Outlet/>
    )
};

export const ProtectedRoutes = () => {
    const userId = localStorage.getItem("userId");
    const isAuthorised = userId && userId !== "undefined";

    return isAuthorised ? (
        <Outlet/>) : (
        <Navigate to={"/login"} replace/>)
};
