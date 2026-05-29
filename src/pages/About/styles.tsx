import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 98%;
  box-sizing: border-box;
`;
export const AboutMe = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Cairo", sans-serif;
  font-size: 3rem;
  padding: 5rem;

  @media only screen and (max-width: 768px) {
    height: 25vh;
    font-size: 1.5rem;
    padding: 2rem;
  }
`;
export const Info = styled.div<Props>`
  font-family: "Tiempos", sans-serif;
  padding: 1.5rem;
  font-size: 21px;
  font-weight: 400;
  text-align: ${(props) => props.align};
  line-height: 1.6;
  font-style: ${(props) => props.italic};
  font-weight: ${(props) => props?.weight};
  margin-bottom: 1rem;

  @media only screen and (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.7;
    padding: 1rem;
  }

  span {
    color: #0b0a0a;
    font-style: normal;
    font-family: "Tiempos", serif;
    letter-spacing: 0.5;
    @media only screen and (max-width: 768px) {
      font-size: 0.8rem;
    }
  }
`;

export const ColDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;
export const ProfileImage = styled.img``;

export const ImageContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1rem;

  @media (min-width: 768px) {
    min-height: 300px;
    padding: 1.5rem 1rem 1.5rem 2rem;
    margin-top: 8rem;
  }
`;

export const ContentContainer = styled.div`
  padding: 1rem;

  @media (min-width: 768px) {
    padding: 0.5rem;
  }
`;

export const Paragraph = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.6;
  margin-bottom: 0rem;
  color: #0b0a0a;

  @media (min-width: 768px) {
    font-size: 1rem;
    line-height: 2rem;
    margin-bottom: 0.5rem;
  }
`;

export const DropCap = styled.span`
  font-family: "Tiempos", serif;
  font-size: 3rem;
  font-weight: 400;
  line-height: 1;
  float: left;
  margin-right: 6px;
  margin-top: -2px;
  color: #0b0a0a;

  @media (min-width: 768px) {
    font-size: 6rem;
    margin-right: 8px;
  }
`;

export const FirstParagraph = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.6;

  color: #0b0a0a;

  @media (min-width: 768px) {
    font-size: 0.9rem;
    line-height: 2rem;
  }
`;

interface Props {
  italic: string;
  weight: string;
  align: string;
}
