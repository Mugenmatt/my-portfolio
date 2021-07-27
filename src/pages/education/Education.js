import React, {useEffect} from 'react';
import {
    EducationPage,
    TitleCardsContainer,
    CardsContainer
} from './style'
import EducationCard from '../../components/educationCard/EducationCard';
import PageTitle from '../../components/pageTitle/PageTitle';
import acamica from '../../assets/img/educationImg/acamica.svg';
import dh from '../../assets/img/educationImg/dh.svg';
import comIt from '../../assets/img/educationImg/comIt.svg';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Education = () => {
    
    const {ref, inView} = useInView();
    const educationAnimation = useAnimation();
    const cardAnimation1 = useAnimation();
    const cardAnimation2 = useAnimation();

    useEffect(() => {

        if(inView) {
            educationAnimation.start({
                opacity: [0, 1],
                y: [200, 1],
                transition: {
                    type: 'spring', duration: 2, bounce: 0.3
                }
            })
            cardAnimation1.start({
                opacity: [0, 1],
                x: [100, 1],
                transition: {
                    type: 'spring', delay: 1, duration: 5, bounce: 0.3
                }
            })
            cardAnimation2.start({
                opacity: [0, 1],
                x: [-100, 1],
                transition: {
                    type: 'spring', delay: 1, duration: 5, bounce: 0.3
                }
            })
        } 

    }, [inView, educationAnimation, cardAnimation1, cardAnimation2])

    return (
        <EducationPage id='education' animate={educationAnimation} ref={ref} >

            <TitleCardsContainer>

                <PageTitle number='02.' text='Education' lineWidth='60%' />

                <CardsContainer>

                    <motion.div animate={cardAnimation2}>
                        <EducationCard 
                            imgFirst={false} 
                            title='@Acamica' 
                            description='Advanced Front-End with React' 
                            year='July - December 2020' 
                            img={acamica} 
                            altText='Acamica' 
                            link='https://www.acamica.com/'
                        />
                    </motion.div>

                    <motion.div animate={cardAnimation1}>
                        <EducationCard 
                            imgFirst={true} 
                            title='@Digital-House' 
                            description='Full Stack Development Node' 
                            year='February - July 2020' 
                            img={dh} 
                            altText='Digital House' 
                            link='https://www.digitalhouse.com/'
                        />
                    </motion.div>

                    <motion.div animate={cardAnimation2}>
                        <EducationCard 
                            imgFirst={false} 
                            title='@Comunidad-IT' 
                            description='Full Stack Development PHP' 
                            year='February - July 2019' 
                            img={comIt} 
                            altText='Comunidad-IT' 
                            link='https://www.comunidadit.org/'
                        />
                    </motion.div>

                </CardsContainer>

            </TitleCardsContainer>

        </EducationPage>
    );
};

export default Education;