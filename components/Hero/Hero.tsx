import React from "react";
import { HeroStyle } from "../../styles/HeroStyle/Hero.style";
import HeroButtons from "./HeroButtons";
import HeroText from "./HeroText";
import { HeroContainer } from "../../styles/HeroStyle/Hero.style";

const Hero = () => {
    return (
        <HeroStyle>
            <HeroContainer>
                <HeroText />
                <HeroButtons />
            </HeroContainer>
        </HeroStyle>
    );
};

export default Hero;
