import React, { useEffect, useState } from "react";
import { Header } from "../../components";
import Footer from "../../components/Footer";
import styled from "styled-components";
import Nota from "../../components/Notas";
import { notasList } from "../../components/Notas/notesList";

const PageWrapper = styled.div`
  width: 100%;
  max-width: 100vw;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const NotaWrapper = styled.div<{ $isEven: boolean }>`
  background-color: ${(props) => (props.$isEven ? "#fafafa" : "#ffffff")};
  border-radius: 6px;
  margin-bottom: 15px;
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
  text-align: left;

  @media (min-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

const Line = styled.div`
  width: 45px;
  height: 2px;
  background-color: #b7b7b7;
  margin-bottom: 1rem;
  margin-top: 0.8rem;
  align-self: flex-start;

  @media (min-width: 768px) {
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;
  }
`;

const Description = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 0.7rem;
  line-height: 1.6;
  color: #0b0a0a;
  margin-bottom: 2rem;
  text-align: left;

  @media (min-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.6;
    margin-bottom: 4rem;
  }
`;

const Spacer = styled.div`
  padding-top: 2rem;

  @media (min-width: 768px) {
    padding-top: 4rem;
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
          <Title>The Coach's Notebook</Title>
          <Line />
          <Description>
            A collection of reflections drawn from my work with clients –
            <br></br> and from my own journey.
          </Description>
          <Spacer />
          {notasList.map((nota, index) => (
            <NotaWrapper key={nota.id} $isEven={index % 2 === 0}>
              <Nota {...nota} />
            </NotaWrapper>
          ))}
        </BlogContainer>
      </PageWrapper>
      <Footer />
    </>
  );
};

export default Blog;
