import {AuthState, AuthActionType, PayloadAction} from "./types";

export interface HandleReducers {
    INITIALIZE(state: AuthState, action: PayloadAction<AuthState>): AuthState,
    SIGN_IN(state: AuthState, action: PayloadAction<AuthState>): AuthState,
    SIGN_OUT(state: AuthState): AuthState,
}

//Handle reducers
const ReducersHandler: HandleReducers = {
    INITIALIZE(state: AuthState, action: PayloadAction<AuthState>): AuthState {
        const { isAuthenticated, user } = action.payload;
        return {
            ...state,
            isInitialized: true,
            isAuthenticated,
            user
        }
    },

    SIGN_IN(state: AuthState, action: PayloadAction<AuthState>): AuthState {
        const { user } = action.payload;
        return {
            ...state,
            isAuthenticated: true,
            user
        }
    },

    SIGN_OUT(state: AuthState): AuthState {
        return {
            ...state,
            isAuthenticated: false,
            user: null
        }
    }
}

//Export auth reducers
export function AuthReducer(state: AuthState, action: PayloadAction<AuthState>) {
    if (!ReducersHandler[action.type]) {
        return state;
    }
    return ReducersHandler[action.type](state, action);
}

//Export all action
export function initialize(payload: AuthState): PayloadAction<AuthState> {
    return {
        type: AuthActionType.INITIALIZE,
        payload
    }
}

export function signIn(payload: AuthState): PayloadAction<AuthState> {
    return {
        type: AuthActionType.SIGN_IN,
        payload
    }
}

export function signOut(): PayloadAction<AuthState> {
    //TODO: remove access token
    return {
        type: AuthActionType.SIGN_OUT,
        payload: {
            user: null
        }
    }
}