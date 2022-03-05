import styled from "styled-components";
import programar from '../../assets/img/me/programar.jpg'
import {motion} from 'framer-motion';

export const HobbyContainer = styled(motion.div)`
    width: 50vw;
    height: 100vh;
    background-image: url(${programar});
    background-position-x: -200px;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: flex-end;
    padding-top: 0.3%;

    // IPAD
    @media (max-width: 768px) and (max-height: 1024px) {
        width: 130vw;
    }
`;

export const TextBox = styled(motion.div)`
    width: 50%;
`;
export const ColoredNumber = styled.p`
    font-size: 6em;
    font-weight: 700;
    color: #58E1C4;
    // 2560 x 1440
    @media (min-width: 2560px) and (min-height: 1440px) {
        font-size: 10em;
    }
    // SUFACE DUO
    @media (max-width: 540px) and (max-height: 720px) {
        font-size: 5em;    
    }
`;

export const TextWork = styled(motion.p)`
    font-size: 6em;
    font-weight: 700;
    color: #fff;
    // 2560 x 1440
    @media (min-width: 2560px) and (min-height: 1440px) {
        font-size: 10em;
        margin-bottom: 3%;
    }
    // 1280 x 720
    @media (max-width: 1280px) and (max-height: 720px) {
        font-size: 4em;
        margin-bottom: 3%;
    }
    // SUFACE DUO
    @media (max-width: 540px) and (max-height: 720px) {
        font-size: 5em;    
    }
`;

export const styleArrow = {
    fontSize: '14em',
    color: '#58E1C4',
}
