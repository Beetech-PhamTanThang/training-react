import axiosClient from "./Axios";

const MessageService = {
    getListMessageByConversation: async (conversationId: number) => {
        const data = await axiosClient.get(`/message/${conversationId}`)
        console.log(data)
    }
}
export default MessageService