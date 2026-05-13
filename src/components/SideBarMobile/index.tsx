import React from "react";
import {
  IconLink,
  Container,
  Icon,
  CloseIcon,
  Links,
  Social,
  NavIcon,
} from "./styles";
import {
  FaLinkedinIn,
  FaInstagram,
  FaRegEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import { MobileNav } from "../index";

let text = "Hi Inés, I am interested in booking a call ";

interface IProps {
  toggle(): any;
  isOpen: boolean;
}

const SideBar = ({ toggle, isOpen }: IProps) => {
  return (
    <div>
      <MobileNav toggle={toggle} />
      <Container isOpen={isOpen} onClick={toggle}>
        <Icon>
          <CloseIcon onClick={toggle} />
        </Icon>
        <Links>
          <NavIcon to="/">Home</NavIcon>
          <NavIcon to="/about">About</NavIcon>
          <NavIcon to="/services">Services</NavIcon>
          <NavIcon to="/coach's-Notebook">Coach's Notebook</NavIcon>
          <NavIcon to="/contact">Contact</NavIcon>
        </Links>
      </Container>
    </div>
  );
};

export default SideBar;
