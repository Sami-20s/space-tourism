import styled from "styled-components";
import { media } from "../devices";

export const SinglePlanetStyle = styled.div`
    text-align: center;
    /* Large Screen */
    @media ${media.large} {
        text-align: left;
    }
    > h2 {
        margin: 0;
        color: var(--white);
        font-size: 3.5rem;
        font-family: var(--belle);
        font-weight: 400;
        /* Tablet Screen */
        @media ${media.meduim} {
            font-size: 5rem;
        }
        /* Large Screen */
        @media ${media.large} {
            font-size: 6.25rem;
        }
    }
    > p {
        position: relative;
        color: var(--gray);
        font-size: 0.9375rem;
        font-family: var(--barl);
        font-weight: 400;
        line-height: 1.9;
        max-width: 327px;
        margin: 0 auto;
        &::after {
            content: "";
            display: block;
            position: absolute;
            width: 100%;
            height: 1px;
            left: 0;
            bottom: -20px;
            background-color: #383b4b;
        }
        /* Tablet Screen */
        @media ${media.meduim} {
            font-size: 1rem;
            max-width: 537px;
        }
        /* Large Screen */
        @media ${media.large} {
            font-size: 1.125rem;
            max-width: 444px;
            margin: unset;
        }
    }
`;

export const SinglePlanetInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: baseline;
    color: white;
    margin-top: 20px;
    /* Tablet Screen */
    @media ${media.meduim} {
    }
    /* Large Screen */
    @media ${media.large} {
        flex-direction: row;
        justify-content: space-between;
    }
    > div:last-child {
        margin-bottom: 58px;
        @media ${media.large} {
            margin-bottom: 0;
        }
    }
    h6 {
        color: var(--gray);
        font-family: var(--barl-c);
        font-weight: 400;
        letter-spacing: 2.35px;
        font-size: 14px;
        margin-bottom: 1.0625rem;
    }
    h5 {
        margin-top: 0;
        margin: 0;
        color: var(--white);
        font-size: 1.75rem;
        font-family: var(--belle);
        font-weight: 400;
        text-transform: uppercase;
    }
`;
