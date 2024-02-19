import {AuthContextType, AuthState} from "./types";
import {createContext, FC, PropsWithChildren, useMemo, useReducer} from "react";
import {AuthReducer} from "./reducers";

const initialState: AuthState = {
    isInitialized: false,
    isAuthenticated: false,
    user: null
}

const AuthContext = createContext<AuthContextType>({
    ...initialState,
    dispatch: () => null
})

const  AuthProvider: FC<PropsWithChildren> = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState)
    const authContextValue = useMemo(() => ({...state, dispatch}), [state]);
    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    );
}

export {AuthContext, AuthProvider}
