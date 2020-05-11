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
    const [height, setHeight] = useState(24.9);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Container>
            <h1>Ecommerce</h1>
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
                                <NavLink href="/products">Produtos</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/products">Produtos</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/products">Produtos</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/products">Produtos</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/products">Produtos</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </NavbarDiv>
        </Container>
    );
}

export default NavBar;