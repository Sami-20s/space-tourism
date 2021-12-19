import styled from "styled-components";
import { media } from "../devices";

export const PlanetsSectionStyle = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-top: 0.625rem;
    /* Large Screen */
    @media ${media.large} {
        flex-direction: row;
    }
    img {
        max-width: 170px;
        margin: auto;
        /* Tablet Screen */
        @media ${media.meduim} {
            max-width: 300px;
        }
        /* Large Screen */
        @media ${media.large} {
            max-width: unset;
            margin: unset;
            margin-right: 10rem;
        }
    }
`;

export const PlanetsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* Large Screen */
    @media ${media.large} {
        align-items: flex-start;
    }
`;

export const PlanetsTabsStyle = styled.ul`
    display: flex;
    padding: 0;
    margin-top: 1.6875rem;
    /* Tablet Screen */
    @media ${media.meduim} {
        margin-top: 3.375rem;
    }
    /* Large Screen */
    @media ${media.large} {
        margin-top: 0;
    }

    li {
        display: block;
        border-bottom: solid 3px transparent;
        transition: var(--tra);
        letter-spacing: 3px;
        font-size: 0.875rem;
        font-family: var(--barl-c);
        font-weight: 400;
        color: var(--gray);
        padding-bottom: 0.6875rem;
        /* Tablet Screen */
        @media ${media.meduim} {
            font-size: 1rem;
        }
        /* Large Screen */
        @media ${media.large} {
            cursor: pointer;
        }
        &:not(:last-child) {
            margin-right: 1.6875rem;
        }
        &:hover {
            border-bottom: solid 3px var(--dark-gray);
        }
        &.active {
            color: var(--white);
            border-bottom: solid 3px var(--white);
            transition: var(--tra);
            &:hover {
                border-bottom: solid 3px var(--white);
            }
        }
    }
`;
