import styled from "styled-components";
import { motion } from 'framer-motion';
import yo from '../../assets/img/me/yo.jpg'

export const PresentationPage = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;

    // IPAD
    @media (max-width: 768px) and (max-height: 1024px) {
        width: 204vw;
    }
`;

export const MenuNameBox = styled(motion.div)`
    background-color: #0A192F;
    height: 100vh;
    width: 45%;
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
    flex-direction: column;
`;

export const VerticalCenterNameJob = styled.div`
    height: 50%;
    display: flex;
    justify-content: center;
    // IPAD
    @media (max-width: 768px) and (max-height: 1024px) {
        height: 85%;
    }
`;

export const NameJobBox = styled.div`
    align-self: center;
`;

export const Hi = styled(motion.p)`
    color: #58E1C4;
    margin-bottom: 1.5em;
    font-weight: 700;
    ::selection {
        color: #fff;
    }
    // 2560px x 1440px
    @media (min-width: 2560px) and (min-height: 1440px) {
        font-size: 2em;
    }
    // GALAXY S5
    @media (max-width: 360px) and (max-height: 640px) {
        font-size: 0.8em;
    }
`;

export const MyName = styled(motion.h3)`
    font-size: 3.5em;
    color: #fff;
    margin-bottom: 0.4em;
    ::selection {
        color: #58E1C4;
    }
    @media (min-width: 2560px) and (min-height: 1440px) {
        font-size: 4.5em;
    }
    @media (max-width: 540px) and (max-height: 720px) {
        font-size: 3em;
    }
    // GALAXY S5
    @media (max-width: 360px) and (max-height: 640px) {
        font-size: 2em;
    }
`;

export const MyJob = styled(motion.h3)`
    font-size: 3em;
    color: #A3ADCC;
    ::selection {
        color: #fff;
    }
    @media (min-width: 2560px) and (min-height: 1440px) {
        font-size: 4em;
    }
    @media (max-width: 540px) and (max-height: 720px) {
        font-size: 2.5em;
    }
    // GALAXY S5
    @media (max-width: 360px) and (max-height: 640px) {
        font-size: 1.5em;
    }
`;

export const FaceBox = styled(motion.div)`
    width: 49%;
    height: 100vh;
    margin: auto 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all ease-in-out 2s;
    position: relative;
`;

export const MyFace = styled(motion.div)`
    width: 90%;
    height: 90%;
    background-image: url(${yo});
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: -100px;
    mix-blend-mode: luminosity;
    position: absolute;
`;

export const ColorImg = styled(motion.div)`
    width: 100%;
    height: 100%;
    position: relative;
    background: linear-gradient(90deg, rgba(88,225,196,.4) 0%, rgba(88,225,196,.4) 35%, rgba(88,225,196,.4) 100%);
    transition: all ease 1s;
    :hover {
        opacity: 0;
    }
`;
