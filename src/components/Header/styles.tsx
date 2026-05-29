import styled from "styled-components";
import { NavLink as LinkIcon } from "react-router-dom";

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 1.2rem;
  padding-bottom: 1.2rem;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
export const MainLogoCircle = styled(LinkIcon)`
  width: 70px;
  height: 70px;

  display: flex;
  align-items: center;
  justify-content: center;

  line-height: 1;
  background-color: #fff;
  color: #062e64;
  border: #062e64 1px solid;
  border-radius: 1000px;
  justify-content: center;
  align-items: center;
  display: flex;
  text-decoration: none;
  font-size: 1.4rem;
  span {
    text-align: center;

    font-family: "Tiempos", serif;
  }

  &.active {
    background-color: #062e64;
    color: #fff;
  }
`;
export const If = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
`;

export const NavIcon = styled(LinkIcon)`
  font-family: "Tiempos", sans-serif;
  text-decoration: none;
  font-size: 1.1rem;
  letter-spacing: 1px;
  color: #0b0a0a;
  padding-left: 10px;
  padding-right: 10px;
  transition: all 0.2s ease-in-out;
  position: relative;
  letter-spacing: 1.5px;
  &.active {
    color: #414141;
    :after {
      content: "";
      height: 5px;
      width: 5px;
      background-color: #414141;
      border-radius: 50%;
      display: inline-block;
      position: absolute;
      bottom: -2px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  :hover {
    color: #414141;
  }
`;
