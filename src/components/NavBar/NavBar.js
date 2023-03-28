import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink, useHistory} from "react-router-dom";
import {Context} from "../../index";
import {AUTH_ROUTE, MAIN_ROUTE} from "../../resources/consts";
import Settings from "./Settings/Settings";
import './style.css';

const NavBar = observer(() => {
    const {main} = useContext(Context)
    const history = useHistory();

    return (
        <Navbar className="nav" bg="primary" variant="light">
            <Container>
                <NavLink className="mainButton" to={main.isAuth ? MAIN_ROUTE: AUTH_ROUTE}>ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ УЧРЕЖДЕНИЕ
                    <div className="mainButton--semi">ЗДРАВООХРАНЕНИЯ "ГОРОДСКАЯ БОЛЬНИЦА"</div>
                    <div className="mainButton--small">ГОРОДА БУГУРУСЛАНА</div>
                </NavLink>
                {main.isAuth && <Nav className="ml-auto">
                <Settings />
                <Button variant={'outline-light'} onClick={main.unauthorise} className="m-lg-2">Выход</Button>
                </Nav>}
            </Container>
        </Navbar>
    );
});

export default NavBar;