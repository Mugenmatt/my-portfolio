import styled from "styled-components";
import {motion} from 'framer-motion';

export const AboutPage = styled(motion.div)`
    background-color: #0A192F;
    height: 100vh;
    width: 50vw;
    min-width: 50vw;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    // IPAD
    @media (max-width: 768px) and (max-height: 1024px) {
        width: 110vw;
    }

`;

export const ContainerChild = styled(motion.div)`
    background-color: #112240;
    border-radius: 33px;
    padding: 5%;
    width: 80%;
    height: 90%;
    
    // NOTEBOOK    
    @media (max-width: 1280px) and (max-height: 720px) {
        height: 95%;
    }
    // SUFRACE DUO    
    @media (max-width: 540px) and (max-height: 720px) {
        height: 80vh;
    }
`;

export const AboutDescription = styled(motion.p)`
    color: #A3ADCC;
    font-size: 1.5em;
    margin: 0 2%;
    @media (min-width: 2560px) and (min-height: 1440px) {
        font-size: 2.5em;
    }
    // SUFACE DUO
    @media (max-width: 540px) and (max-height: 720px) {
        font-size: 1em;
        margin: 5% 2%;
    }
`;

export const Elipse = styled(motion.div)`
    position: absolute;
    background-color: #0A192F;
    z-index: 100;
    border-radius: 50%;
    margin: auto;
    width: 250px;
    height: 200px;
    right: -4%;
    box-shadow: -19px 3px 6px rgba(0, 0, 0, 0.25);
    // SUFACE DUO
    @media (max-width: 540px) and (max-height: 720px) {
        width: 200px;
        height: 150px;
        right: -7%;
        box-shadow: -10px 3px 6px rgba(0, 0, 0, 0.25);
    }
    @media (max-width: 1280px) and (max-height: 720px) {
        right: -8%;
    }  
`;

export const MyAcronym = styled(motion.p)`
    position: absolute;
    font-size: 5em;
    color: #A3ADCC;
    font-weight: 700;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    // SUFACE DUO
    @media (max-width: 540px) and (max-height: 720px) {
        font-size: 3em;
    }
`;