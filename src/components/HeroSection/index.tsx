import React, { useRef } from "react";
import styled from "styled-components";
import { useInView } from "../../hooks/useInView";

const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { ref, isVisible } = useInView<HTMLElement>(0.2);

  return (
    <Container ref={ref as any} $visible={isVisible}>
      <Content>
        <Title>Imagine the Future.</Title>

        <NameRoleGroup>
          <Name>M. Ines Fernandez</Name>
          <Role>Advisor to Leaders - Career & Leadership Coach</Role>
        </NameRoleGroup>
        <SubheadingGroup>
          <Subheading>Translating complexity into clarity.</Subheading>
          <Description>
            I work with professionals, leaders, and organizations to clarify
            direction,
            <br /> strengthen judgment, and move forward with purpose and
            impact.
          </Description>
        </SubheadingGroup>

        <Description>
          I partner across career stages and transitions — from rising talent to
          the C-suite.
        </Description>
      </Content>
    </Container>
  );
};

export default HeroSection;

/* ================= STYLES ================= */

const Container = styled.section<{ $visible: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 60px 32px;
  position: relative;

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) =>
    $visible ? "translateY(0px)" : "translateY(40px)"};

  transition:
    opacity 0.8s ease-out,
    transform 0.8s ease-out;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 70%;
    height: 1px;
    background-color: #e0e0e0;
  }
`;

const Subheading = styled.h3`
  font-family: "Tiempos", sans-serif;
  font-size: 1.3rem;
  color: #062e64;
  margin-bottom: 0;
  font-weight: light;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Content = styled.div`
  max-width: 900px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 1024px) {
    max-width: 1200px;
    gap: 2rem;
  }
`;

const SubheadingGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const NameRoleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Title = styled.h1`
  font-family: "Tiempos", sans-serif;
  font-size: 3rem;
  line-height: 48px;
  color: #2c2c2c;
  margin-bottom: 0;

  @media (min-width: 768px) {
    font-size: 5.5rem;
    line-height: 64px;
  }
`;

const Name = styled.h2`
  font-family: "Tiempos", sans-serif;
  font-size: 2rem;
  line-height: 32px;
  color: #b08a4f;
  margin-top: 2rem;
  font-weight: 500;

  @media (min-width: 768px) {
    font-size: 3rem;
    line-height: 40px;
  }
`;

const Role = styled.p`
  font-size: 18px;
  line-height: 28px;
  color: #0b0a0a;
  margin-bottom: 0;
  font-family: "Tiempos", sans-serif;

  @media (min-width: 768px) {
    font-size: 22px;
    line-height: 34px;
  }
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 30px;
  color: #0b0a0a;
  margin-bottom: 0;
  font-family: "Inter", sans-serif;

  @media (min-width: 768px) {
    font-size: 22px;
    line-height: 36px;
  }
`;

const Divider = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 1px;
  background-color: #e0e0e0;
  margin: 40px 60px 0 60px;

  @media (min-width: 768px) {
    margin: 60px 80px 0 80px;
  }
`;
