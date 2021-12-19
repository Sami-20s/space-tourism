import React, { FC, useState } from "react";
import {
    PlanetsSectionStyle,
    PlanetsWrapper,
} from "../../styles/DestinationStyle/PlanetsSection.style";
import { PlanetsSectionProps } from "../../types/Destination/DestinationTypes";
import PlanetsTabs from "./PlanetsTabs";
import SinglePlanet from "./SinglePlanet";

const PlanetsSection: FC<PlanetsSectionProps> = ({ list }) => {
    const [url, setUrl] = useState("/assets/destination/image-moon.webp");
    const [planet, setPlanet] = useState(list[0]);
    return (
        <PlanetsSectionStyle>
            <img src={url} alt="planet photo" />
            <PlanetsWrapper>
                <PlanetsTabs
                    list={list}
                    setUrl={setUrl}
                    setPlanet={setPlanet}
                />
                <SinglePlanet planet={planet} />
            </PlanetsWrapper>
        </PlanetsSectionStyle>
    );
};

export default PlanetsSection;
