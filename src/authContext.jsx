import React, { createContext, useState, useEffect, useContext } from "react";
import { useNavigate, useRoutes } from "react-router-dom";

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const userId = localStorage.getItem("userId");

        if (userId) {
            setCurrentUser(userId);
        }
    }, []);

    const value = {
        currentUser,
        setCurrentUser
    };

    return ( <AuthContext.Provider value={value}> {children} </AuthContext.Provider>  );
};
