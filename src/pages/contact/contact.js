import React, {useEffect} from 'react';
import {
    ContactPage,
    ContactImgBox,
    ContactImagePointing,
    ContactTitle,
    GetInTouchSection,
    GetInTouch,
    GetInTouchLink,
    GoBack
} from './style'
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import pointing from '../../assets/img/me/pointing.jpg';

const Contact = () => {
    const {ref, inView} = useInView();
    const imgAnimation = useAnimation();
    const textAnimation = useAnimation();
    const goBackAnimation = useAnimation();

    useEffect(() => {

        if(inView) {

            imgAnimation.start({
                opacity: 1,
                clipPath: ['polygon(0 0, 2% 0, 2% 2%, 0 0)', 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'],
                transition: {duration: 5, delay: 0.3}
            })

            textAnimation.start(i => ({
                opacity: [0, 1],
                transition: {delay: i * 0.6, duration: 3}
            }))

            goBackAnimation.start(i => ({
                opacity: [0, 1],
                transition: {delay: i * 0.6, duration: 3}
            }))

        } else {
            imgAnimation.start({
                opacity: 0,
            })
        }

    }, [inView, imgAnimation, textAnimation, goBackAnimation])

    return (
        <ContactPage id='contact'>
            
            <ContactImgBox animate={imgAnimation}>
                <ContactImagePointing whileHover={{backgroundImage:`url(${pointing})`}} />
            </ContactImgBox>

            <GetInTouchSection ref={ref} >

                <ContactTitle animate={textAnimation} custom={2}>05. What´s Next?</ContactTitle>
                <GetInTouch animate={textAnimation} custom={3}>Get In Touch</GetInTouch>
                <GetInTouchLink href='mailto:matigodoy93@hotmail.com' animate={textAnimation} custom={4}>Say Hello</GetInTouchLink>

                
                <GoBack href='#presentation' whileHover={{letterSpacing:'5px', fontWeight: 700, color: '#fff' }} animate={goBackAnimation}>Go Back</GoBack>
            </GetInTouchSection>


        </ContactPage>
    );
};

export default Contact;