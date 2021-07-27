import React, {useEffect} from 'react';
import {
    AboutPage,
    ContainerChild,
    AboutDescription,
    Elipse,
    MyAcronym
} from './style'
import PageTitle from '../../components/pageTitle/PageTitle';
import ListTechSkills from '../../components/listTechSkills/ListTechSkills';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {

    const {ref, inView} = useInView();
    const aboutAnimation = useAnimation();
    const elipseAnimation = useAnimation();
    const descriptionAnimation = useAnimation();
    const textElipseAnimation = useAnimation();

    useEffect(() => {
        console.log(inView, 'ABOUT');

        // FULL ABOUT PAGE
        if(inView) {
            aboutAnimation.start({
                y: 0,
                transition: {
                    type: 'spring', duration: 5, bounce: 0.3, when: 'beforeChildren'
                }
            })
                
            // DESCRIPTION
            descriptionAnimation.start({
                y: [100, 1],
                opacity: [0, 1],
                transition: {duration: 2, delay: 1}
            })

            // ELIPSE
            elipseAnimation.start({
                opacity: [0, 1],
                scale: [1.8, 1],
                color: ['#fff', '#A3ADCC'],
                boxShadow: '-19px 3px 6px rgba(0, 0, 0, 0.25)',
                transition: {delay: 0.5, duration: 1}
            })

            // TEXT ELIPSE
            textElipseAnimation.start({
                color: ['#fff', '#A3ADCC'],
                transition: {delay: 0.5, duration: 3}
            })

            } else {
                aboutAnimation.start({
                    y: '-100vh',
                })
            }


    }, [
        inView,
        aboutAnimation,
        elipseAnimation,
        descriptionAnimation,
        textElipseAnimation
        ]
    )

    return (
        <AboutPage id='about' ref={ref} animate={aboutAnimation}>
            
            <ContainerChild>

                <PageTitle 
                    number='01.' 
                    text='About Me' 
                    lineWidth='60%' 
                />

                <AboutDescription
                    animate={descriptionAnimation}
                >
                    Im an argentinian front-end dev who likes to code things from scratch, and enjoy bringing ideas to life in the browser.
                </AboutDescription>

                <ListTechSkills />

            </ContainerChild>

            <Elipse animate={elipseAnimation} >
                <MyAcronym animate={textElipseAnimation}>MG</MyAcronym>
            </Elipse>

        </AboutPage>
    );
};

export default About;