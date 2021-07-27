import styled from "styled-components";
import { motion } from 'framer-motion';

export const ExperiencePage = styled(motion.div)`
height: 100vh;
width: 50vw;
display: flex;
align-items: center;
justify-content: center;

// IPAD
@media (max-width: 768px) and (max-height: 1024px) {
    width: 140vw;
}

// SUFRACE DUO    
@media (max-width: 540px) and (max-height: 720px) {
    /* width: 100%; */
}
`;

export const ExperienceContainer = styled.div`
background-color: #112240;
padding: 9.5% 5% 5% 5%;
width: 80%;
height: 100%;
`;

export const AlkemyCard = styled.div`
width: 90%;
margin: auto;
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 8%;
margin-bottom: 10%;
`;

export const AlkemyInfoBox = styled(motion.div)`
width: 50%;
text-align: end;
`;

export const AlkemyCardTitle = styled.h3`
color: #fff;
font-size: 1.5em;
margin-bottom: 5%;
// 2560 x 1440
@media (min-width: 2560px) and (min-height: 1440px) {
    font-size: 2.5em;
}
// GALAXY S5
@media (max-width: 360px) and (max-height: 640px) {
    font-size: 1em;
}
`;

export const Business = styled.span`
    color: #58E1C4;
`;

export const AlkemyCardDescription = styled.p`
    color: #A3ADCC;
    font-size: 1em;
    margin-bottom: 5%;
    line-height: 20px;
    // 2560 x 1440
    @media (min-width: 2560px) and (min-height: 1440px) {
        font-size: 2em;
        line-height: 40px;
    }
    // GALAXY S5
    @media (max-width: 360px) and (max-height: 640px) {
        display: none;
    }
`;

export const AlkemyLink = styled.a`
color: #A3ADCC;
font-size: 2em;
transition: all ease-in-out 0.4s;
:hover {
    color: #58E1C4;
}
    // 2560 x 1440
    @media (min-width: 2560px) and (min-height: 1440px) {
        font-size: 3em;
    }
`;

export const AlkemyImgBox = styled(motion.div)`
border: 2px solid #58E1C4;
width: 40%;
height: 40%;
`;

export const AlkemyImg = styled(motion.img)`
width: 100%;
position: relative;
transform: translateX(-10px) translateY(-10px);
`;

export const LineBreaker = styled.hr`
margin: auto;
width: 50%;
margin-bottom: 10%;
// GALAXY S5
@media (max-width: 360px) and (max-height: 640px) {
    margin: 20% auto;
}
`;

export const Joke = styled.div`
width: 90%;
margin: auto;
display: flex;
align-items: center;
justify-content: space-around;
// GALAXY S5
@media (max-width: 360px) and (max-height: 640px) {
    align-items: flex-end;
}
`;

export const Vignette = styled(motion.div)`
width: 45%;
display: flex;
flex-direction: column;
justify-content: center;
`;

export const TextJoke = styled.p`
    color: ${(props => !props.colorJoke ? '#fff' : '#58E1C4')};
    font-weight: ${(props => !props.weightJoke ? '300' : '700')};
    text-align: center;
    margin-bottom: ${(props => !props.marginJoke ? '8%' : '15%')};;
    // 2560 x 1440
    @media (min-width: 2560px) and (min-height: 1440px) {
        font-size: 2em;
    }
`;

export const ImgJokeBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

export const ImgJoke = styled.img`
width: 100%;
`;
