import React, { FC, useState } from "react";
import { PlanetsTabsStyle } from "../../styles/DestinationStyle/PlanetsSection.style";
import { PlanetsTabsProps } from "../../types/Destination/DestinationTypes";

const PlanetsTabs: FC<PlanetsTabsProps> = ({ list, setUrl, setPlanet }) => {
    const [active, setActive] = useState("MOON");
    return (
        <PlanetsTabsStyle>
            {list.map(item => {
                const { id, title, url } = item;
                return (
                    <li
                        key={id}
                        onClick={() => {
                            setActive(`${title}`);
                            setUrl(url);
                            setPlanet(item);
                        }}
                        className={`${title == active ? "active" : ""}`}
                    >
                        {title}
                    </li>
                );
            })}
        </PlanetsTabsStyle>
    );
};

export default PlanetsTabs;
