import styled from "styled-components";

export const FullApp = styled.div`
  height: 203vh;
  width: 100vw;
  transform: rotate(-90deg) translateX(-100vh);
  transform-origin: top left;
  overflow-y: scroll;
  overflow-x: hidden;
  position: absolute;

  // LAPTOP
  @media (max-width: 1600px) and (max-height: 900px) {
    height: 177vh;
  }
  // IPAD
  @media (max-width: 768px) and (max-height: 1024px) {
    width: 134vw;
    height: 75vh;
  }
  // GALAXY S5
  @media (max-width: 360px) and (max-height: 640px) {
    height: 56vh;
    width: 180vw;
  }
`;