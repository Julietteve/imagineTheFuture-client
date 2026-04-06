import styled from "styled-components";

export const ContactContainer = styled.div`
  padding: 6rem 10px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContactContent = styled.div`
  max-width: 800px;
  text-align: center;

  @media only screen and (max-width: 768px) {
    padding: 1rem;
  }
`;

export const ContactTitle = styled.h1`
  font-family: "Inter", serif;
  font-size: 1.5rem;
  color: #2c2c2c;
  font-weight: 400;
  line-height: 1.4;

  @media only screen and (max-width: 768px) {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
`;

export const ContactSubtitle = styled.p`
  font-family: "Tiempos", serif;
  font-size: 1.3rem;
  color: #0b0a0a;
  margin-bottom: 1rem;
  line-height: 1.5;

  @media only screen and (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 0.8rem;
  }
`;

export const ContactQuote = styled.p`
  font-family: "Tiempos", serif;
  font-size: 1.2rem;
  color: #062e64;
  margin-bottom: 2rem;
  line-height: 1.6;

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  @media only screen and (max-width: 768px) {
  }
`;

export const ContactItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
`;

export const ContactLabel = styled.h3`
  font-family: "Tiempos", serif;
  font-size: 1.1rem;
  color: "light" #0b0a0a;
  margin: 0;
  font-weight: 500;

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ContactLink = styled.a`
  text-decoration: none;
  padding-top: 4rem;
  padding-bottom: 8rem;
  font-family: "Tiempos", sans-serif;
  font-size: 1.5rem;
  color: #0b0a0a;
  transition: color 0.3s ease;
  font-weight: 600;

  &:hover {
    color: #062e64;
  }

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 768px) {
    gap: 1rem;
  }
`;

export const Subtitle = styled.p`
  font-family: "Inter", serif;
  font-size: 1.5rem;

  @media only screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const SocialLink = styled.a`
  font-family: "Inter", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #0b0a0a;
  color: white;
  font-size: 1.5rem;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: #9a7842;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(176, 138, 79, 0.3);
  }

  @media only screen and (max-width: 768px) {
    width: 45px;
    height: 45px;
    font-size: 1.3rem;
  }
`;

export const Logo = styled.img`
  width: 35%;
  margin-bottom: 6rem;
  cursor: pointer;
`;
