import {number} from "yup";

export interface ListConversation {
    conversation_id: number;
    message_id: number | null;
    user_id: number | null;
    content_text: string | null;
    content_file: string | null;
    message_count_unread: number;
    message_to_unread: number;
    conversation_avatar: string | null;
    conversation_name: string;
    conversation_pin: number;
    is_mute: number;
    message_type_user: number;
    time_send_message: string | null;
    time_send_message_default: string | null;
    type: number;
    total_members_in_conversation: number | null;
    invite_link: string | null;
    encrypt_conversation_id: string | null;
    most_recent_message: string | null;
}
type TypeConversation = {
    'GROUP_CHAT': number,
    'MY_CHAT': number,
    'TWO_USER': number
}
export const TYPE_CONVERSATION: TypeConversation = {
    'GROUP_CHAT' : 0,
    'MY_CHAT': 1,
    'TWO_USER': 2
}