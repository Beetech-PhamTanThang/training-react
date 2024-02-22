import {createContext, FC, PropsWithChildren, useEffect, useMemo, useReducer} from "react";
import {AuthContextType, AuthState} from "./types";
import {AuthReducer, initialize} from "./reducers";
import userService from "../../services/UserService";

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

    useEffect(() => {
        (async () => {
            const accessToken = localStorage.getItem('access_token');
            if (!accessToken) {
                return dispatch(initialize({
                    isAuthenticated: false,
                    user: null
                }));
            }
            try {
                const user = await userService.getUserProfile();
                dispatch(initialize({
                    isAuthenticated: true,
                    user: user
                }))
            } catch {
                dispatch(initialize({
                    isAuthenticated: false,
                    user: null
                }))
            }

        })()
    }, []);

    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    );
}

export {AuthContext, AuthProvider}
