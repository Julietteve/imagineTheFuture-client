import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useInView } from "../../hooks/useInView";

const DecadeSection: React.FC = () => {
  const { ref, isVisible } = useInView<HTMLElement>(0.2);

  return (
    <Container ref={ref} $visible={isVisible}>
      <Content>
        <Description>
          A decade of independent practice, building on a long career supporting
          leaders, organizations, and transformation across sectors and
          geographies.
        </Description>

        <Quote>" The future is not predicted. It is designed. "</Quote>

        <CTAButton to="/contact">Start a conversation</CTAButton>
      </Content>
    </Container>
  );
};

export default DecadeSection;

const Container = styled.section<{ $visible: boolean }>`
  background-color: #f5fbff;

  padding: 80px 32px;
  display: flex;
  justify-content: center;

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) =>
    $visible ? "translateY(0px)" : "translateY(40px)"};

  transition:
    opacity 0.9s ease-out,
    transform 0.9s ease-out;
`;

const Content = styled.div`
  max-width: 800px;
  text-align: center;
`;

const Title = styled.h2`
  font-family: "Tiempos", serif;
  font-size: 22px;
  color: #b08a4f;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 24px;
  color: #4a4a4a;
  font-family: "Inter", serif;
  letter-spacing: 0.8px;

  @media (min-width: 768px) {
    font-size: 1.1rem;
    line-height: 28px;
  }
`;

const Quote = styled.h3`
  font-family: "Tiempos", serif;
  font-size: 1.5rem;
  color: #2c2c2c;
  margin: 40px 0 10px 0;
  font-weight: 400;
  @media (min-width: 768px) {
    font-size: 1.8rem;
    margin: 50px 0 15px 0;
  }
`;

const CTAButton = styled(Link)`
  color: #2c2c2c;
  border: none;
  background-color: transparent;
  font-size: 1.1rem;
  font-family: "Tiempos", sans-serif;
  letter-spacing: 1.2px;
  cursor: pointer;
  transition: color 0.3s ease;
  border-radius: 2px;
  font-style: italic;
  text-decoration: underline;
  display: inline-block;
  letter-spacing: 2px;

  &:hover {
    color: #4a4a4a;
  }

  @media (min-width: 768px) {
    padding: 18px 36px;
    font-size: 16px;
  }
`;
