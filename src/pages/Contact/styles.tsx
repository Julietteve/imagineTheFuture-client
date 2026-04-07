import styled from "styled-components";

export const ContactContainer = styled.div`
  padding: 3rem 1rem;
  max-width: 90vw;
  margin: 0 auto;
  min-height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    padding: 6rem 10px;
    max-width: 1200px;
  }
`;

export const ContactContent = styled.div`
  max-width: 90vw;
  text-align: center;
  padding: 1rem;

  @media (min-width: 768px) {
    max-width: 800px;
    padding: 0;
  }
`;

export const ContactTitle = styled.h1`
  font-family: "Inter", serif;
  font-size: 1rem;
  color: #2c2c2c;
  font-weight: 400;
  line-height: 1.6;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
    line-height: 1.4;
  }
`;

export const ContactSubtitle = styled.p`
  font-family: "Tiempos", serif;
  font-size: 1rem;
  color: #0b0a0a;
  margin-bottom: 0.8rem;
  line-height: 1.6;

  @media (min-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    line-height: 1.5;
  }
`;

export const ContactQuote = styled.p`
  font-family: "Tiempos", serif;
  font-size: 0.9rem;
  color: #062e64;
  margin-bottom: 1.5rem;
  line-height: 1.6;

  @media (min-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 2rem;
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
  gap: 0.5rem;
  align-items: center;
`;

export const ContactLabel = styled.h3`
  font-family: "Tiempos", serif;
  font-size: 0.9rem;
  color: #0b0a0a;
  margin: 0;
  font-weight: 500;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const ContactLink = styled.a`
  text-decoration: none;
  padding-top: 2rem;
  padding-bottom: 4rem;
  font-family: "Tiempos", serif;
  font-size: 0.9rem;
  color: #0b0a0a;
  transition: color 0.3s ease;
  font-weight: 600;

  &:hover {
    color: #062e64;
  }

  @media (min-width: 768px) {
    padding-top: 4rem;
    padding-bottom: 8rem;
    font-size: 1.5rem;
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
  font-size: 1rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const SocialLink = styled.a`
  font-family: "Inter", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #0b0a0a;
  color: white;
  font-size: 1.1rem;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: #9a7842;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(176, 138, 79, 0.3);
  }

  @media (min-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
  }
`;

export const Logo = styled.img`
  width: 50%;
  margin-bottom: 3rem;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 35%;
    margin-bottom: 6rem;
  }
`;
