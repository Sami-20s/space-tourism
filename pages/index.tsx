import React, { useEffect } from "react";
import Hero from "../components/Home/Hero";
import { useGlobal } from "../context/context";
import { HeroStyle } from "../styles/HomeStyle/Hero.style";

const Home = () => {
    const { setClick } = useGlobal();
    useEffect(() => {
        setClick("00");
    });
    return (
        <>
            <main>
                <Hero />
            </main>
        </>
    );
};
export default Home;
