import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const FixedLinksContainer = styled.div`
    position: fixed;
    left: 0;
    bottom: 100px;
    display: flex;
    align-items: center;
`;
const LineLinks = styled.hr`
    width: 4em;
    border: 2px solid #58E1C4;
`;
const BoxLinks = styled.div``;

const linksStyles = {
    color:"#58E1C4",
    fontSize:'2em',
    marginLeft:'0.7em',
    ':hover': {
        color: '#fff'
    },
    ':focus': {
        color: '#fff'
    }
}

const FixedLinks = () => {
    return (
        <FixedLinksContainer>
            
            <LineLinks />

            <BoxLinks>
                <FaLinkedin style={ linksStyles } />
                <FaGithub style={ linksStyles } />
                <FiMail style={ linksStyles } />
            </BoxLinks>

        </FixedLinksContainer>
    );
};

export default FixedLinks;