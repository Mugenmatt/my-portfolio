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
    Vignette,
    Joke,
    TextJoke,
    ImgJoke,
    ImgJokeBox
} from './style'
import PageTitle from '../../components/pageTitle/PageTitle';
import alkemy from '../../assets/img/educationImg/alkemy.svg'
import timmy1 from '../../assets/img/jokes/timmy1.svg'
import timmy2 from '../../assets/img/jokes/timmy2.svg'
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
        console.log(inView, 'EXPERIENCE');

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

                    <AlkemyCardTitle>Acceleration in <Business>@Alkemy</Business></AlkemyCardTitle>

                    <AlkemyCardDescription>It was a simulation of how
    you would work in real life. I collaborated with a small team of students to create the front-end for a Colombian NGO called "Somos Más".</AlkemyCardDescription>

                    <AlkemyLink target='_blank' href='https://www.alkemy.org/' ><BsBoxArrowUpRight /></AlkemyLink>

                </AlkemyInfoBox>

                <AlkemyImgBox animate={opacityAnimation}>
                    <AlkemyImg src={alkemy} alt='Alkemy' animate={imgAnimation} />
                </AlkemyImgBox>

            </AlkemyCard>

            <motion.div animate={opacityAnimation}>
                <LineBreaker />
            </motion.div>
            <Joke>
                <Vignette animate={jokeAnimation1}>
                    <TextJoke>And this is where i put my job experience</TextJoke>
                    <ImgJokeBox>
                        <ImgJoke src={timmy1} alt='>And this is where i put my job experience' />
                    </ImgJokeBox>
                </Vignette>

                <Vignette animate={jokeAnimation2}>
                    <TextJoke colorJoke weightJoke marginJoke>IF I HAD ONE!</TextJoke>
                    <ImgJokeBox>
                        <ImgJoke src={timmy2} alt='IF I HAD ONE!' />
                    </ImgJokeBox>
                </Vignette>
            </Joke>

            </ExperienceContainer>

        </ExperiencePage>
    );
};

export default Experience;