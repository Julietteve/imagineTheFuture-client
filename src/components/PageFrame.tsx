import styled from "styled-components";

export const PageFrame = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;

  &::before,
  &::after {
    content: "";
    position: fixed;
    top: 0;
    width: 18vw;
    min-width: 120px;
    height: 100vh;
    background: white;
    pointer-events: none;
    z-index: 0;
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }

  @media (max-width: 768px) {
    &::before,
    &::after {
      display: none;
    }
  }
`;
