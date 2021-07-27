import styled from "styled-components";
import { motion } from 'framer-motion';

export const FixedLinksContainer = styled(motion.div)`
    position: fixed;
    left: 0;
    bottom: 80px;
    display: flex;
    align-items: center;
    z-index: 900;
`;
export const LineLinks = styled(motion.hr)`
    width: 4em;
    border: 2px solid #58E1C4;
    @media (min-width: 2560px) and (min-height: 1440px) {
        font-size: 2em;
    }
`;

export const LinksAnchor = styled(motion.a)`
    color:#58E1C4;
    font-size:2em;
    margin-left:0.7em;
    :hover {
        color: #fff;
    }
    @media (min-width: 2560px) and (min-height: 1440px) {
        font-size: 4em;
    }
`;