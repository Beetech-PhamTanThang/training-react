import axiosClient from "./Axios";
import {UserProfile} from "../models";

const userService = {
    getUserProfile(): Promise<UserProfile> {
        return axiosClient.get('/user')
    }
}

export default userService;