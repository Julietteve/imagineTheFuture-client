import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  DecadeSection,
  Header,
  HeroSection,
  TestimonialSection,
  WorkSection,
} from "../../components";
import Loading from "../../components/Loading";
import Footer from "../../components/Footer";
import CTA from "../../components/CTA";

// Componente para controlar márgenes de toda la página
const PageWrapper = styled.div``;

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
          <CTA
            showButton={false}
            text="In moments of transition, direction, or complex decisions."
          ></CTA>
        </>
      )}
    </PageWrapper>
  );
};

export default Main;
