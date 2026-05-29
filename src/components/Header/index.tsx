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
        paddingTop: "1.5rem",
        paddingBottom: "5rem",
      }}
    >
      <MainContainer>
        <MainLogoCircle to="/">
          <span>if</span>
        </MainLogoCircle>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <NavIcon to="/about"> About </NavIcon>
          <NavIcon to="/services"> Services </NavIcon>
          <NavIcon to="/coach's-Notebook"> Coach's Notebook </NavIcon>
          <NavIcon to="/contact"> Contact </NavIcon>
        </div>
      </MainContainer>
      <SideBarMobile isOpen={isOpen} toggle={toggle} />
    </div>
  );
};

export default Header;
