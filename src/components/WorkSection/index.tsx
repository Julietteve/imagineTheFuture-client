import React from "react";
import styled from "styled-components";
import { useInView } from "../../hooks/useInView";

const WorkSection: React.FC = () => {
  const { ref, isVisible } = useInView<HTMLElement>(0.4);

  return (
    <Container ref={ref as any} $visible={isVisible}>
      <Content>
        <Title>How I work</Title>
        <ContentSubHeading>
          <Subheading>
            Growth, transformation, and transition require both reflection and
            structure.
          </Subheading>
          <Subheading>
            My work supports leaders, professionals, and organizations
            navigating complexity with clarity and intention — translating
            insight into aligned action.
          </Subheading>
        </ContentSubHeading>
        <Block>
          <Subtitle style={{ marginTop: "10px" }}>Strategy</Subtitle>
          <Text>
            Partnering with leaders and organizations to clarify vision,
            positioning, culture, and direction during periods of growth and
            transformation.
          </Text>
        </Block>

        <Divider />

        <Block>
          <Subtitle>Career & Leadership Coaching</Subtitle>
          <Text>
            Supporting professionals and leaders across career stages as they
            navigate transition, refine positioning, and strengthen leadership
            presence with clarity and confidence.
          </Text>
        </Block>

        <Divider />

        <Block>
          <Subtitle>Organizational Alignment</Subtitle>
          <Text>
            Working with organizations as leadership, structure, and culture
            evolve — ensuring strategy, people, and execution remain aligned
            through change.
          </Text>
        </Block>
      </Content>
    </Container>
  );
};

export default WorkSection;

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

const ContentSubHeading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 3rem;
`;
const Content = styled.div`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    max-width: 1200px;
  }
`;

const Title = styled.h2`
  font-family: "Tiempos", sans-serif;
  font-size: 1.7rem;
  line-height: 48px;
  margin-bottom: 0;
  color: #2c2c2c;

  @media (min-width: 768px) {
    font-size: 4rem;
    line-height: 58px;
    margin-bottom: 1.5rem;
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
  margin-bottom: 0;
`;

const Subtitle = styled.h3`
  font-family: "Tiempos", sans-serif;
  font-size: 1.7rem;
  line-height: 30px;
  color: #2c2c2c;
  margin-bottom: 10px;
  font-weight: 500;

  @media (min-width: 768px) {
    font-size: 1.9rem;
    line-height: 34px;
  }
`;

const Text = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 18px;
  line-height: 30px;
  color: #0b0a0a;

  @media (min-width: 768px) {
    font-size: 22px;
    line-height: 36px;
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #e0e0e0;
  margin: 24px 0;
`;

const SectionDivider = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 1px;
  background-color: #e0e0e0;
  margin: 60px 60px 60px 60px;

  @media (min-width: 768px) {
    margin: 80px 80px 80px 80px;
  }
`;
