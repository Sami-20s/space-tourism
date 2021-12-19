import React, { FC, useEffect } from "react";
import DestinationHero from "../../components/Destination/DestinationHero";
import { useGlobal } from "../../context/context";

const Destination: FC = () => {
    const { setClick } = useGlobal();
    useEffect(() => {
        setClick("01");
    }, []);
    return (
        <main>
            <DestinationHero />
        </main>
    );
};

export default Destination;
