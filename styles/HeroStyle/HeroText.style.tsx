import styled from "styled-components";
import { media } from "../devices";

export const HeroTextStyle = styled.div`
    margin-bottom: 60px;
    /* Tablet Screen */
    @media ${media.meduim} {
        margin-bottom: 120px;
    }
    /* Large Screen */
    @media ${media.large} {
        margin-bottom: 0;
    }
    h5 {
        text-align: center;
        font-size: 1rem;
        letter-spacing: 4.75px;
        font-family: var(--barl-c);
        font-weight: 400;
        color: var(--gray);
        line-height: 0;
        margin-bottom: 80px;
        /* Tablet Screen */
        @media ${media.meduim} {
            font-size: 1.25rem;
        }
        /* Large Screen */
        @media ${media.large} {
            font-size: 1.75rem;
            text-align: left;
            margin-bottom: 160px;
        }
    }
    h1 {
        text-align: center;
        font-size: 5rem;
        font-family: var(--belle);
        font-weight: 400;
        color: var(--white);
        line-height: 0;
        /* Tablet Screen */
        @media ${media.meduim} {
            font-size: 9.375rem;
        }
        /* Large Screen */
        @media ${media.large} {
            text-align: left;
        }
    }
    p {
        text-align: center;
        font-size: 15px;
        font-family: var(--barl);
        font-weight: 400;
        color: var(--gray);
        max-width: 327px;
        margin: auto;
        line-height: 1.9;
        /* Tablet Screen */
        @media ${media.meduim} {
            max-width: 450px;
            font-size: 1rem;
            margin: unset;
        }
        /* Large Screen */
        @media ${media.large} {
            text-align: left;
            font-size: 1.125rem;
        }
    }
`;
