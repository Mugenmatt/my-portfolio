import styled from "styled-components";
import { motion } from 'framer-motion';

export const TitleContainer = styled(motion.div)`
    display: flex;
    margin-bottom: 5%;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
`;

export const Title = styled(motion.p)`
    font-weight: 700;
    color: #fff;
    font-size: 2em;
    width: 35%;
    // 2560 x 1440
    @media (min-width: 2560px) and (min-height: 1440px) {
        font-size: 3em;
    }
    
    // SUFACE DUO
    @media (max-width: 540px) and (max-height: 720px) {
        font-size: 1.5em;
        width: 40%;
    }
    // GALAXY S5
    @media (max-width: 360px) and (max-height: 640px) {
        
        width: 80%;
    }
`;

export const NumberTitle = styled(motion.span)`
    color: #58E1C4;
    margin-right: 5%;
`;

export const Line = styled(motion.hr)`
    width: ${props => props.lineWidth ? props.lineWidth : 'auto'};
    
`;
