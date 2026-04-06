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
          change,<br></br>growth, and transition — clarifying direction, shaping
          strategy, and <br></br> moving forward with impact.
        </Description>

        <Description>
          I partner with clients across career stages — <br></br>from emerging
          talent to the C-suite.
        </Description>
        <Description>
          Drawing on senior leadership experience<br></br> across operations,
          HR, and talent acquisition —
        </Description>
        <Description>
          I advise leaders and professionals through<br></br>change,<br></br>
          bringing both an organizational<br></br>and individual perspective.
        </Description>
        <Line></Line>
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

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) =>
    $visible ? "translateY(0px)" : "translateY(40px)"};

  transition:
    opacity 0.8s ease-out,
    transform 0.8s ease-out;
`;

const Subheading = styled.h3`
  font-family: "Tiempos", sans-serif;
  font-size: 1.3rem;
  color: #0b0a0a;
  font-weight: bold;

  @media (min-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 10rem;
    margin-top: 6rem;
  }
`;

const Content = styled.div`
  width: 65%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
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
  font-size: 5rem;
  line-height: 48px;
  color: #71706d;

  @media (min-width: 768px) {
    font-size: 5.5rem;
    line-height: 64px;
    margin-top: 15rem;
    margin-bottom: 15rem;
  }
`;

const Name = styled.h2`
  font-family: "Inter", sans-serif;
  font-size: 3rem;
  line-height: 32px;
  color: #b08a4f;
  margin-top: 2rem;
  font-weight: 550;

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
  font-family: "Inter", sans-serif;

  @media (min-width: 768px) {
    font-size: 22px;
    line-height: 34px;
  }
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 30px;
  color: #0b0a0a;
  margin-bottom: 0;
  font-family: "Inter", sans-serif;

  @media (min-width: 768px) {
    font-size: 22px;
    line-height: 36px;
    margin-top: 2rem;
    margin-bottom: 4rem;
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
