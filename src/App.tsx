import React from 'react';
import 'App.css';
import {AppProvider} from "./context/ThemeContext";
import Router from "routes/Routes";
import {AuthProvider} from "./context/auth/AuthContext";


function App() {
    return (
        <AuthProvider>
            <AppProvider>
                <Router/>
            </AppProvider>
        </AuthProvider>
    );
}

export default App;
