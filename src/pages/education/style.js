import styled from "styled-components";
import { motion } from 'framer-motion';

export const EducationPage = styled(motion.div)`
    background-color: #0A192F;
    height: 100vh;
    width: 50vw;
    display: flex;
    align-items: center;
    justify-content: center;

    // IPAD    
    @media (max-width: 768px) and (max-height: 1024px) {
        width: 140vw;
    }

    // SUFRACE DUO    
    @media (max-width: 540px) and (max-height: 720px) {

    }

`;

export const TitleCardsContainer = styled(motion.div)`
    background-color: #112240;
    padding: 9.5% 5% 5% 5%;
    width: 80%;
    height: 100%;
`;

export const CardsContainer = styled(motion.div)`
    margin-top: 8%;
`;
