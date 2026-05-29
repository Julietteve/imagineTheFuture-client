import React from "react";
import styled from "styled-components";
import { useInView } from "../../hooks/useInView";

const WorkSection: React.FC = () => {
  const { ref, isVisible } = useInView<HTMLElement>(0.4);

  return (
    <Container ref={ref as any} $visible={isVisible}>
      <Content>
        <Title>How I Work</Title>
        <Description style={{ marginBottom: "3rem" }}>
          My work brings together strategy, coaching, and organizational
          insight—
          <br></br>creating clarity and structure in moments of change, growth,
          and decision.
        </Description>
        <Description>
          At the core of my work is SAETA™ —<br></br>a way to understand where
          you are, what matters, and how we move forward.
        </Description>
        <Description>
          It is not a rigid framework — but a way to create focus, sequence, and
          direction.
        </Description>

        <Block style={{ marginTop: "10rem" }}>
          <Subtitle style={{ marginTop: "10px" }}>Strategy</Subtitle>
          <Text>
            Vision, positioning, culture, and direction – advising leaders and
            organizations <br></br> as they grow, scale, and align strategy,
            systems, people, and execution, <br></br>to deliver results for
            their teams, customers, and stakeholders.
          </Text>
        </Block>

        <Block>
          <Subtitle>Executive & Career Coaching</Subtitle>
          <Text>
            Working with professionals and leaders to clarify direction,
            strengthen leadership presence, <br></br> and move forward in
            transitions, growth, and key career decisions.
          </Text>
        </Block>
        <Block>
          <Subtitle>Organizational Alignment</Subtitle>
          <Text>
            Working with organizations as leadership, structure, and culture
            evolve — <br></br> ensuring strategy, people, and execution remain
            aligned through change.
          </Text>
          <Line></Line>
        </Block>
        <TextBottom>
          Over the past decade, I have partnered with professionals<br></br> and
          leaders across sectors, geographies, and career stages.
        </TextBottom>
      </Content>
    </Container>
  );
};

export default WorkSection;

const Container = styled.section<{ $visible: boolean }>``;

const Description = styled.p`
  font-size: 0.7rem;
  line-height: 1.6;
  color: #0b0a0a;
  margin-bottom: 0.6rem;
  font-family: "Inter", sans-serif;

  @media (min-width: 768px) {
    font-size: 1rem;
    line-height: 30px;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
`;
const Content = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;

  @media (min-width: 768px) {
    padding: 0;
  }
`;

const Title = styled.h2`
  font-family: "Tiempos", serif;
  font-size: 1.2rem;
  line-height: 1.2;
  margin-bottom: 1rem;
  color: #2c2c2c;

  @media (min-width: 768px) {
    font-size: 3.5rem;
    line-height: 1.3;
    padding-block: clamp(10rem, 12vw, 12rem);
  }
`;

const Subheading = styled.h3`
  font-family: "Tiempos", sans-serif;
  font-size: 1.3rem;
  color: #020202;
  font-weight: light;
  font-weight: 400;
  @media (min-width: 768px) {
    font-size: 1.5rem;
    margin-top: 0.7rem;
  }
`;

const Block = styled.div`
  margin-bottom: 2rem;
  margin-top: rem;

  @media (min-width: 768px) {
    margin-bottom: 4rem;
    margin-top: 2rem;
  }
`;

const Subtitle = styled.h3`
  font-family: "Tiempos", serif;
  font-size: 0.9rem;
  line-height: 1.4;
  color: #000;
  font-weight: 600;
  margin-bottom: 0.3rem;

  @media (min-width: 768px) {
    font-size: 28px;
    line-height: 1.4;
    margin-bottom: 0.6rem;
  }
`;

const Text = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 0.7rem;
  line-height: 1.6;
  color: #363535;

  @media (min-width: 768px) {
    font-size: 17px;
    line-height: 40px;
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: none;
  margin: 24px 0;
`;

const SectionDivider = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 1px;
  background-color: transparent;
  margin: 60px 60px 60px 60px;

  @media (min-width: 768px) {
    margin: 80px 80px 80px 80px;
  }
`;

const Line = styled.div`
  width: 90px;
  height: 2px;
  background-color: #f7e383;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
  }
`;

const TextBottom = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 0.7rem;
  line-height: 1.6;
  color: #0b0a0a;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 1.1rem;
    line-height: 30px;
    margin-top: 4rem;
    margin-bottom: 6rem;
  }
`;
