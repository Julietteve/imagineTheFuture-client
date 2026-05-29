import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useInView } from "../../hooks/useInView";

const DecadeSection: React.FC = () => {
  const { ref, isVisible } = useInView<HTMLElement>(0.2);

  return (
    <>
      <Container ref={ref} $visible={isVisible}>
        <Content>
          <Text>A decade of independent practice —</Text>
          <Description>
            built on a career partnering with leaders<br></br> and organizations
            through growth, change, <br></br> and transformation.
          </Description>
        </Content>
      </Container>
    </>
  );
};

export default DecadeSection;

const Container = styled.section<{ $visible: boolean }>`
  background-color: #fffdfd;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem;
  padding-top: 5%;
  padding-bottom: 7%;
  margin-bottom: 5%;

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) =>
    $visible ? "translateY(0px)" : "translateY(40px)"};

  transition:
    opacity 0.9s ease-out,
    transform 0.9s ease-out;
`;

const Content = styled.div``;

const Title = styled.h2`
  font-family: "Tiempos", serif;
  font-size: 16px;
  color: #b08a4f;
  margin-bottom: 14px;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Description = styled.p`
  font-size: 12px;
  line-height: 20px;
  color: #4a4a4a;
  font-family: "Inter", serif;
  letter-spacing: 0.6px;

  @media (min-width: 768px) {
    font-size: 1.1rem;
    line-height: 30px;
    text-align: left;
    margin-left: 0%;
  }
`;

const Quote = styled.h3`
  font-family: "Tiempos", serif;
  font-size: 1rem;
  color: #2c2c2c;
  margin: 25px 0 8px 0;
  font-weight: 400;
  @media (min-width: 768px) {
    font-size: 1.2rem;
    margin: 30px 0 10px 0;
  }
`;

const CTAButton = styled(Link)`
  color: #000;
  border: none;
  background-color: transparent;
  font-size: 0.8rem;
  font-family: "Tiempos", sans-serif;
  letter-spacing: 0.9px;
  cursor: pointer;
  transition: color 0.3s ease;
  border-radius: 2px;
  display: inline-block;
  letter-spacing: 1.5px;
  text-decoration: none;

  @media (min-width: 768px) {
    padding: 12px 24px;
    font-size: 1rem;
  }
`;

const Text = styled.p`
  font-family: "Tiempos", serif;
  font-size: 0.9rem;
  font-weight: 700;
  line-height: 34px;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 1.4rem;
  }
`;
