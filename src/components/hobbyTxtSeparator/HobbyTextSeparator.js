import React, {useEffect} from 'react';
import {
    HobbyContainer,
    TextBox,
    ColoredNumber,
    TextWork,
    styleArrow
} from './style'
import { BsArrowRightShort } from 'react-icons/bs';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HobbyTextSeparator = () => {

    const {ref, inView} = useInView()
    const globalTextAnimation = useAnimation();


    useEffect(() => {

        globalTextAnimation.start( i => ({
            opacity: [0, 1],
            x: [-300, 1],
            color: ['#fff', '#58E1C4', '#fff' ],
            transition: {delay: i * 0.3, duration: 4}
        }))

    }, [inView, globalTextAnimation])

    return (
        <HobbyContainer ref={ref}>

            <TextBox>
                <motion.div animate={globalTextAnimation} custom={1} >
                    <ColoredNumber  >04.</ColoredNumber>
                </motion.div>
                <TextWork animate={globalTextAnimation} custom={2}>Some</TextWork>
                <TextWork animate={globalTextAnimation} custom={3}>Things</TextWork>
                <TextWork animate={globalTextAnimation} custom={4}>I've</TextWork>
                <TextWork animate={globalTextAnimation} custom={5}>Built</TextWork>
                <motion.div animate={globalTextAnimation} custom={7} >
                    <BsArrowRightShort style={styleArrow} />
                </motion.div>
            </TextBox>
            
        </HobbyContainer>
    );
};

export default HobbyTextSeparator;