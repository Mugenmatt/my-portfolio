import React, {useEffect} from 'react';
import {
    ListsContainer,
    ListTitle,
    List,
    Item
} from './style'
import {GoTriangleRight} from 'react-icons/go';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ListTechSkills = () => {

    const {ref, inView} = useInView();
    const listOneAnimation = useAnimation()

    useEffect(() => {

        if(inView) {

            listOneAnimation.start(i => ({
                x: [100, 1],
                opacity: [0, 1],
                transition: {delay: i * 0.3, duration: 1.5}
            }))
        }
        
    }, [inView])

    return (
        <ListsContainer ref={ref}>

            <ListTitle >
                My Skill Set
            </ListTitle>

            <List >
                
                <Item animate={listOneAnimation} custom={1}>
                    <GoTriangleRight style={{fontSize: '0.6em', color:'#58E1C4'}} />HTML
                </Item>
                
                <Item animate={listOneAnimation} custom={2}>
                    <GoTriangleRight style={{fontSize: '0.6em', color:'#58E1C4'}} />CSS
                </Item>
                
                <Item animate={listOneAnimation} custom={3}>
                    <GoTriangleRight style={{fontSize: '0.6em', color:'#58E1C4'}} />Javascript
                </Item>
                
                <Item animate={listOneAnimation} custom={4}>
                    <GoTriangleRight style={{fontSize: '0.6em', color:'#58E1C4'}} />React
                </Item>
                
                <Item animate={listOneAnimation} custom={5}>
                    <GoTriangleRight style={{fontSize: '0.6em', color:'#58E1C4'}} />Node
                </Item>
                <Item animate={listOneAnimation} custom={6}>
                    <GoTriangleRight style={{fontSize: '0.6em', color:'#58E1C4'}} />MySQL
                </Item>
            </List>

            <ListTitle>Dev Tools</ListTitle>
            <List>
                <Item animate={listOneAnimation} custom={7}>
                    <GoTriangleRight style={{fontSize: '0.6em', color:'#58E1C4'}} />Visual Studio Code
                </Item>

                <Item animate={listOneAnimation} custom={8}>
                    <GoTriangleRight style={{fontSize: '0.6em', color:'#58E1C4'}} />Github
                </Item>

                <Item animate={listOneAnimation} custom={9}>
                    <GoTriangleRight style={{fontSize: '0.6em', color:'#58E1C4'}} />BitBucket
                </Item>

                <Item animate={listOneAnimation} custom={10}>
                    <GoTriangleRight style={{fontSize: '0.6em', color:'#58E1C4'}} />CodeSandBox
                </Item>

                <Item animate={listOneAnimation} custom={11}>
                    <GoTriangleRight style={{fontSize: '0.6em', color:'#58E1C4'}} />Bootstrap/Chakra-UI
                </Item>

                <Item animate={listOneAnimation} custom={12}>
                    <GoTriangleRight style={{fontSize: '0.6em', color:'#58E1C4'}} />GitBash
                </Item>

                <Item animate={listOneAnimation} custom={13}>
                    <GoTriangleRight style={{fontSize: '0.6em', color:'#58E1C4'}} />Figma
                </Item>

                <Item animate={listOneAnimation} custom={14}>
                    <GoTriangleRight style={{fontSize: '0.6em', color:'#58E1C4'}} />Photoshop
                </Item>

            </List>

        </ListsContainer>
    );
};

export default ListTechSkills;