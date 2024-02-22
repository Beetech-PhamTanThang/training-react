import {Dispatch} from "react";
import {UserProfile} from "../../models";

export enum AuthActionType {
    INITIALIZE = 'INITIALIZE',
    SIGN_IN = 'SIGN_IN',
    SIGN_OUT = 'SIGN_OUT'
}
export interface AuthState {
    isInitialized?: boolean
    isAuthenticated?: boolean,
    user: UserProfile | User | null
}

export interface User {
    user_id: bigint,
    avatar: string,
    email: string,
    expires_at: string,
    first_name: string,
    last_name: string,
    full_name?: string
}

export interface PayloadAction<T> {
    type: AuthActionType,
    payload: T
}

export interface AuthContextType extends AuthState {
    dispatch: Dispatch<PayloadAction<AuthState>>
}