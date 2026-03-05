import React from "react";
import { MainContainer, MainLogoCircle, If, NavIcon } from "./styles";

const Header = () => {
  return (
    <MainContainer>
      <MainLogoCircle to="/">
        <span>if</span>
      </MainLogoCircle>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <NavIcon to="/about"> About </NavIcon>
        <NavIcon to="/services"> Services </NavIcon>
        <NavIcon to="/blog"> The coach's notebook </NavIcon>
        <NavIcon to="/contact"> Contact </NavIcon>
      </div>
    </MainContainer>
  );
};

export default Header;
