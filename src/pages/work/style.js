import styled from "styled-components";
import { motion } from 'framer-motion';

export const WorkPage = styled.div`
    display: flex;
    align-items: center;
    width: 180vw;
    height: 100vh;

    // IPAD
    @media (max-width: 768px) and (max-height: 1024px) {
        width: 570vw;
    }
    @media (max-width: 360px) and (max-height: 640px) {
        width: 740vw;
    }
`;

export const ProjectBox = styled.div`
    height: 100vh;
    width: 100%;
    background-color: #112240;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const OtherProjectTitle = styled(motion.p)`
    color: #fff;
    font-size: 3em;
    font-weight: 700;
    margin-bottom: 2%;
    // 2560 x 1440
    @media (min-width: 2560px) and (min-height: 1440px) {
        font-size: 4em;
    }
`;

export const ArchiveGit = styled(motion.p)`
    color: #58E1C4;
    font-size: 2em;
    margin-bottom: 2%;
    // 2560 x 1440
    @media (min-width: 2560px) and (min-height: 1440px) {
        font-size: 4em;
    }
`;

export const Repository = styled(motion.a)`
    color: #A3ADCC;
    font-size: 3em;
    transition: all ease-in-out 0.4s;
    :hover {
        color: #58E1C4;
    }
    // 2560 x 1440
    @media (min-width: 2560px) and (min-height: 1440px) {
        font-size: 4em;
    }
`;