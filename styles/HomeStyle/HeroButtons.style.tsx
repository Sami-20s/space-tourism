import styled from "styled-components";
import { media } from "../devices";

export const HeroButtonsStyle = styled.div`
    margin-bottom: 48px;
    /* Tablet Screen */
    @media ${media.meduim} {
        margin-bottom: 90px;
    }
    /* Large Screen */
    @media ${media.large} {
        margin-bottom: 0;
    }
`;

export const HeroButtonStyle = styled.button`
    position: relative;
    display: block;
    width: 9.375rem;
    height: 9.375rem;
    border-radius: 100%;
    border: none;
    font-size: 1.25rem;
    font-family: var(--belle);
    font-weight: 400;
    color: var(--dark-blue);
    background-color: var(--white);
    transition: var(--tra);
    box-shadow: 0px 0px 0px 0 rgba(255, 255, 255, 0.1);
    &:hover {
        box-shadow: 0px 0px 0px 45px rgba(255, 255, 255, 0.1);
    }
    /* Tablet Screen */
    @media ${media.meduim} {
        width: 15.125rem;
        height: 15.125rem;
        font-size: 2rem;
        &:hover {
            box-shadow: 0px 0px 0px 70px rgba(255, 255, 255, 0.1);
        }
    }
    /* Large Screen */
    @media ${media.large} {
        width: 17.125rem;
        height: 17.125rem;
        cursor: pointer;
        &:hover {
            box-shadow: 0px 0px 0px 5.5rem rgba(255, 255, 255, 0.1);
        }
    }
`;
