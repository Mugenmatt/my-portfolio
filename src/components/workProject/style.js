import styled from "styled-components";
import { motion } from 'framer-motion';

export const ProjectContainer = styled.div`
    height: 100vh;
    width: 100%;
    background-color: ${(props => props.backColor ? '#0A192F' : '#112240')};
    display: flex;
    flex-direction: column;
    text-align: center;
`;

export const PaddingContent = styled.div`
    margin: 0 5%;
`;

export const ImgBox = styled(motion.div)`
    width: 60%;
    border-radius: 20px;
    margin: 0 auto 0 auto;
    margin-bottom: 5%;
    margin-top: 20%;
    z-index: 100;
`;

export const ProjectImg = styled.img`
    width: 100%;
    border-radius: 20px;
    z-index: 100;
`;

export const ProjectTitle = styled(motion.div)`
    font-size: 2em;
    font-weight: 300;
    color: #fff;
    margin-bottom: 5%;
    z-index: 50;
    // 2560 x 1440
    @media (min-width: 2560px) and (min-height: 1440px) {
        font-size: 3em;
    }
`;

export const ProjectDescription = styled(motion.div)`
    font-weight: 700;
    font-size: 1.5em;
    color: #A3ADCC;
    margin-bottom: 10%;
    z-index: 50;
    // 2560 x 1440
    @media (min-width: 2560px) and (min-height: 1440px) {
        font-size: 2.5em;
    }
    // SUFACE DUO
    @media (max-width: 540px) and (max-height: 720px) {
        font-size: 1em;
    }
`;

export const LinkBox = styled(motion.div)`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 50;
`;

export const LinksAnchor = styled.a`
    color:#58E1C4;
    font-size:3em;
    margin-left: 0.7em;
    transition: all 0.5s ease-in-out;
    :hover {
        color: #fff;
    }
    // 2560 x 1440
    @media (min-width: 2560px) and (min-height: 1440px) {
        font-size: 4em;
    }
`;