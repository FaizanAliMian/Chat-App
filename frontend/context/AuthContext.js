// src/context/AuthContext.js
import React, { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState(null);

    const login = (token) => {
        setAuthToken(token);
        localStorage.setItem('token', token);
    };

    const logout = () => {
        setAuthToken(null);
        localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{ authToken, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
