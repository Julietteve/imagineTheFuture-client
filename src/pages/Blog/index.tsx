import React, { useEffect, useState } from "react";
import { Header } from "../../components";
import Footer from "../../components/Footer";
import styled from "styled-components";
import { Content, Line, TextMain } from "../Services/styles";

const PageWrapper = styled.div`
  width: 100%;
  max-width: 100vw;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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
        <Content>
          <div
            style={{
              padding: "40px 10px",
              maxWidth: "80vw",
              margin: "0 auto",
              justifyContent: "center",
              opacity: fadeIn ? 1 : 0,
              transform: fadeIn ? "translateY(0px)" : "translateY(20px)",
              transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
            }}
          >
            <TextMain>The Coach’s Notebook</TextMain>
            <Line></Line>
          </div>
        </Content>
      </PageWrapper>
      <Footer />
    </>
  );
};

export default Blog;
