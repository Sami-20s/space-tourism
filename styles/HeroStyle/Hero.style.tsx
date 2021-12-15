import styled from "styled-components";
import { media } from "../devices";

export const HeroStyle = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-image: url("/assets/home/background-home-mobile.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    padding: 7.4375rem 0 0;
    /* Tablet Screen */
    @media ${media.meduim} {
        background-image: url("/assets/home/background-home-tablet.jpg");
        background-size: cover;
        padding: 9.375rem 0 0;
    }
    /* Large Screen */
    @media ${media.large} {
        padding: 12rem 10.3125rem 0;
        background-image: url("/assets/home/background-home-desktop.jpg");
        background-size: cover;
    }
`;

export const HeroContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media ${media.large} {
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;
    }
`;
