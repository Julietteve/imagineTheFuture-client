import styled from "styled-components";

export const ContactContainer = styled.div`
  padding: 40px 10px;
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
  padding: 1.5rem;

  @media only screen and (max-width: 768px) {
    padding: 1rem;
  }
`;

export const ContactTitle = styled.h1`
  font-family: "Tiempos", serif;
  font-size: 2.5rem;
  color: #2c2c2c;
  margin-bottom: 2rem;
  font-weight: 400;

  @media only screen and (max-width: 768px) {
    font-size: 2rem;
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
  gap: 1.5rem;
  align-items: center;

  @media only screen and (max-width: 768px) {
    gap: 1.5rem;
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
  color: #000000;
  margin: 0;
  font-weight: 500;

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ContactLink = styled.a`
  font-family: "Inter", sans-serif;
  font-size: 2rem;
  color: #0b0a0a;
  text-decoration: underline;
  transition: color 0.3s ease;
  font-weight: 500;

  &:hover {
    color: #9a7842;
    text-decoration: underline;
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
  font-family: "Inter", sans-serif;
  font-size: 0.9rem;
  color: #0b0a0a;
  font-style: italic;

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
