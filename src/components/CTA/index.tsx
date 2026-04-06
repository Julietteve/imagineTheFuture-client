import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useInView } from "../../hooks/useInView";

interface CTAProps {
  text: string;
}

const CTA: React.FC<CTAProps> = ({ text }) => {
  const { ref, isVisible } = useInView<HTMLElement>(0.2);

  return (
    <>
      <Container ref={ref} $visible={isVisible}>
        <Content>
          <Subheading>Start a conversation.</Subheading>
          <Line></Line>
          <Text dangerouslySetInnerHTML={{ __html: text }}></Text>
          <CTAButton to="/contact">
            Start a conversation.{" "}
            <text style={{ color: "#b08a4f" }}>→ </text>{" "}
          </CTAButton>
        </Content>
      </Container>
    </>
  );
};

export default CTA;

const Container = styled.section<{ $visible: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10rem;

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) =>
    $visible ? "translateY(0px)" : "translateY(40px)"};

  transition:
    opacity 0.9s ease-out,
    transform 0.9s ease-out;
`;

const Content = styled.div`
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
  color: #000;
  border: none;
  background-color: transparent;
  font-size: 1.1rem;
  font-family: "Tiempos", sans-serif;
  letter-spacing: 1.2px;
  cursor: pointer;
  transition: color 0.3s ease;
  border-radius: 2px;
  display: inline-block;
  letter-spacing: 2px;
  text-decoration: none;
  margin-top: 4rem;

  @media (min-width: 768px) {
    padding: 18px 36px;
    font-size: 1.3rem;
  }
`;

const Text = styled.p`
  font-family: "Tiempos", serif;
  font-size: 22px;
  font-weight: 400;
  line-height: 30px;
  text-align: center;
  margin-top: 3rem;
`;

const Subheading = styled.h2`
  font-family: "Tiempos", serif;
  font-size: 1.5rem;
  text-align: center;
  font-weight: bold;
  color: #000;
`;
const Line = styled.div`
  width: 100px;
  height: 2px;
  margin: 1rem auto;
  background-color: #b7b7b7;
  margin-bottom: 1rem;
  margin-top: 2rem;
`;
