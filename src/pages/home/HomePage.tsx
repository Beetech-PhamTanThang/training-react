import React, {useEffect} from "react";
import DemoUseReducer from "components/DemoUseReducer";
import {useAuth} from "hooks/useAuth";
import {Navigate, useSearchParams} from "react-router-dom";
import RoutePath from "config/Routes";
import Spinner from "components/Spinner";
import conversationService from "../../services/ConversationService";
import messageService from "../../services/MessageService";

const getDetailConversation = (conversationId: number) => {
    const detailConversation = conversationService.getDetailConversation(conversationId);
    const listMessageByConversation = messageService.getListMessageByConversation(conversationId);
}

function HomePage(): React.JSX.Element {
    const {user, isAuthenticated, isInitialized} = useAuth();
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        let getConversationId: string | null = searchParams.get('conversationId');
        if (isAuthenticated && getConversationId !== null) {
            const conversationId = parseInt(getConversationId);
            getDetailConversation(conversationId)
        } else {
            console.log('No data conversationId!')
        }
    }, [searchParams]);

    if (!isInitialized) {
        return <Spinner/>
    }

    // if (isAuthenticated) {
    //     return <Navigate to={RoutePath.HomePage}/>
    // }

    return (
        <DemoUseReducer/>
    );
}
export default HomePage