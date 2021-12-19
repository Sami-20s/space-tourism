import React, { FC } from "react";
import { useGlobal } from "../../context/context";
import {
    DestinationStyle,
    DestinationContainer,
} from "../../styles/DestinationStyle/DestinationHero.style";
import PlanetsSection from "./PlanetsSection";

const DestinationHero: FC = () => {
    const { planetsList } = useGlobal();
    return (
        <DestinationStyle>
            <DestinationContainer>
                <h5>
                    <span>{"01"}</span>
                    PICK YOUR DESTINATION
                </h5>
                <PlanetsSection list={planetsList} />
            </DestinationContainer>
        </DestinationStyle>
    );
};

export default DestinationHero;
