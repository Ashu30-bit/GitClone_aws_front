import React, { useEffect } from 'react';
import { useNavigate, useRoutes } from "react-router-dom";

import Profile from './components/user/Profile';
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/auth/Login';
import Signup from './components/auth/SignUp';

import { useAuth } from "./authContext";

const ProjectRoutes = () => {

  const { currentUser, setCurrentUser } = useAuth();
  const nevigate = useNavigate();

  useEffect(() => {

    const userIdFromStorage = localStorage.getItem("userId");

    if (userIdFromStorage && !currentUser) {
        setCurrentUser(userIdFromStorage);
    }

    if (!userIdFromStorage && !["/auth", "/signup"].includes(window.location.pathname)) {
        nevigate("/login");
    }

    if (userIdFromStorage && window.location.pathname === "/auth") {
        nevigate("/");
    }

}, [currentUser, nevigate, setCurrentUser]);

  let element = useRoutes([
    { path: "/", element: <Dashboard /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
    { path: "/profile", element: <Profile /> }
  ]);

  return element;
};

export default ProjectRoutes;

