import React, {useEffect} from 'react';
import {
    PresentationPage,
    MenuNameBox,
    VerticalCenterNameJob,
    NameJobBox,
    Hi,
    MyName,
    MyJob,
    FaceBox,
    ColorImg,
    MyFace
} from './style'
import Header from '../../components/Header/Header'
import SeparatorText from '../../components/separatorText/SeparatorText';
import {
    hiVariants,
    nameVariants,
    jobVariants,
    faceBoxVariants
} from './animation'
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import yo from '../../assets/img/me/yo.jpg'

const Presentation = () => {

    const {ref, inView} = useInView();
    const animation = useAnimation();

    useEffect(() => {
        console.log(inView, 'PRESENTATION');

        if(inView) {
            animation.start({
                y: 0,
                transition: {
                    type: 'spring', duration: 5, bounce: 0.3
                }
            })
        } else {
            animation.start({
                y: '-100vh'
            })
        }

    }, [inView])

    return (
        <PresentationPage id='presentation' ref={ref} animate={animation}>
            
            <MenuNameBox>
                
                <Header />
                
                <VerticalCenterNameJob>

                    <NameJobBox>
                        <Hi
                            variants={hiVariants}
                            initial='start'
                            animate='end'
                        >Hi, my name is</Hi>
                        <MyName
                            variants={nameVariants}
                            initial='start'
                            animate='end'
                        >Matías Godoy.</MyName>
                        <MyJob
                             variants={jobVariants}
                             initial='start'
                             animate='end'
                        >Front-End Developer.</MyJob>
                    </NameJobBox>

                </VerticalCenterNameJob>

            </MenuNameBox>

            <SeparatorText/>

            <FaceBox
                variants={faceBoxVariants}
                initial='start'
                animate='end'
            >
                <MyFace imgUrl={yo}>
                    <ColorImg />
                </MyFace>
            </FaceBox>

        </PresentationPage>
    );
};

export default Presentation;