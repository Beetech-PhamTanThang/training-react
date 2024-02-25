import {ListConversation, Pagination} from "../models";
import axiosClient from "./Axios";

const conversationService = {
    getListConversation: async (): Promise<ListConversation[]>  => {
        const {data} = await axiosClient.get('conversation');
        return data;
    },
    getDetailConversation: async (conversationId: number) => {
        const data = await axiosClient.get(`/conversation/${conversationId}/detail`);
        console.log(data)
    },
}
export default conversationService