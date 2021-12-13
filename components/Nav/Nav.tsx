import React, { useState } from "react";
import { useGlobal } from "../../context/context";
import { Burger, Logo, NavContainer, NavStyle } from "../../styles/Nav.style";
import NavLinks from "./NavLinks";

const Nav = () => {
    const { navLinks } = useGlobal();
    const [isBurgerClick, setIsBurgerClick] = useState(false);
    return (
        <nav style={{ overflowX: "hidden" }}>
            <NavStyle>
                <NavContainer>
                    <Logo href="/">
                        <img src="/assets/shared/logo.svg" alt="logo" />
                    </Logo>
                    <NavLinks
                        list={navLinks}
                        isBurgerClick={isBurgerClick}
                        setIsBurgerClick={setIsBurgerClick}
                    />
                    <Burger>
                        <img
                            src="/assets/shared/icon-hamburger.svg"
                            alt=""
                            onClick={() => {
                                setIsBurgerClick(true);
                            }}
                        />
                    </Burger>
                </NavContainer>
            </NavStyle>
        </nav>
    );
};

export default Nav;
