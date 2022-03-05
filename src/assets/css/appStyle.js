import styled from "styled-components";

export const FullApp = styled.div`
  height: 177.8%;
  width: 56.2%;
  transform: rotate(-90deg) translateX(-100vh);
  transform-origin: top left;
  overflow-y: scroll;
  overflow-x: hidden;
  position: absolute;

  // NOTEBOOK
  @media (max-width: 1280px) and (max-height: 720px) {
    height: 177%;
    width: 100%;
  }  
  // GALAXY S5
  @media (max-width: 640px) and (max-height: 480px) {
    height: 133%;
  }
`;