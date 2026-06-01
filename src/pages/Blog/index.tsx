import React, { useEffect, useState } from "react";
import { Header } from "../../components";
import Footer from "../../components/Footer";
import styled from "styled-components";
import Nota from "../../components/Notas";
import { notasList } from "../../components/Notas/notesList";
import CTA from "../../components/CTA";

const PageWrapper = styled.div``;

const NotaWrapper = styled.div<{ $isEven: boolean }>`
  border-radius: 12px;
  margin-bottom: 60px;
  padding: 30px 20px;
  box-shadow: ${(props) =>
    props.$isEven ? "0 2px 8px rgba(0,0,0,0.04)" : "none"};

  @media (min-width: 768px) {
    padding: 40px 30px;
    margin-bottom: 80px;
  }
`;

const BlogContainer = styled.div`
  padding: 1.5rem 1rem;
  width: 90%;
  margin: 0 auto;
  text-align: left;

  @media (min-width: 768px) {
    padding: 40px 10px;
    width: 65%;
    margin: 0 auto;
    max-width: 80vw;
  }
`;

const Title = styled.h1`
  font-family: "Tiempos", serif;
  font-size: 1.4rem;
  color: #0b0a0a;
  margin-bottom: 0.8rem;

  @media (min-width: 768px) {
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }
`;

const Line = styled.div`
  width: 45px;
  height: 2px;
  background-color: #b7b7b7;
  margin-bottom: 2rem;
  margin-top: 0.8rem;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    margin-bottom: 1.5rem;
    margin-top: 2.5rem;
  }
`;

const Description = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  line-height: 1.6;
  color: #0b0a0a;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 0.6rem;
  }
`;

const DescriptionBottom = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  line-height: 1.6;
  color: #0b0a0a;
  text-align: center;
  margin-left: 0;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.6;
  }
`;

const Spacer = styled.div`
  padding-top: 2rem;

  @media (min-width: 768px) {
    padding-top: 4rem;
  }
`;

const SpacerDown = styled.div`
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    text-align: left;
    margin-bottom: 8rem;
  }
`;

const Blog = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 300);
  }, []);

  return (
    <>
      <Header />
      <PageWrapper>
        <BlogContainer
          style={{
            opacity: fadeIn ? 1 : 0,
            transform: fadeIn ? "translateY(0px)" : "translateY(20px)",
            transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
          }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/ball.jpg`}
            alt="Blog Header"
            style={{
              width: "45%",
              height: "auto",
              borderRadius: "6px",
              marginBottom: "1.5rem",
              margin: "0 auto 1.5rem auto",
              display: "block",
            }}
          />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <SpacerDown>
              <Title>The Coach's Notebook</Title>
              <Line />
              <Description>
                Reflections on clarity, positioning, leadership, and work —{" "}
                <br />
                drawn from my work with others, and my own journey.
              </Description>
            </SpacerDown>
          </div>
          <Spacer />
        </BlogContainer>
        {notasList.map((nota, index) => (
          <Nota {...nota} />
        ))}
      </PageWrapper>
      <div style={{ marginTop: 180 }}>
        <CTA text="If this resonates — we can start a conversation."></CTA>
      </div>
    </>
  );
};

export default Blog;
