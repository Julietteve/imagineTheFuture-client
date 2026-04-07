import styled from "styled-components";

export const Sub = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  line-height: 1.6;

  @media (min-width: 768px) {
    font-size: 1rem;
    margin-top: 0.7rem;
  }
`;

export const HeadText = styled.h3`
  font-family: "Tiempos", serif;
  font-size: 1rem;
  color: #0b0a0a;
  font-weight: bold;
  padding-bottom: 0.8rem;

  @media (min-width: 768px) {
    font-size: 1rem;
    margin-top: 3rem;
  }
`;

export const LineText = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  line-height: 1.6;
  color: #0b0a0a;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const Line = styled.div`
  width: 60px;
  height: 2px;
  background-color: #b7b7b7;
  margin-bottom: 2rem;
  margin-top: 2rem;
  @media (min-width: 768px) {
  }
`;

export const Wrapper = styled.div`
  margin-top: 8rem;
`;

export const Subheading = styled.h3`
  font-family: "Tiempos", serif;
  font-size: 0.8rem;
  color: #0b0a0a;
  font-weight: bold;
  padding-bottom: 0.6rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 7rem;
    margin-top: 3rem;
  }
`;

export const Block = styled.div`
  margin-bottom: 2rem;
  margin-top: 2rem;

  @media (min-width: 768px) {
    margin-bottom: 3rem;
    margin-top: 4rem;
  }
`;

export const Subtitle = styled.h3`
  font-family: "Tiempos", serif;
  font-size: 1rem;
  line-height: 1.4;
  color: #000;
  font-weight: 600;
  margin-bottom: 0.8rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
    line-height: 1.4;
    margin-bottom: 3.5rem;
  }
`;

export const Text = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 0.7rem;
  line-height: 1.6;
  color: #0b0a0a;

  @media (min-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
  }
`;

export const TextLine = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 0.9rem;
  line-height: 1.6;
  color: #0b0a0a;
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;

  @media (min-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    margin-top: 2rem;
  }
`;

export const Container = styled.section<{ $visible: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) =>
    $visible ? "translateY(0px)" : "translateY(40px)"};

  transition:
    opacity 0.8s ease-out,
    transform 0.8s ease-out;
`;

export const Content = styled.div`
  width: 65%;
  margin: 0 auto;
`;

export const TextMain = styled.h2`
  font-family: "Tiempos", serif;
  font-size: 2rem;
  color: #0b0a0a;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;
