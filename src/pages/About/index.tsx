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
                    I was born in La Paz, Bolivia, <br></br>and raised between
                    Lima, Montevideo, <br></br>and New York.
                  </Paragraph>

                  <Paragraph>
                    I have lived and worked across five continents, and traveled
                    to more than <br></br> 50 countries — experiences that{" "}
                    <br></br>
                    shaped my perspective and continue to inform how I think and
                    advise.
                  </Paragraph>

                  <Paragraph>
                    My work has centered on building and shaping organizations
                    across <br></br> corporate, nonprofit, and international
                    sectors.
                  </Paragraph>

                  <Paragraph>
                    In senior operational and people <br></br>leadership roles,
                    I have established international operations from <br></br>{" "}
                    the ground up and contributed to strategic direction through
                    periods of growth, transformation, M&A activity,<br></br>{" "}
                    and public offerings.
                  </Paragraph>

                  <Paragraph>
                    Over time, this work has brought me <br></br> to the
                    intersection of leadership, talent, strategy, and
                    organizational design — partnering with decision-makers{" "}
                    <br></br>
                    through complexity and change with a sustained focus on
                    aligning strategy, <br></br> culture and impact.
                  </Paragraph>
                  <Paragraph>
                    I bring perspective, structure, and a <br></br>sense of
                    accountability to the choices that shape careers, teams, and
                    <br></br>
                    institutions.
                  </Paragraph>
                  <Paragraph>
                    Beyond the work, I remain deeply <br></br>interested in the
                    interplay between<br></br> structure and creativity — and in
                    how
                    <br></br>
                    reflection, culture, and lived<br></br> experience shape
                    leadership.
                  </Paragraph>
                  <Paragraph>
                    Travel, literature, painting, music, <br></br>working with
                    clay, and long walks — including the Camino — continue to
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
