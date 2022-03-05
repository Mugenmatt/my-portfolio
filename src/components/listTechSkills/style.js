import styled from "styled-components";
import { motion } from 'framer-motion';

export const ListsContainer = styled(motion.div)`
    margin: 0 2%;
`;
export const ListTitle = styled(motion.p)`
    color: #58E1C4;
    font-size: 1.5em;
    margin: 2% 0;
    font-weight: 700;
`;

export const List = styled(motion.ul)``;
export const Item = styled(motion.li)`
    color: #fff;
    font-size: 1.5em;
    list-style: none;
    margin-bottom: 1%;
    display: flex;
    align-items: center;
    @media (min-width: 2560px) and (min-height: 1440px) {
        font-size: 2.5em;
    }
    @media (max-width: 1280px) and (max-height: 720px) {
        font-size: 1.4em;
    }  
    // SUFACE DUO
    @media (max-width: 540px) and (max-height: 720px) {
        font-size: 1.2em;
    }
`;