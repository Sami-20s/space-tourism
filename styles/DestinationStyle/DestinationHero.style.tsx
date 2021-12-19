import styled from "styled-components";
import { media } from "../devices";

export const DestinationStyle = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-image: url("/assets/destination/background-destination-mobile.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    padding: 7.4375rem 0 0;
    /* Tablet Screen */
    @media ${media.meduim} {
        background-image: url("/assets/destination/background-destination-tablet.jpg");
        background-size: cover;
        padding: 6.25rem 0 0 2.4063rem;
    }
    /* Large Screen */
    @media ${media.large} {
        padding: 130px 0 0 10.3125rem;
        background-image: url("/assets/destination/background-destination-desktop.jpg");
        background-size: cover;
    }
`;

export const DestinationContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    /* Tablet Screen */
    @media ${media.meduim} {
        align-items: flex-start;
    }
    > h5 {
        color: var(--white);
        font-size: 1rem;
        font-family: var(--barl-c);
        font-weight: 400;
        letter-spacing: 4.75px;
        text-align: center;
        /* Tablet Screen */
        @media ${media.meduim} {
            text-align: left;
            font-size: 1.25rem;
        }
        /* Large Screen */
        @media ${media.large} {
            font-size: 1.75rem;
        }
        span {
            color: var(--dark-gray);
            font-weight: 700;
            font-family: var(--barl-c);
            margin-right: 16px;
        }
    }
`;
