import React, { FC, useEffect, useState } from "react";
import Link from "next/link";
import { NavSingleLinkProps } from "../../types/Nav/NavTypes";

const NavSingleLink: FC<NavSingleLinkProps> = ({
    id,
    title,
    url,
    number,
    click,
    setClick,
    setIsBurgerClick,
}) => {
    return (
        <li
            onClick={() => {
                setClick(`${number}`);
                setIsBurgerClick(false);
            }}
            className={`${click == number ? "active" : ""}`}
        >
            <Link href={url}>
                <div>
                    <span>{number}</span>
                    {title}
                </div>
            </Link>
        </li>
    );
};

export default NavSingleLink;
