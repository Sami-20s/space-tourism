import React, { FC } from "react";
import {
    SinglePlanetInfo,
    SinglePlanetStyle,
} from "../../styles/DestinationStyle/SinglePlanet";
import { SinglePlanetProps } from "../../types/Destination/DestinationTypes";

const SinglePlanet: FC<SinglePlanetProps> = ({ planet }) => {
    return (
        <SinglePlanetStyle>
            <h2>{planet.title}</h2>
            <p>{planet.description}</p>
            <SinglePlanetInfo>
                <div>
                    <h6>AVG. DISTANCE</h6>
                    <h5>{planet.dist}</h5>
                </div>
                <div>
                    <h6>EST. TRAVEL TIME</h6>
                    <h5>{planet.time}</h5>
                </div>
            </SinglePlanetInfo>
        </SinglePlanetStyle>
    );
};

export default SinglePlanet;
