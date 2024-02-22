import axiosClient from "./Axios";
import {AuthUser, ParamsUserLogin} from "../models";


const authService = {
    Login: async (params: ParamsUserLogin): Promise<AuthUser> => {
        const {data} = await axiosClient.post('/login', params)
        return data;
    }
}

export default authService;