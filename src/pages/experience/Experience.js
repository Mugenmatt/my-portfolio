import React, {useEffect} from 'react';
import {
    ExperiencePage,
    ExperienceContainer,
    AlkemyCard,
    AlkemyInfoBox,
    AlkemyCardTitle,
    AlkemyCardDescription,
    Business,
    AlkemyLink,
    AlkemyImgBox,
    AlkemyImg,
    LineBreaker,
} from './style'
import PageTitle from '../../components/pageTitle/PageTitle';
import alkemy from '../../assets/img/educationImg/alkemy.svg'
import SH from '../../assets/img/educationImg/SH.svg'
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const Experience = () => {
    
    const {ref, inView} = useInView();
    const experienceAnimation = useAnimation();
    const opacityAnimation = useAnimation();
    const infoAnimation = useAnimation();
    const imgAnimation = useAnimation();
    const jokeAnimation1 = useAnimation();
    const jokeAnimation2 = useAnimation();

    useEffect(() => {

        if(inView) {
            experienceAnimation.start({
                opacity: [0, 1],
                y: [-200, 1],
                transition: {
                    type: 'spring', duration: 2, bounce: 0.3
                }
            })
            opacityAnimation.start({
                opacity: [0, 1],
                transition: {duration: 6}
            })
            infoAnimation.start({
                opacity: [0, 1],
                x: [-50, 1],
                transition: {duration: 5, delay: 1}
            })
            imgAnimation.start({
                opacity: [0, 1],
                x: [1, -10],
                y: [1, -10],
                transition: {duration: 5, delay: 1}
            })
            jokeAnimation1.start({
                opacity: [0, 1],
                y: [-50, 1],
                transition: {delay: 1.5, duration: 5}
            })
            jokeAnimation2.start({
                opacity: [0, 1],
                y: [-50, 1],
                transition: {delay: 2, duration: 5}
            })
        }

    }, [
            inView,experienceAnimation,
            opacityAnimation,
            infoAnimation,
            imgAnimation,
            jokeAnimation1,
            jokeAnimation2
        ]
    )

    return (
        <ExperiencePage id='experience' animate={experienceAnimation} ref={ref}>

            <ExperienceContainer>
            
            <PageTitle number='03.' text='Experience' lineWidth='60%' />

            <AlkemyCard>

                <AlkemyInfoBox animate={infoAnimation}>

                    <AlkemyCardTitle>Front-End Developer in <Business>@Southern-Horizon</Business></AlkemyCardTitle>

                    <AlkemyCardDescription>Work on the layout, logic and integration of projects</AlkemyCardDescription>

                    <AlkemyLink target='_blank' href='https://www.linkedin.com/company/southern-horizon/mycompany/' ><BsBoxArrowUpRight /></AlkemyLink>

                </AlkemyInfoBox>

                <AlkemyImgBox animate={opacityAnimation}>
                    <AlkemyImg src={SH} alt='Southern Horizon' animate={imgAnimation} />
                </AlkemyImgBox>

            </AlkemyCard>

            <motion.div animate={opacityAnimation}>
                <LineBreaker />
            </motion.div>

            <AlkemyCard>

                <AlkemyInfoBox animate={infoAnimation}>

                    <AlkemyCardTitle>Acceleration in <Business>@Alkemy</Business></AlkemyCardTitle>

                    <AlkemyCardDescription>It was a simulation of how
    you would work in real life. I collaborated with a small team of students to create the front-end for a Colombian NGO called "Somos Más".</AlkemyCardDescription>

                    <AlkemyLink target='_blank' href='https://www.linkedin.com/company/alkemy2020/' ><BsBoxArrowUpRight /></AlkemyLink>

                </AlkemyInfoBox>

                <AlkemyImgBox animate={opacityAnimation}>
                    <AlkemyImg src={alkemy} alt='Alkemy' animate={imgAnimation} />
                </AlkemyImgBox>

            </AlkemyCard>

            

            </ExperienceContainer>

        </ExperiencePage>
    );
};

export default Experience;