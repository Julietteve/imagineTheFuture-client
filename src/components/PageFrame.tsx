import styled from "styled-components";

export const PageFrame = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  overflow-x: hidden;

  &::before,
  &::after {
    content: "";
    position: fixed;
    top: 0;
    width: 18vw;
    min-width: 120px;
    max-width: 100vw;
    height: 100vh;
    background: #ffffff;
    z-index: 9999;
    pointer-events: none;
    transition: width 0.2s;
  }

  &::before {
    left: 0;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
  }

  &::after {
    right: 0;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
  }

  > * {
    position: relative;
    z-index: 1;
    margin-left: 18vw;
    margin-right: 18vw;
    min-width: 0;
    max-width: 64vw;
    width: 100%;
    box-sizing: border-box;
  }
`;
