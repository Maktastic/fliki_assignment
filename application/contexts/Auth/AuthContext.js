'use client'
import { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setToken(token);
        }
    }, []);

    const login = async (email, password) => {
        try {

            const res = await fetch('http://127.0.0.1:5000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await res.json();

            if (data && data.statusCode === 200) {
                setToken(data.data.accessToken);
                localStorage.setItem('token', data.data.accessToken);
                setUser(data.data.userData);
            }
            return res

        }
        catch(e) {
            console.log(e)
            return e
        }

    };

    const register = async (email, password) => {
        try {
            const res = await fetch('http://127.0.0.1:5000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await res.json();

            if (data && data.statusCode === 200) {
                setToken(data.data.accessToken);
                localStorage.setItem('token', data.data.accessToken);
                setUser(data.data.userData);
            }
            return res
        }
        catch (e) {
            console.log(e)
            return e
        }
    };

    const isLoggedIn = () => {
        return !!token;
    };

    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{ user, token, login, register, logout, isLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
};

export {AuthContext};