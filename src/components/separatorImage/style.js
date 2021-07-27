import styled from "styled-components";

export const ImageContainer = styled.div`
    width: 20vw;
    height: 100vh;
    overflow: hidden;
    background-color: #112240;
    // IPAD
    @media (max-width: 768px) and (max-height: 1024px) {
        width: 70vw;
    }
`;

export const BackgroundImage = styled.div`
    height: 100%;
    background-image: ${props => `url(${props.picture})`};
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    transition: all ease 1s;
    :hover {
        mix-blend-mode: normal;
    }
`;

export const ColorOverlay = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    background: linear-gradient(90deg, rgba(10,25,47,1) 0%, rgba(10,25,47,1) 35%, rgba(10,25,47,1) 100%);
    transition: all ease 1s;
    mix-blend-mode: color;
    :hover {
        opacity: 0;
    }
`;