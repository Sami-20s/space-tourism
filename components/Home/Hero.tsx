import React from "react";
import { HeroStyle } from "../../styles/HomeStyle/Hero.style";
import HeroButtons from "./HeroButtons";
import HeroText from "./HeroText";
import { HeroContainer } from "../../styles/HomeStyle/Hero.style";

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
