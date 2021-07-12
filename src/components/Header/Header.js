import React from 'react';
import styled from 'styled-components';

const PositionBox = styled.div`
    width: 100%;
    margin-top: 2%;
    padding: 10%;
`;

const HeaderContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const MenuList = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const MenuItem = styled.li`
    color: #fff;
    font-size: 1em;
    margin-right: 0.5em;
    border-bottom: 1px solid transparent;
    list-style: none;
    transition: all ease-in-out 0.4s;
    :hover {
        border-bottom: 1px solid #fff;
    }
    :focus {
        border-bottom: 1px solid #fff;
    }
`;

const ItemNumber = styled.span`
    color: #58E1C4;
    font-size: 1em;
    margin-right: 5px;
`;

const ResumeAnchor = styled.a`
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
    :focus {
        background-color: #58E1C4;
        color: #0A192F;
    }
`;

const Header = () => {
    return (
        <PositionBox>
            
            <HeaderContainer>

                <MenuList>

                    <MenuItem><ItemNumber>01.</ItemNumber>About</MenuItem>
                    <MenuItem><ItemNumber>02.</ItemNumber>Education</MenuItem>
                    <MenuItem><ItemNumber>03.</ItemNumber>Experience</MenuItem>
                    <MenuItem><ItemNumber>04.</ItemNumber>Work</MenuItem>
                    <MenuItem><ItemNumber>05.</ItemNumber>Contact</MenuItem>

                </MenuList>

                <ResumeAnchor href='#'> Resume </ResumeAnchor>

            </HeaderContainer>

        </PositionBox>
    );
};

export default Header;