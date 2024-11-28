import React, { createContext, useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

const login = async (email, password) => {
    try {
        const response = await axios.post('http://localhost:5000/auth/login', { 
            email, 
            password 
        });
        
        const { token, user } = response.data;
        localStorage.setItem('token', token);
        setUser(user);
        return true;
    } catch (error) {
        console.error('Login error:', error.response?.data || error.message);
        throw error;
    }
};


    const register = async (name, email, password) => {
        await axios.post('http://localhost:5000/auth/register', { name, email, password });
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    const fetchUser = useCallback(async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            setUser(null);
            setLoading(false);
            return;
        }

        try {
            const { data } = await axios.get('http://localhost:5000/auth/home', {
                headers: { Authorization: `Bearer ${token}` },
            });
            setUser(data.message);
        } catch (err) {
            logout();
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchUser();
    }, [fetchUser]);

    return (
        <AuthContext.Provider value={{ user, login, register, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
