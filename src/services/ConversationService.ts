import {ListConversation, Pagination} from "../models";
import axiosClient from "./Axios";

const conversationService = {
    getListConversation: async (): Promise<ListConversation[]>  => {
        const {data} = await axiosClient.get('conversation');
        return data;
    }
}
export default conversationService