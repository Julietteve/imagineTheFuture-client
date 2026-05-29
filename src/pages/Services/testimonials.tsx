import React from "react";
import styled from "styled-components";
import { useInView } from "../../hooks/useInView";

interface TestimonialItemProps {
  quote: string;
  author: string;
}

const TestimonialItem: React.FC<TestimonialItemProps> = ({ quote, author }) => {
  const { ref, isVisible } = useInView<HTMLElement>(0.2);

  return (
    <Content>
      <Line></Line>
      <TestimonialsGrid>
        <Testimonial>
          <Quote dangerouslySetInnerHTML={{ __html: quote }}></Quote>
          <Author>{author}</Author>
        </Testimonial>
      </TestimonialsGrid>
    </Content>
  );
};

export default TestimonialItem;

const Content = styled.div`
  max-width: 900px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  @media (min-width: 1024px) {
    max-width: 1200px;
  }
`;

const TestimonialsGrid = styled.div``;

const Testimonial = styled.div``;

const Quote = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 0.7rem;
  color: #303030;
  margin-bottom: 0;
  font-style: italic;

  @media (min-width: 768px) {
    font-size: 12px;
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
    font-size: 12px;
    line-height: 26px;
    margin-top: 1rem;
  }
`;

const Line = styled.div`
  width: 100px;
  height: 0.5px;
  margin-bottom: 1rem;
  background-color: #6e6e6d;
`;
