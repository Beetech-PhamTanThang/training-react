import React from "react";
import {Outlet} from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const MainLayoutWrapper = styled.main`
  display: flex;
  .sidebar {
    width: 17vw;
  }
  .content {
    width: calc(100vw - 17vw);
  }
`;
const MainLayout = () => {
    return (
        <MainLayoutWrapper>
            <Sidebar/>
            <section className='content'>
                <Header/>
                <section>
                    <Outlet/>
                </section>
            </section>
        </MainLayoutWrapper>
    );
}

export default MainLayout;