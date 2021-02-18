import React from 'react';
import '../../App.css';
import {Container, Logo} from "./headerStyle";
import logo from '../../assets/easy-carros-logo.png';

function Header() {
    return (
        <Container>
            <Logo src={logo}/>
        </Container>
    );
}

export default Header;
