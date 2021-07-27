import styled from "styled-components";
import { motion } from 'framer-motion';

export const CardContainer = styled(motion.div)`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const CardImageBox = styled(motion.div)`
    width: 30%;
    height: 30%;

    // GALAXY S5
    @media (max-width: 360px) and (max-height: 640px) {
        width: 40%;
        height: 40%;
    }
`;

export const CardImage = styled.img`
    width: 100%;
`;

export const CardInfo = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: ${(props => props.infoToLeft ? 'flex-end' : 'flex-start')};
    height: 100%;
    margin: 5%;
`;

export const CardTitle = styled.h3`
    color: #58E1C4;
    font-size: 1.7em;
    font-weight: 700;
    margin-bottom: 5%;
    // 2560 x 1440
    @media (min-width: 2560px) and (min-height: 1440px) {
        font-size: 2.7em;
    }
    // GALAXY S5
    @media (max-width: 360px) and (max-height: 640px) {
        font-size: 1.2em;
    }
`;

export const CardDescription = styled.p`
    color: #fff;
    font-size: 1.1em;
    margin-bottom: 5%;
    // 2560 x 1440
    @media (min-width: 2560px) and (min-height: 1440px) {
        font-size: 2.1em;
    }
    // GALAXY S5
    @media (max-width: 360px) and (max-height: 640px) {
        font-size: 0.7em;
    }
`;

export const CardYear = styled.p`
    color: #A3ADCC;
    margin-bottom: 5%;
    // 2560 x 1440
    @media (min-width: 2560px) and (min-height: 1440px) {
        font-size: 2em;
    }
    // GALAXY S5
    @media (max-width: 360px) and (max-height: 640px) {
        display: none;
    }
`;

export const CardLink = styled.a`
    font-size: 2em;
    color: #A3ADCC;
    transition: all ease-in-out 0.4s;
    :hover {
        color: #58E1C4;
    }
    // 2560 x 1440
    @media (min-width: 2560px) and (min-height: 1440px) {
        font-size: 3em;
    }
    // GALAXY S5
    @media (max-width: 360px) and (max-height: 640px) {
        font-size: 1.5em;
    }
`;