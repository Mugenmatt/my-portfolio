import React from 'react';
import {
    FixedLinksContainer,
    LineLinks,
    LinksAnchor
} from './style'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const FixedLinks = () => {
    return (
        <FixedLinksContainer >
            
            <LineLinks 
                transition={{delay:2.5, duration: 1}}
                animate={{transform: ['translateX(-350px)', 'translateX(0px)']}}
            />

            <LinksAnchor 
                target='_blank' 
                href='https://www.linkedin.com/in/matias-godoy/'
                transition={{delay:2.5, duration: 2}}
                animate={{opacity: [0, 0.5, 1], transform: ['translateX(110px) rotate(0)', 'translateX(0px) rotate(-360deg)']}}
                ><FaLinkedin /></LinksAnchor>
            <LinksAnchor 
                target='_blank' 
                href='https://github.com/Mugenmatt'
                transition={{delay:2.5, duration: 2}}
                animate={{opacity: [0, 0.5, 1], transform: ['translateX(230px) rotate(0)', 'translateX(0px) rotate(-360deg)']}}
                ><FaGithub /></LinksAnchor>
            <LinksAnchor 
                target='_blank' 
                rel="noopener noreferrer" 
                href='mailto:matigodoy93@hotmail.com'
                transition={{delay:2.5, duration: 2}}
                animate={{opacity: [0, 0.5, 1], transform: ['translateX(350px) rotate(0)', 'translateX(0px) rotate(-360deg)']}}
                ><FiMail /></LinksAnchor>

        </FixedLinksContainer>
    );
};

export default FixedLinks;