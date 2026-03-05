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
`;
export const ProfileImage = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  @media only screen and (max-width: 768px) {
    width: 95%;
    max-width: 400px;
  }
`;

export const ImageContainer = styled.div`
  height: 100%;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1.5rem 1rem 1.5rem 2rem;

  @media only screen and (max-width: 768px) {
    min-height: 400px;
    padding: 1rem;
    justify-content: flex-start;
  }
`;

export const ContentContainer = styled.div`
  padding: 1.5rem;

  @media only screen and (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Paragraph = styled.p`
  font-family: "Tiempos", sans-serif;
  font-size: 21px;
  font-weight: 400;
  line-height: 2rem;
  margin-bottom: 1.5rem;
  color: #0b0a0a;

  @media only screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 1.7;
    margin-bottom: 1.2rem;
  }
`;

export const DropCap = styled.span`
  font-family: "Tiempos", serif;
  font-size: 6rem;
  font-weight: 400;
  line-height: 1;
  float: left;
  margin-right: 8px;
  margin-top: -2px;
  color: #0b0a0a;

  @media only screen and (max-width: 768px) {
    font-size: 3rem;
    margin-right: 6px;
  }
`;

export const FirstParagraph = styled.p`
  font-family: "Tiempos", sans-serif;
  font-size: 21px;
  font-weight: 400;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: #0b0a0a;

  @media only screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 1.7;
    margin-bottom: 1.2rem;
  }
`;

interface Props {
  italic: string;
  weight: string;
  align: string;
}
