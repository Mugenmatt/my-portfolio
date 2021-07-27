import React from 'react'
import Presentation from '../../pages/presentation/Presentation'
import {
  FullPortfolioContainer,
  FlexContainer
} from './style'
import FixedLinks from '../fixedLinks/FixedLinks';
import About from '../../pages/about/About';
import Education from '../../pages/education/Education';
import Expirience from '../../pages/experience/Experience';
import Work from '../../pages/work/Work';
import Contact from '../../pages/contact/Contact';
import HobbyTextSeparator from '../hobbyTextSeparator/HobbyTextSeparator';
import guitarra from '../../assets/img/me/guitarra.jpg'
import SeparatorImg from '../separatorImage/SeparatorImg';

const FullPortfolio = () => {

    return (
        <FullPortfolioContainer >

            <FixedLinks />

            <FlexContainer >

                <Presentation />

                <About />

                <Education />

                <SeparatorImg />

                <Expirience />

                <HobbyTextSeparator />

                <Work />

                <Contact />

            </FlexContainer>
        
        </FullPortfolioContainer>
    );
};

export default FullPortfolio;