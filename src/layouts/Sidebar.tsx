import styled from "styled-components";
import {useAuth} from "../hooks/useAuth";
import {useEffect} from "react";
import FileService from "../services/FileService";
import {FILE_PATH} from "../config/Contants";

const StyleTitleSidebar = styled.h1`
  font-weight: bold;
`;
const UserAvatar = styled.div`
  width: 100%;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  .avatar {
    border-radius: 50%;
    img {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
    }
  }

  span {
    font-weight: 600;
  }
`;
const Sidebar = () => {
    const {user, isAuthenticated, isInitialized} = useAuth();
    useEffect(function (): void {
        console.log(user, isAuthenticated);
    }, [isAuthenticated, user]);
    return (
        <section className='sidebar'>
            <StyleTitleSidebar>Sidebar</StyleTitleSidebar>
            <div>
                <UserAvatar>
                    <div className='avatar'>
                        <img src={FILE_PATH + user?.avatar} alt="Avatar"/>
                    </div>
                    <span>{isAuthenticated ? user?.full_name : ''}</span>
                </UserAvatar>
            </div>
        </section>
    );
}

export default Sidebar;