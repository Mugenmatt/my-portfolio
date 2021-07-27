import styled from "styled-components";
import { motion } from 'framer-motion';

export const SeparatorTextContainer = styled(motion.div)`
    background-color: #112240;
    height: 100vh;
    width: 10vw;
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media (max-width: 768px) and (max-height: 1024px) {
        display: none;
    }
`;

export const SvgImg = styled(motion.svg)``;

export const Letter = styled(motion.path)`
    /* animation-name: 'fillLetters';
    animation-duration: 2s;
    transition: all ease-in-out 0.4s;
    @keyframes fillLetters {
        from {
            fill: 'none';
        }
        to {
            fill: #fff;
        }
    } */
`;