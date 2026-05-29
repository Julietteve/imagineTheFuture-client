import styled from "styled-components";

export const ContactContainer = styled.div`
  padding: 2rem 0.8rem;
  max-width: 90vw;
  margin: 0 auto;
  min-height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    padding: 3.5rem 8px;
    max-width: 1200px;
  }
`;

export const ContactContent = styled.div`
  max-width: 90vw;
  text-align: center;
  padding: 0.8rem;

  @media (min-width: 768px) {
    max-width: 800px;
    padding: 0;
  }
`;

export const ContactTitle = styled.h1`
  font-family: "Inter", serif;
  font-size: 0.9rem;
  color: #2c2c2c;
  line-height: 1.6;
  margin-bottom: 0.8rem;

  @media (min-width: 768px) {
    font-size: 1.2rem;
    line-height: 1.4;
  }
`;

export const ContactSubtitle = styled.p`
  font-family: "Tiempos", serif;
  font-size: 0.64rem;
  color: #0b0a0a;
  margin-bottom: 0.6rem;
  line-height: 1.6;

  @media (min-width: 768px) {
    font-size: 0.8rem;
    margin-bottom: 0.8rem;
    line-height: 1.5;
  }
`;

export const ContactQuote = styled.p`
  font-family: "Tiempos", serif;
  font-size: 0.56rem;
  color: #062e64;
  margin-bottom: 1rem;
  line-height: 1.6;

  @media (min-width: 768px) {
    font-size: 0.72rem;
    margin-bottom: 1.5rem;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContactItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CTAButton = styled.a`
  color: #000;
  border: none;
  background-color: transparent;
  font-size: 0.9rem;
  font-family: "Inter", serif;
  cursor: pointer;
  transition: color 0.3s ease;
  border-radius: 2px;
  display: inline-block;
  text-decoration: none;
  margin-top: 1rem;
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const ContactLabel = styled.h3`
  font-family: "Tiempos", serif;
  font-size: 0.56rem;
  color: #0b0a0a;
  margin: 0;
  font-weight: 500;

  @media (min-width: 768px) {
    font-size: 0.72rem;
  }
`;

export const ContactLink = styled.a`
  text-decoration: none;

  padding-bottom: 2.5rem;
  font-family: "Tiempos", serif;
  font-size: 0.9rem;
  color: #0b0a0a;
  transition: color 0.3s ease;
  font-weight: 800;

  &:hover {
    color: #062e64;
  }

  @media (min-width: 768px) {
    padding-top: 1rem;
    padding-bottom: 4.5rem;
    font-size: 0.88rem;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    gap: 1.5rem;
  }
`;

export const Subtitle = styled.p`
  font-family: "Inter", serif;
  font-size: 0.64rem;

  @media (min-width: 768px) {
    font-size: 0.88rem;
  }
`;

export const SocialLink = styled.a`
  font-family: "Inter", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #0b0a0a;
  color: white;
  font-size: 0.72rem;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: #9a7842;
    transform: translateY(-1px);
    box-shadow: 0 3px 10px rgba(176, 138, 79, 0.3);
  }

  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 0.96rem;
  }
`;

export const Logo = styled.img`
  width: 50%;
  margin-bottom: 2rem;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 25%;
    margin-bottom: 3.5rem;
  }
`;
