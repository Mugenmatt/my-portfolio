import React from 'react'
import Presentation from '../../pages/Presentation/Presentation'
import {
  FullPortfolioContainer,
  FlexContainer
} from './style'
import FixedLinks from '../FixedLinks/FixedLinks';
import About from '../../pages/About/About';
import Education from '../../pages/Education/Education';
import Expirience from '../../pages/Experience/Experience';
import Work from '../../pages/work/Work';
import Contact from '../../pages/Contact/Contact';
import guitarra from '../../assets/img/me/guitarra.jpg'
import SeparatorImg from '../SeparatorImage/SeparatorImg';
import HobbyTextSeparator from '../HobbyTxtSeparator/HobbyTextSeparator';

const FullPortfolio = () => {

    return (
        <FullPortfolioContainer >

            <FixedLinks />

            <FlexContainer >

                <Presentation />

                <About />

                <Education />

                <SeparatorImg img={guitarra} />

                <Expirience />

                <HobbyTextSeparator />

                <Work />

                <Contact />

            </FlexContainer>
        
        </FullPortfolioContainer>
    );
};

export default FullPortfolio;