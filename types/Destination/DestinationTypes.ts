export type DestinationListType = {
    id: number;
    title: "MOON" | "MARS" | "TITAN" | "EUROPA";
    url: string;
    description: string;
    dist: string;
    time: string;
}[];

// Props
export type PlanetsSectionProps = {
    list: DestinationListType;
};

export type PlanetsTabsProps = {
    list: DestinationListType;
    setUrl: React.Dispatch<React.SetStateAction<string>>;
    setPlanet: React.Dispatch<
        React.SetStateAction<{
            id: number;
            title: "MOON" | "MARS" | "TITAN" | "EUROPA";
            url: string;
            description: string;
            dist: string;
            time: string;
        }>
    >;
};

export type SinglePlanetProps = {
    planet: {
        id: number;
        title: "MOON" | "MARS" | "TITAN" | "EUROPA";
        url: string;
        description: string;
        dist: string;
        time: string;
    };
};
