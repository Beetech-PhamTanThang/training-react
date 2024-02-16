import React from 'react';
import 'App.css';
import {AppProvider} from "./context/ThemeContext";
import Router from "routes/Routes";


function App() {
    return (
        <AppProvider>
            <Router/>
        </AppProvider>
    );
}

export default App;
