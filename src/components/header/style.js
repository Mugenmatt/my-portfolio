import styled from "styled-components";
import { motion } from 'framer-motion';

export const PositionBox = styled.div`
    width: 100%;
    margin-top: 2%;
    padding: 10%;

// LAPTOP
@media (max-width: 1600px) and (max-height: 900px) {
    padding: 0;
}    
// IPAD
@media (max-width: 768px) and (max-height: 1024px) {
    display: none;
}
`;

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

// LAPTOP
@media (max-width: 1600px) and (max-height: 900px) {
    padding: 5% 5% 10% 5%;
}
`;

export const MenuList = styled(motion.ul)`
display: flex;
justify-content: space-between;
align-items: center;
`;

export const AnchorItem = styled.a`
    color: #fff;
    font-size: 0.9em;
    margin-right: 0.5em;
    border-bottom: 1px solid transparent;
    transition: all ease-in-out 0.4s;
    text-decoration: none;
    :hover {
        border-bottom: 1px solid #fff;
        font-size: 1.4em;
        color: #58E1C4;
        text-shadow: 0 0 100px #58E1C4;
    }
    :active {
        border-bottom: 1px solid #fff;
        font-size: 1.4em;
        color: #58E1C4;
        text-shadow: 0 0 100px #58E1C4,
    }
    @media (min-width: 2560px) and (min-height: 1440px) {
        font-size: 1.2em;
    }
`;

export const MenuItem = styled(motion.li)`
    list-style: none;
`;


export const ItemNumber = styled.span`
    color: #58E1C4;
    font-size: 1em;
    margin-right: 5px;
`;

export const ResumeAnchor = styled(motion.a)`
    padding: 0.7%;
    border: 2px solid #58E1C4;
    border-radius: 4px;
    color: #58E1C4;
    font-weight: 700;
    text-decoration: none;
    transition: all ease-in-out 0.4s;
    :hover {
        background-color: #58E1C4;
        color: #0A192F;
    }
    :active {
        background-color: #58E1C4;
        color: #0A192F;
    }
    @media (min-width: 2560px) and (min-height: 1440px) {
        font-size: 1.5em;
    }
`;
