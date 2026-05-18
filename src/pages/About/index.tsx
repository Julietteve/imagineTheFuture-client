import React, { useEffect, useState } from "react";
import { Header } from "../../components";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading";
import styled from "styled-components";

import {
  ProfileImage,
  ContentContainer,
  Paragraph,
  ImageContainer,
  DropCap,
  FirstParagraph,
} from "./styles";
import { Line, TextMain } from "../Services/styles";

const AboutContainer = styled.div`
  padding: 2rem 1rem;
  max-width: 90vw;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 40px 10px;
    max-width: 80vw;
  }
`;

const About = () => {
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 300);
  }, []);

  return (
    <>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <>
          <AboutContainer
            style={{
              opacity: fadeIn ? 1 : 0,
              transform: fadeIn ? "translateY(0px)" : "translateY(20px)",
              transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
            }}
          >
            <div className="row">
              <div className="col-md-2 col-sm-12"></div>
              <div className="col-md-4 col-sm-12">
                <ContentContainer>
                  <TextMain>About</TextMain>
                  <Line></Line>
                  <Paragraph>
                    I was born in La Paz, Bolivia, and raised <br></br> between
                    Lima, Montevideo, <br></br>and New York.
                  </Paragraph>

                  <Paragraph style={{ marginBottom: "20px" }}>
                    I have lived and worked across five<br></br> continents, and
                    traveled to more than <br></br> 50 countries — experiences
                    that shaped<br></br> my perspective and continue to inform{" "}
                    <br></br>how I think and advise.
                  </Paragraph>

                  <Paragraph>
                    My work has centered on building<br></br> and shaping
                    organizations across corporate,<br></br> nonprofit, and
                    international sectors.
                  </Paragraph>

                  <Paragraph style={{ marginBottom: "20px" }}>
                    In senior operational and people <br></br>leadership roles,
                    I have established<br></br> international operations from
                    the
                    <br></br>ground up and contributed to strategic
                    <br></br>
                    direction through periods of growth,<br></br>
                    transformation, M&A activity, and public <br></br>offerings.
                  </Paragraph>

                  <Paragraph>
                    Over time, this work has brought me to <br></br>the
                    intersection of leadership, talent,<br></br> strategy, and
                    organizational design — <br></br>partnering with
                    decision-makers <br></br>
                    through complexity and change with a <br></br>sustained
                    focus on aligning strategy, <br></br> culture and impact.
                  </Paragraph>
                  <Paragraph>
                    I bring perspective, structure, and a <br></br>sense of
                    accountability to the choices <br></br>that shape careers,
                    teams, and
                    <br></br>
                    institutions.
                  </Paragraph>
                  <Paragraph style={{ marginTop: "40px" }}>
                    Beyond the work, I remain deeply <br></br>interested in the
                    interplay between<br></br> structure and creativity — and in
                    how
                    <br></br>
                    reflection, culture, and lived<br></br> experience shape
                    leadership.
                  </Paragraph>
                  <Paragraph>
                    Travel, literature, painting, music, <br></br>working with
                    clay, and long walks — <br></br>including the Camino —
                    continue to
                    <br></br>
                    shape how I observe, think, and act.
                  </Paragraph>
                </ContentContainer>
              </div>
              <div className="col-md-6 col-sm-12">
                <ImageContainer>
                  <ProfileImage
                    src={`${process.env.PUBLIC_URL}/images/profile.jpg`}
                  />
                </ImageContainer>
              </div>
              <div className="col-md-2 col-sm-12"></div>
            </div>
          </AboutContainer>
        </>
      )}
      <Footer />
    </>
  );
};

export default About;
