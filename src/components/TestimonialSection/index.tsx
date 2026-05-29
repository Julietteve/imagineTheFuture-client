import React from "react";
import styled from "styled-components";
import { useInView } from "../../hooks/useInView";

const TestimonialsSection: React.FC = () => {
  const { ref, isVisible } = useInView<HTMLElement>(0.2);

  return (
    <Container ref={ref as any} $visible={isVisible}>
      <Content>
        <Title>Client Reflections</Title>
        <Line></Line>
        <TestimonialsGrid>
          <Testimonial>
            <Quote>
              “You guided me through a very demanding<br></br> executive process
              with clarity and candor –<br></br> bringing both insight and
              perspective when it<br></br> mattered most ”
            </Quote>
            <Author>C-Suite Healthcare Executive</Author>
          </Testimonial>

          <TestimonialDivider />

          <Testimonial>
            <Quote>
              “Inés brings a rare combination of strategic insight and practical
              judgment. She creates the space to think, challenge assumptions,
              <br></br>and move forward with clarity and confidence. ”
            </Quote>
            <Author>Senior Executive, IBM</Author>
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
  margin-top: 1rem;
  margin-bottom: 15%;

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) =>
    $visible ? "translateY(0px)" : "translateY(40px)"};

  transition:
    opacity 0.9s ease-out,
    transform 0.9s ease-out;
`;

const Content = styled.div`
  margin-left: 5%;

  @media (min-width: 768px) {
    margin-top: 2rem;
    margin-bottom: 2rem;

    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
`;

const Title = styled.h2`
  font-family: "Tiempos", sans-serif;

  font-size: 1.2rem;
  line-height: 30px;
  margin-bottom: 0;
  color: #565656;

  @media (min-width: 768px) {
    font-size: 1.8rem;
    line-height: 40px;
    padding-top: 10rem;
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
  gap: 0.8rem;
  padding: 1rem 0;

  @media (min-width: 768px) {
    flex: 1;
    padding: 1rem 1rem;
  }
`;

const Quote = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 0.8rem;
  line-height: 20px;
  color: #0b0a0a;
  margin-bottom: 0;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 35px;
    text-align: center;
    margin-top: 2rem;
  }
`;

const Author = styled.p`
  font-family: "Tiempos", sans-serif;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 12px;
  line-height: 18px;
  color: #2c2c2c;
  font-weight: 500;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 30px;
    text-align: center;
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

const Line = styled.div`
  width: 60px;
  height: 2px;
  background-color: #f7e383;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
  }
`;
