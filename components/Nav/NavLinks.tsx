import React, { FC, useState } from "react";
import { useGlobal } from "../../context/context";
import { NavLinksStyle } from "../../styles/NavStyle/Nav.style";
import { NavLinksProps } from "../../types/Nav/NavTypes";
import NavSingleLink from "./NavSingleLink";

const NavLinks: FC<NavLinksProps> = ({
    list,
    setIsBurgerClick,
    isBurgerClick,
}) => {
    const { click, setClick } = useGlobal();
    return (
        <NavLinksStyle position={isBurgerClick}>
            <img
                src="/assets/shared/icon-close.svg"
                alt=""
                className="close"
                onClick={() => setIsBurgerClick(false)}
            />
            {list.map(link => {
                return (
                    <NavSingleLink
                        key={link.id}
                        {...link}
                        click={click}
                        setClick={setClick}
                        setIsBurgerClick={setIsBurgerClick}
                    />
                );
            })}
        </NavLinksStyle>
    );
};
export default NavLinks;
