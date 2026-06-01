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
          <Role>Advisor to Leaders | Career & Leadership Coach</Role>
        </NameRoleGroup>

        <Subheading>Bringing clarity to complexity</Subheading>
        <Description>
          I work with professionals, leaders, and organizations navigating
          change, growth, and <br></br>transition — when direction is unclear,
          and decisions matter.
        </Description>

        <Description>
          I partner with clients across career stages — from emerging talent to
          the C-suite.
        </Description>
        <Description>
          Drawing on senior leadership experience across operations, HR, and
          talent acquisition —
        </Description>
        <Description>
          I advise leaders and professionals through change, bringing
          <br></br>both an organizational and individual perspective.
        </Description>
        <Line></Line>
      </Content>
    </Container>
  );
};

export default HeroSection;

/* ================= STYLES ================= */

const Container = styled.section<{ $visible: boolean }>`
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) =>
    $visible ? "translateY(0px)" : "translateY(40px)"};

  transition:
    opacity 0.8s ease-out,
    transform 0.8s ease-out;
`;

const Subheading = styled.h3`
  font-family: "Tiempos", serif;
  font-size: 0.8rem;
  color: #0b0a0a;
  font-weight: bold;
  margin-top: 5rem;
  margin-bottom: 5rem;

  @media (min-width: 768px) {
    font-size: 1.9rem;
    padding-block: clamp(6rem, 9vw, 9rem);
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;

  @media (min-width: 768px) {
    padding: 0;
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
`;

const Title = styled.h1`
  font-family: "Tiempos", serif;
  font-size: 2rem;
  line-height: 1.2;
  color: #71706d;
  margin-bottom: 6rem;

  @media (min-width: 768px) {
    font-size: 4.6rem;
    line-height: 1.2;
    padding-block: clamp(8rem, 8vw, 8rem);
  }
`;

const Name = styled.h2`
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  line-height: 1.4;
  color: #b08a4f;
  margin-top: 1rem;
  font-weight: 550;

  @media (min-width: 768px) {
    font-size: 3rem;
    line-height: 1.3;
  }
`;

const Role = styled.p`
  font-size: 1.2rem;
  line-height: 1.4;
  color: #0b0a0a;
  margin-bottom: 0.6rem;
  font-family: "Inter", sans-serif;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.5;
  }
`;

const Description = styled.p`
  font-size: 0.7rem;
  line-height: 1.6;
  color: #0b0a0a;
  margin-bottom: 0.6rem;
  font-family: "Inter", sans-serif;

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 35px;
    margin-top: 1rem;
    margin-bottom: 2rem;
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

const Line = styled.div`
  width: 60px;
  height: 2px;
  background-color: #f7e383;
  margin-bottom: 2rem;
  align-self: flex-start;

  @media (min-width: 768px) {
  }
`;
