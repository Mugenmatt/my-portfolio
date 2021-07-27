import styled from "styled-components";
import { motion } from 'framer-motion';
import notPointing from '../../assets/img/me/notPointing.jpg';

export const ContactPage = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
// SUFACE DUO
@media (max-width: 540px) and (max-height: 720px) {
    justify-content: center;
}
`;


export const ContactTitle = styled(motion.p)`
    color: #58E1C4;
    font-size: 2em;
    margin-bottom: 3%;
    // 2560 x 1440
    @media (min-width: 2560px) and (min-height: 1440px) {
        font-size: 3em;
    }
    // GALAXY S5
    @media (max-width: 360px) and (max-height: 640px) {
        font-size: 1.5em;
    }
`;
export const GetInTouch = styled(motion.h1)`
    color: #fff;
    font-size: 4em;
    margin-bottom: 3%;
    // 2560 x 1440
    @media (min-width: 2560px) and (min-height: 1440px) {
        font-size: 5em;
    }
    // GALAXY S5
    @media (max-width: 360px) and (max-height: 640px) {
        font-size: 3em;
    }
`;

export const GetInTouchLink = styled(motion.a)`
    color: #58E1C4;
    font-size: 2em;
    border: 2px solid #58E1C4;
    border-radius: 10px;
    margin-bottom: 10%;
    padding: 2%;
    text-decoration: none;
    transition: all ease-in-out 0.4s;
    :hover {
        color: #112240;
        background-color: #58E1C4;
    }
    // 2560 x 1440
    @media (min-width: 2560px) and (min-height: 1440px) {
        font-size: 3em;
    }
`;

export const ContactImgBox = styled(motion.div)`
    width: 50%;
    height: 90%;
    margin: auto 2% auto 3%;

    // IPAD
    @media (max-width: 768px) and (max-height: 1024px) {
        display: none;
    }

    // SUFACE DUO
    @media (max-width: 540px) and (max-height: 720px) {
    }
`;
export const ContactImagePointing = styled(motion.div)`
    width: 100%;
    height: 100%;
    border-radius: 50px;
    background-image: url(${notPointing});
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: -50px;
    transition: all ease-in-out 0.3s;

    // 2560 x 1440
    @media (min-width: 2560px) and (min-height: 1440px) {
        background-position-x: -150px;
    }
    
    // IPAD
    @media (max-width: 768px) and (max-height: 1024px) {
        width: 100%;
        height: 100%;
    }
`;

export const GetInTouchSection = styled(motion.div)`
    width: 40%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    // IPAD
    @media (max-width: 768px) and (max-height: 1024px) {
        width: 100%;
        height: 100%;
    }

    // SUFACE DUO
    @media (max-width: 540px) and (max-height: 720px) {
        width: 90%;
    }

    // GALAXY S5
    @media (max-width: 360px) and (max-height: 640px) {
        width: 100%;
        text-align: center;
    }

`;

export const GoBack = styled(motion.a)`
    text-decoration: none;
    color: #A3ADCC;
    // 2560 x 1440
    @media (min-width: 2560px) and (min-height: 1440px) {
        font-size: 2em;
    }
`;