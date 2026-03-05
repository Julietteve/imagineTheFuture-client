import styled from "styled-components";
import { NavLink as LinkIcon } from "react-router-dom";

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
export const MainLogoCircle = styled(LinkIcon)`
  width: 60px;
  height: 60px;
  background-color: #fff;
  color: #062e64;
  border: #062e64 1px solid;
  border-radius: 1000px;
  justify-content: center;
  align-items: center;
  display: flex;
  text-decoration: none;
  font-size: 1.2rem;
  span {
    text-align: center;

    font-family: "Tiempos", serif;
  }

  &.active {
    background-color: #062e64;
    color: #fff;
  }
`;
export const If = styled.span``;

export const NavIcon = styled(LinkIcon)`
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
  color: #062e64;
  padding-left: 15px;
  padding-right: 15px;
  transition: all 0.2s ease-in-out;
  position: relative;
  letter-spacing: 3px;
  &.active {
    color: #062e64;
    :after {
      content: "";
      height: 8px;
      width: 8px;
      background-color: #062e64;
      border-radius: 50%;
      display: inline-block;
      position: absolute;
      bottom: -15px;
      left: 45%;
    }
  }
  :hover {
    color: #414141;
  }
`;
