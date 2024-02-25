import styled from "styled-components";
import {useAuth} from "../hooks/useAuth";
import {useEffect, useState} from "react";
import UserAvatar from "../components/UserAvatar";
import { BsPinFill } from "react-icons/bs";
import { IoMdNotifications, IoMdNotificationsOff } from "react-icons/io";
import conversationService from "../services/ConversationService";
import {ListConversation, TYPE_CONVERSATION} from "../models";
import moment from 'moment'
import {useSearchParams} from "react-router-dom";
import {filter} from "lodash";

const StyleTitleSidebar = styled.h1`
  font-weight: bold;
`;
const WrapperUserAvatar = styled.div`
  width: 100%;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;

  span {
    font-weight: 600;
  }
`;

const StyledChatItems = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid rosybrown;
  padding: .5rem 0;
  
  .chat-name {
    display: flex;
    flex-direction: column;
    flex: 1 1;
    span:first-child {
      font-weight: bolder;
    }
    span:last-child {
      font-weight: 500;
      font-size: 14px;
    }
  }
  
  .wrapper-chat-infor {
    width: 25%;
    max-width: 25%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    .chat-infor {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
    
    .chat-time {
      font-size: 0.9rem;
    }
  }
`;
const Sidebar = () => {
    const {user, isAuthenticated, isInitialized} = useAuth();
    const [listConversation, setListConversation] = useState<ListConversation[]>();
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        async function getDataListConversation() {
            const dataListConversation = await conversationService.getListConversation();
            setListConversation(dataListConversation)
            let myChatConversation = listConversation?.find(conversationItem => conversationItem.type === TYPE_CONVERSATION.MY_CHAT);
            if (myChatConversation) {
                //Handle push param conversation to url -> get data conversation
                setSearchParams(`?${new URLSearchParams({
                    'conversationId' : myChatConversation.conversation_id.toString()
                })}`)
            }
        }
        getDataListConversation();
    }, [isAuthenticated, user]);
    return (
        <section className='sidebar'>
            <StyleTitleSidebar>Sidebar</StyleTitleSidebar>
            <div>
                <WrapperUserAvatar>
                    <UserAvatar src={user?.avatar}/>
                    <span>{isAuthenticated ? user?.full_name : ''}</span>
                </WrapperUserAvatar>
                {listConversation?.map((conversation: ListConversation, index) => {
                    return (
                        <StyledChatItems key={index}>
                            <div className='user-avatar'>
                                <UserAvatar src={user?.avatar}/>
                            </div>
                            <div className='chat-name'>
                                <span>{conversation.conversation_name}</span>
                                <span>{conversation?.content_text ?? ''}</span>
                            </div>
                            <div className='wrapper-chat-infor'>
                                <div className='chat-infor'>
                                    <div>
                                        {conversation.conversation_pin === 1 ? <BsPinFill size={18}/> : ''}
                                    </div>
                                    <div>
                                        <IoMdNotificationsOff size={18}/>
                                    </div>
                                </div>
                                <div className='chat-time'>
                                    {conversation.time_send_message_default ? moment(conversation.time_send_message_default).format('h:mm A') : ''}
                                </div>
                            </div>
                        </StyledChatItems>
                    );
                })}

            </div>
        </section>
    );
}

export default Sidebar;