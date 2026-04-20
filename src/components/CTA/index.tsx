import React from "react";
import styled from "styled-components";
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
          <Text dangerouslySetInnerHTML={{ __html: text }}></Text>
          <CTAButton href="mailto:ines.imaginethefuture@gmail.com">
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
  padding: 2rem 0.8rem;

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) =>
    $visible ? "translateY(0px)" : "translateY(40px)"};

  transition:
    opacity 0.9s ease-out,
    transform 0.9s ease-out;

  @media (min-width: 768px) {
    padding: 5rem;
    magin-top: 5rem;
  }
`;

const Content = styled.div`
  text-align: center;
`;

const Title = styled.h2`
  font-family: "Tiempos", serif;
  font-size: 16px;
  color: #b08a4f;
  margin-bottom: 15px;

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
    font-size: 0.9rem;
    line-height: 24px;
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

const CTAButton = styled.a`
  color: #000;
  border: none;
  background-color: transparent;
  font-size: 0.7rem;
  font-family: "Tiempos", serif;
  letter-spacing: 0.8px;
  cursor: pointer;
  transition: color 0.3s ease;
  border-radius: 2px;
  display: inline-block;
  text-decoration: none;
  margin-top: 1.5rem;

  @media (min-width: 768px) {
    padding: 12px 24px;
    font-size: 1rem;
    letter-spacing: 1.5px;
  }
`;

const Text = styled.p`
  font-family: "Tiempos", serif;
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  margin-top: 1.5rem;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.4;
    margin-top: 6rem;
  }
`;

const Subheading = styled.h2`
  font-family: "Tiempos", serif;
  font-size: 1rem;
  text-align: center;
  font-weight: bold;
  color: #000;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;
const Line = styled.div`
  width: 70px;
  height: 2px;
  margin: 0.8rem auto;
  background-color: #b7b7b7;
  margin-bottom: 0.8rem;
  margin-top: 1.5rem;
`;
