import React from 'react';
import {
    PositionBox,
    HeaderContainer,
    MenuList,
    MenuItem,
    AnchorItem,
    ItemNumber,
    ResumeAnchor
} from './style'

const Header = () => {
    return (
        <PositionBox>
            
            <HeaderContainer>

                <MenuList>

                    <MenuItem
                        transition={{delay:0.2, duration: 1}}
                        initial={{transform: 'translateY(-300px)'}}
                        animate={{transform: 'translateY(0px)'}}
                    ><AnchorItem href='#about'><ItemNumber>01.</ItemNumber>About</ AnchorItem></MenuItem>
                    <MenuItem
                        transition={{delay:0.3, duration: 1}}
                        initial={{transform: 'translateY(-300px)'}}
                        animate={{transform: 'translateY(0px)'}}
                    ><AnchorItem href='#education'><ItemNumber>02.</ItemNumber>Education</ AnchorItem></MenuItem>
                    <MenuItem
                        transition={{delay:0.4, duration: 1}}
                        initial={{transform: 'translateY(-300px)'}}
                        animate={{transform: 'translateY(0px)'}}
                    ><AnchorItem href='#experience'><ItemNumber>03.</ItemNumber>Experience</ AnchorItem></MenuItem>
                    <MenuItem
                        transition={{delay:0.5, duration: 1}}
                        initial={{transform: 'translateY(-300px)'}}
                        animate={{transform: 'translateY(0px)'}}
                    ><AnchorItem href='#work'><ItemNumber>04.</ItemNumber>Work</ AnchorItem></MenuItem>
                    <MenuItem
                        transition={{delay:0.6, duration: 1}}
                        initial={{transform: 'translateY(-300px)'}}
                        animate={{transform: 'translateY(0px)'}}
                    ><AnchorItem href='#contact'><ItemNumber>05.</ItemNumber>Contact</ AnchorItem></MenuItem>

                </MenuList>

                <ResumeAnchor
                    target='_blank' 
                    href='https://drive.google.com/file/d/1DdiTg5LP32wsWCfQbXyWZVY6zZ-PjHY0/view?usp=sharing'
                    transition={{type: 'spring', delay:0.7, duration: 2}}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    > Resume </ResumeAnchor>

            </HeaderContainer>

        </PositionBox>
    );
};

export default Header;