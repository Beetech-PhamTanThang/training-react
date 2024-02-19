import React, {createContext, useMemo, useState} from "react";
import {ThemeProvider} from "styled-components";
import {DARK_MODE, LIGHT_MODE} from "config/Contants";
import {lightTheme, darkTheme} from "components/Theme";
import {GlobalStyles} from "../components/globalStyles";

type ThemeContextType = {
    theme: typeof DARK_MODE | typeof LIGHT_MODE;
    setTheme: React.Dispatch<React.SetStateAction<typeof DARK_MODE | typeof LIGHT_MODE>>;
};

export const ThemeContext = createContext<ThemeContextType>({
    theme: LIGHT_MODE,
    setTheme: () => {}
});

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [theme, setTheme] = useState<ThemeContextType['theme']>(LIGHT_MODE);
    const contextValue = useMemo(() => ({
        theme,
        setTheme
    }), [theme]);

    return (
        <ThemeProvider theme={theme === DARK_MODE ? darkTheme : lightTheme}>
            <GlobalStyles/>
            <ThemeContext.Provider value={contextValue}>
                {children}
            </ThemeContext.Provider>
        </ThemeProvider>
    );
}