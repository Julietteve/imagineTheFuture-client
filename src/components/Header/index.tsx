import React, { useState } from "react";
import { MainContainer, MainLogoCircle, If, NavIcon } from "./styles";
import SideBarMobile from "../SideBarMobile";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        paddingTop: "1.5rem",
      }}
    >
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
      <SideBarMobile isOpen={isOpen} toggle={toggle} />
    </div>
  );
};

export default Header;
