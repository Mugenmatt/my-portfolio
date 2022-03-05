import styled from "styled-components";


export const FullPortfolioContainer = styled.div`
  width: 100vw; // o 620vw con los separadores de 20 cada uno
  display: flex;
  flex-direction: row;
  transform: rotate(90deg) translateY(-100vh);
  transform-origin: top left;

    // 2560 x 1440
    @media (min-width: 2560px) and (min-height: 1440px) {
      width: 614vw;
    }

  // IPAD
  @media (max-width: 768px) and (max-height: 1024px) {
    width: 1465vw;
  }
  // SURFACE DUO
  @media (max-width: 540px) and (max-height: 720px) {
    width: 1465vw;
  }
  // GALAXY S5
  @media (max-width: 360px) and (max-height: 640px) {
    width: 1625vw;
  }
`;

export const FlexContainer = styled.div`
  height: 100vh;
  display: flex;
`;