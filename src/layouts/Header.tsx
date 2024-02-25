import React, {useContext} from "react";
import {ThemeContext} from "context/ThemeContext";
import {DARK_MODE, LIGHT_MODE} from "config/Contants";
import {MdDarkMode, MdLightMode} from "react-icons/md";
import styled from "styled-components";
import RoutePath from "../config/Routes";
import {Link} from "react-router-dom";
import {useAuth} from "../hooks/useAuth";

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const Switch = styled.div`
  position: relative;
  width: 2rem;
  height: 1rem;
  background: #b3b3b3;
  border-radius: 2rem;
  padding: 4px;
  transition: 300ms all;

  &:before {
    transition: 300ms all;
    content: "";
    position: absolute;
    width: 1rem;
    height: 1rem;
    border-radius: 2rem;
    top: 50%;
    left: 0.3rem;
    background: white;
    transform: translate(0, -50%);
  }
`;

const Input = styled.input`
  opacity: 0;
  position: absolute;

  &:checked + ${Switch} {
    background: darkorange;

    &:before {
      transform: translate(1rem, -50%);
    }
  }
`;

const SpanShowResult = styled.span`
  font-size: 1rem;
`;
const Header = () => {
    const {theme, setTheme} = useContext(ThemeContext);
    const {isAuthenticated} = useAuth();

    //Function switch theme
    const toggleSwitchTheme = () => {
        const newTheme = theme === DARK_MODE ? LIGHT_MODE : DARK_MODE;
        //Update new theme
        setTheme(newTheme);
    }

    return (
        <Label>
            {theme === DARK_MODE ? <MdDarkMode size='1.5rem'/> : <MdLightMode size='1.5rem'/>}
            <SpanShowResult>Chế độ tối: {theme === DARK_MODE ? 'Bật' : 'Tắt'}</SpanShowResult>
            <Input checked={theme === DARK_MODE} type="checkbox" onChange={toggleSwitchTheme}/>
            <Switch/>
            { !isAuthenticated ? <Link to={RoutePath.Login}>Login</Link> : ''}
        </Label>
    );
}
export default Header;