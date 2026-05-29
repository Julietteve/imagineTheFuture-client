import React from "react";
import styled from "styled-components";
import { useInView } from "../../hooks/useInView";

interface CTAProps {
  text: string;
  showButton?: boolean;
}

const CTA: React.FC<CTAProps> = ({ text, showButton = true }) => {
  const { ref, isVisible } = useInView<HTMLElement>(0.2);

  return (
    <>
      <Container ref={ref} $visible={isVisible}>
        <Content>
          {showButton && (
            <Text dangerouslySetInnerHTML={{ __html: text }}></Text>
          )}

          <CTAButton href="mailto:ines.imaginethefuture@gmail.com">
            Start a conversation{" "}
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
  justify-content: flex-start;
  align-items: center;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) =>
    $visible ? "translateY(0px)" : "translateY(40px)"};

  transition:
    opacity 0.9s ease-out,
    transform 0.9s ease-out;

  @media (min-width: 768px) {
    margin-top: 5rem;
  }
`;

const Content = styled.div`
  text-align: left;
  margin-left: 10%;
  @media (min-width: 768px) {
    text-align: left;
    margin-left: 0%;
  }
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
  font-size: 0.9rem;
  font-family: "Inter", serif;
  cursor: pointer;
  transition: color 0.3s ease;
  border-radius: 2px;
  display: inline-block;
  text-decoration: none;
  margin-top: 1rem;
  font-weight: 600;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

const Text = styled.p`
  font-family: "Inter", serif;
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  margin-top: 1rem;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.4;
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
