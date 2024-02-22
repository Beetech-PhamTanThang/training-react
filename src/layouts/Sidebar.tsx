import styled from "styled-components";
import {useAuth} from "../hooks/useAuth";
import {useEffect} from "react";

const StyleTitleSidebar = styled.h1`
      font-weight: bold;
`;
const Sidebar = () => {
    const {user, isAuthenticated, isInitialized} = useAuth();
    useEffect(function (): void {
        console.log(user, isAuthenticated);
    }, [isAuthenticated, user]);
    return (
        <section className='sidebar'>
            <StyleTitleSidebar>Sidebar</StyleTitleSidebar>
            { isAuthenticated ? user?.full_name : 'Chưa đăng nhập'}
        </section>
    );
}

export default Sidebar;