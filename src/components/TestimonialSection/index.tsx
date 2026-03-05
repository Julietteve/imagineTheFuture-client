import React from "react";
import styled from "styled-components";
import { useInView } from "../../hooks/useInView";

const TestimonialsSection: React.FC = () => {
  const { ref, isVisible } = useInView<HTMLElement>(0.2);

  return (
    <Container ref={ref as any} $visible={isVisible}>
      <Content>
        <Title>What clients say</Title>

        <TestimonialsGrid>
          <Testimonial>
            <Quote>
              “Inés helped me rethink how I present my career in a strategic and
              forward-looking way. She has added significant value in
              positioning my trajectory and guiding me through a transformative
              process.”
            </Quote>
            <Author>— Senior Executive, IBM</Author>
          </Testimonial>

          <TestimonialDivider />

          <Testimonial>
            <Quote>
              “Working with Ines helped me organize my search, target the right
              opportunities, and strengthen my interview approach. I gained
              clarity on both immediate steps and the bigger picture — and
              ultimately secured a role with Salesforce.”
            </Quote>
            <Author>— Salesforce Client</Author>
          </Testimonial>
        </TestimonialsGrid>
      </Content>
    </Container>
  );
};

export default TestimonialsSection;

const Container = styled.section<{ $visible: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 60px 32px;

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) =>
    $visible ? "translateY(0px)" : "translateY(40px)"};

  transition:
    opacity 0.9s ease-out,
    transform 0.9s ease-out;
`;

const Content = styled.div`
  max-width: 900px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media (min-width: 1024px) {
    max-width: 1200px;
    gap: 4rem;
  }
`;

const Title = styled.h2`
  font-family: "Tiempos", sans-serif;
  font-size: 1.7rem;
  line-height: 48px;
  margin-bottom: 0;
  color: #2c2c2c;

  @media (min-width: 768px) {
    font-size: 3.5rem;
    line-height: 58px;
  }
`;

const TestimonialsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: stretch;
    gap: 0;
  }
`;

const Testimonial = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 3rem 0;

  @media (min-width: 768px) {
    flex: 1;
    padding: 3rem 2rem;
  }
`;

const Quote = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 1.5rem;
  line-height: 26px;
  color: #0b0a0a;
  margin-bottom: 0;

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 32px;
  }
`;

const Author = styled.p`
  font-family: "Tiempos", sans-serif;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 22px;
  color: #2c2c2c;
  font-weight: 500;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 26px;
  }
`;

const TestimonialDivider = styled.hr`
  border: none;
  border-top: 1px solid lightgray;
  margin: 0;
  width: 100%;

  @media (min-width: 768px) {
    border-top: none;
    border-left: 1px solid gray;
    width: 1px;
    height: auto;
    align-self: stretch;
  }
`;
