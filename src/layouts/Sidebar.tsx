import styled from "styled-components";

const StyleTitleSidebar = styled.h1`
      font-weight: bold;
`;
const Sidebar = () => {
    return (
        <section className='sidebar'>
            <StyleTitleSidebar>Sidebar</StyleTitleSidebar>
        </section>
    );
}

export default Sidebar;