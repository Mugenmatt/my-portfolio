import React, {useEffect} from 'react';
import {
    WorkPage,
    ProjectBox,
    OtherProjectTitle,
    ArchiveGit,
    Repository
} from './style'
import WorkProject from '../../components/WorkProject/WorkProject';
import alkemyChallenge from '../../assets/img/projects/alkemyChallenge.svg';
import rewardStore from '../../assets/img/projects/rewardStore.svg';
import hotelProject from '../../assets/img/projects/hotelProject.svg';
import gameProject from '../../assets/img/projects/gameProject.svg';
import arteLibre from '../../assets/img/projects/arteLibre.svg';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Work = () => {

    const {ref, inView} = useInView();
    const textAnimation = useAnimation();
    const linkAnimation = useAnimation();

    useEffect(() => {
        
        textAnimation.start(i => ({
            y: [-150, 1],
            opacity: [0, 1],
            transition: {delay: i * 0.3, duration: 3}
        }))
        
        linkAnimation.start({
            opacity: [0, 1],
            transition: {delay: 1.5, duration: 3}
        })

    }, [inView, textAnimation, linkAnimation])

    return (
        <WorkPage id='work'>
            
                <WorkProject
                    backColor                
                    img={arteLibre}
                    linkGit='https://github.com/Mugenmatt/grupo_4_artelibre'
                    altText='Project made for Digital House called Arte Libre'
                    title='Arte Libre'
                    description='It is a complete full stack website.
                    It is made for art sellers who need
                    a place to do it during quarantine.
                    Here you can find paintings and
                    handicrafts!'
                />
            
                <WorkProject
                    img={alkemyChallenge}
                    linkGit='https://github.com/Mugenmatt/alkemy-challenge'
                    linkWeb='https://alkemy-challenge-one.vercel.app/login'
                    altText='Project made for Alkemy called Alkemy Challenge'
                    title='Alkemy Challenge'
                    description='It´s a website where you can
                    make a team of superheroes
                    and supervillains! You can
                    check their biographies,
                    powerstats and more!'
                    deploy
                />
                        
                <WorkProject
                    backColor                
                    img={rewardStore}
                    linkGit='https://github.com/Mugenmatt/reward-store-acamica-matias-godoy'
                    linkWeb='https://reward-store-acamica-matias-godoy.vercel.app/'
                    altText='Project made for Acamica called Reward Store'
                    title='Reward Store'
                    description='It´s the Front-End of an 
                    E-commerce that redeem 
                    products for coins!'
                    deploy
                />
            
                <WorkProject
                    img={hotelProject}
                    linkGit='https://github.com/Mugenmatt/acamica_proyecto_hoteles'
                    altText='Project made for Acamica called Hotel Project'
                    title='Hotel Project'
                    description='It is a website where you can
                    book a hotel according to
                    certain filters like date,
                    country, price and hotel size.'
                />
            
                <WorkProject
                    backColor                
                    img={gameProject}
                    linkGit='https://github.com/Mugenmatt/games'
                    altText='Project made for fun called Game Project'
                    title='Game Project'
                    description='I just wanted to practice my
                    javascript skills making a clock 
                    and some games like: 
                    “Tic-Tac-Toe”,
                    “Play this Drum Kit” and
                    “Whack-A-Mole”.'
                />
            
            <ProjectBox ref={ref}>
                <OtherProjectTitle animate={textAnimation} custom={1}>Other Projects</OtherProjectTitle>
                <ArchiveGit animate={textAnimation} custom={2}>View the archive</ArchiveGit>
                <Repository target='_blank' href='https://github.com/Mugenmatt?tab=repositories' animate={linkAnimation} ><BsBoxArrowUpRight/></Repository>
            </ProjectBox>

        </WorkPage>
    );
};

export default Work;