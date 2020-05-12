import React, {useState} from 'react';

import { Container, Input, Icons, NavbarDiv } from './styles';
import { FiSearch, FiUser, FiShoppingCart } from 'react-icons/fi';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Container>
            <a href="/">
                <h1>Ecommerce</h1>
            </a>
            <Input>
                <input type="text" placeholder=" tem tuuudo, pode procurar :)" />
                <div>
                    <FiSearch size={36} color="#b81414" />
                </div>
                
            </Input>
            <Icons>
                <FiUser size = {36} color = "#fff"/>
                <FiShoppingCart size = {36} color = "#fff" />
            </Icons>
            <NavbarDiv>
                <Navbar color = "light" light expand= "md">
                    <NavbarToggler onClick={toggle}/>
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar style = {{display: "flex", justifyContent: 'space-around', width: '100%'}}>
                            <NavItem>
                                <NavLink href="/products">Notebooks</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/products">Desktops</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/products">Smartphones</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/products">Hardware</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/products">Software</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </NavbarDiv>
        </Container>
    );
}

export default NavBar;