import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  Container,
  DecadeSection,
  Header,
  HeroSection,
  SocialBar,
  TestimonialSection,
  WorkSection,
} from "../../components";
import Loading from "../../components/Loading";
import SideBar from "../../components/SideBarMobile";
import {
  Consultant,
  Future,
  Image,
  Imagine,
  Ines,
  Text,
  SignBox,
  ArrowBox,
  Arrow,
  Box,
} from "./styles";
import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer";
import CTA from "../../components/CTA";

// Componente para controlar márgenes de toda la página
const PageWrapper = styled.div`
  width: 100%;
  max-width: 100vw;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const Main = () => {
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setLoading(false);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  return (
    <PageWrapper>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <>
          <HeroSection />
          <WorkSection />
          <TestimonialSection />
          <DecadeSection></DecadeSection>
          <CTA text="In moments of transition, direction, or complex decisions."></CTA>
          <Footer showTopDivider={true} />
        </>
      )}
    </PageWrapper>
  );
};

export default Main;
