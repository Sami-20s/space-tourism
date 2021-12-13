import React, { FC, useState } from "react";
import { NavLinksStyle } from "../../styles/Nav.style";
import { NavLinksProps } from "../../types/Nav/NavTypes";
import NavSingleLink from "./NavSingleLink";

const NavLinks: FC<NavLinksProps> = ({
    list,
    setIsBurgerClick,
    isBurgerClick,
}) => {
    const [click, setClick] = useState("00");
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
