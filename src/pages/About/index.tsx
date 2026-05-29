import React, { useEffect, useState } from "react";
import { Header } from "../../components";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading";
import styled from "styled-components";

import { ProfileImage, Paragraph } from "./styles";

import { Line, TextMain } from "../Services/styles";

const AboutContainer = styled.div``;

const Columns = styled.div`
  display: flex;
  align-items: flex-start;
  margin-left: 10%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const RightColumn = styled.div`
  flex: 1;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const About = () => {
  const [loading, setLoading] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header />

      {loading ? (
        <Loading />
      ) : (
        <AboutContainer
          style={{
            opacity: fadeIn ? 1 : 0,
            transform: fadeIn ? "translateY(0px)" : "translateY(20px)",
            transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
          }}
        >
          <Columns>
            <LeftColumn>
              <TextMain>About</TextMain>
              <Line />

              <Paragraph>
                I was born in La Paz, Bolivia, and raised <br />
                between Lima, Montevideo, <br />
                and New York.
              </Paragraph>

              <Paragraph style={{ marginBottom: "20px" }}>
                I have lived and worked across five <br />
                continents, and traveled to more than <br />
                50 countries — experiences that shaped <br />
                my perspective and continue to inform <br />
                how I think and advise.
              </Paragraph>

              <Paragraph>
                My work has centered on building <br />
                and shaping organizations across corporate, <br />
                nonprofit, and international sectors.
              </Paragraph>

              <Paragraph style={{ marginBottom: "20px" }}>
                In senior operational and people <br />
                leadership roles, I have established <br />
                international operations from the <br />
                ground up and contributed to strategic <br />
                direction through periods of growth, <br />
                transformation, M&A activity, and public <br />
                offerings.
              </Paragraph>

              <Paragraph>
                Over time, this work has brought me to <br />
                the intersection of leadership, talent, <br />
                strategy, and organizational design — <br />
                partnering with decision-makers <br />
                through complexity and change with a <br />
                sustained focus on aligning strategy, <br />
                culture and impact.
              </Paragraph>

              <Paragraph>
                I bring perspective, structure, and a <br />
                sense of accountability to the choices <br />
                that shape careers, teams, and <br />
                institutions.
              </Paragraph>

              <Paragraph style={{ marginTop: "25px" }}>
                Beyond the work, I remain deeply <br />
                interested in the interplay between <br />
                structure and creativity — and in how <br />
                reflection, culture, and lived <br />
                experience shape leadership.
              </Paragraph>

              <Paragraph>
                Travel, literature, painting, music, <br />
                working with clay, and long walks — <br />
                including the Camino — continue to <br />
                shape how I observe, think, and act.
              </Paragraph>
            </LeftColumn>

            <RightColumn>
              <ProfileImage
                src={`${process.env.PUBLIC_URL}/images/profile.jpg`}
                style={{
                  width: "90%",
                  height: "auto",
                  marginTop: "8rem",
                }}
              />
            </RightColumn>
          </Columns>
        </AboutContainer>
      )}
    </>
  );
};

export default About;
