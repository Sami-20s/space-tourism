import styled from "styled-components";
import { media } from "../devices";

export const NavStyle = styled.nav`
    position: absolute;
    width: 100%;
    height: fit-content;
    padding: 0 24px;
    /* Tablet Screen */
    @media ${media.meduim} {
        padding: 0 0 0 55px;
    }
    /* Large Screen */
    @media ${media.large} {
        padding: 0 0 0 55px;
        top: 40px;
    }
`;

export const NavContainer = styled.div`
    position: relative;
    height: 96px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow-x: hidden;
    @media ${media.meduim} {
        position: unset;
        height: 96px;
        overflow-x: unset;
    }
`;

export const Logo = styled.a`
    display: block;
    position: relative;
`;

export const NavLinksStyle = styled.ul`
    position: fixed;
    display: flex;
    flex-direction: column;
    top: -18px;
    right: 0px;
    height: 100vh;
    width: 65vw;
    padding: 7.4375rem 2rem;
    justify-content: baseline;
    align-items: baseline;
    font-family: var(--barl-c);
    font-size: 1.125rem;
    font-weight: 400;
    color: var(--white);
    backdrop-filter: blur(12px);
    background-color: rgba(255, 255, 255, 0.04);
    transform: translateX(
        ${props => (props.position == true ? "0px" : "400px")}
    );
    z-index: 1200;
    transition: var(--tra);

    /* Tablet Screen */
    @media ${media.meduim} {
        position: relative;
        display: flex;
        width: unset;
        height: 100%;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        padding: 0 3rem 0 3rem;
        transform: unset;
    }
    /* Large Screen */
    @media ${media.large} {
        padding: 0 8.625rem 0 7.6875rem;
    }
    .close {
        position: absolute;
        display: block;
        right: 24px;
        top: 33px;
        /* Tablet Screen */
        @media ${media.meduim} {
            display: none;
        }
    }
    li {
        margin-bottom: 2rem;
        position: relative;
        letter-spacing: 3px;
        cursor: pointer;
        &.active {
            transition: var(--tra);
            &::before {
                background-color: var(--white);
            }
            &:hover::before {
                background-color: var(--white);
            }
        }
        @media ${media.meduim} {
            margin-bottom: 0;
            &::before {
                content: "";
                position: absolute;
                display: block;
                width: 100%;
                height: 3px;
                bottom: -37px;
                transition: var(--tra);
                background-color: transparent;
                cursor: initial;
            }
            &:hover::before {
                background-color: var(--dark-gray);
            }
            &.active {
                transition: var(--tra);
                &::before {
                    background-color: var(--white);
                }
                &:hover::before {
                    background-color: var(--white);
                }
            }
        }
        span {
            display: inline;
            font-weight: 700;
            margin-right: 0.75rem;
            /* Tablet Screen */
            @media ${media.meduim} {
                display: none;
            }
            /* Large Screen */
            @media ${media.large} {
                display: inline;
            }
        }
        &:not(:last-child) {
            /* Tablet Screen */
            @media ${media.meduim} {
                margin-right: 2.5rem;
            }
            /* Large Screen */
            @media ${media.large} {
                margin-right: 3.125rem;
            }
        }
    }
`;
export const Burger = styled.div`
    position: relative;
    display: block;
    /* Tablet Screen */
    @media ${media.meduim} {
        display: none;
    }
`;
