import {FILE_PATH, PATH_IMAGE_PLACEHOLDER} from "../config/Contants";
import styled from "styled-components";
import {string} from "yup";
const StyledUserAvatar = styled.div`
  border-radius: 50%;
  img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
  }
`;

type PropUserAvatar = {
    src: string | null | undefined,
}
const UserAvatar = (props: PropUserAvatar) => {
    return (
        <StyledUserAvatar>
            <img src={ props?.src ? `${FILE_PATH + props?.src}` : PATH_IMAGE_PLACEHOLDER} alt="Avatar"/>
        </StyledUserAvatar>
    );
}

export default UserAvatar