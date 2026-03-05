import React, { useEffect, useState } from "react";
import { Header } from "../../components";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading";

import {
  ProfileImage,
  ContentContainer,
  Paragraph,
  ImageContainer,
  DropCap,
  FirstParagraph,
} from "./styles";

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
          <div
            style={{
              padding: "40px 10px",
              maxWidth: "100vw",
              margin: "0 auto",
              justifyContent: "center",
              opacity: fadeIn ? 1 : 0,
              transform: fadeIn ? "translateY(0px)" : "translateY(20px)",
              transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
            }}
          >
            <div className="row">
              <div className="col-md-2 col-sm-12"></div>
              <div className="col-md-4 col-sm-12">
                <ContentContainer>
                  <FirstParagraph>
                    I was born in La Paz, Bolivia, and raised between Lima,
                    Montevideo, and New York — experiences that shaped my
                    philosophy and continue to inform how I think and advise.
                  </FirstParagraph>

                  <Paragraph>
                    My career has centered on building and shaping organizations
                    across corporate, nonprofit, and international sectors —
                    serving in senior operational and people leadership
                    capacities and establishing international operations from
                    the ground up. I have contributed to strategic direction
                    through periods of growth, transformation, M&A activity, and
                    public offerings, with sustained focus on aligning strategy,
                    culture, leadership, and performance.
                  </Paragraph>

                  <Paragraph>
                    Over time, my work brought me to the intersection of
                    leadership, talent, strategy, and organizational design —
                    partnering with decision-makers navigating complexity and
                    change.
                  </Paragraph>

                  <Paragraph>
                    This breadth of experience informs the way I engage with
                    individuals and organizations — from early and mid-career
                    professionals to senior leaders — bringing perspective,
                    structure, and accountability to the choices that shape
                    careers, teams, and institutions.
                  </Paragraph>

                  <Paragraph>
                    Beyond the work, I remain deeply interested in the interplay
                    of structure and creativity — how reflection, culture, and
                    lived experience shape leadership. Travel, literature,
                    painting, music, working with clay, and long walks —
                    including the Camino — continue to inform my perspective,
                    reminding me that thoughtful leadership requires both
                    structure and creativity.
                  </Paragraph>
                </ContentContainer>
              </div>
              <div className="col-md-6 col-sm-12">
                <ImageContainer>
                  <ProfileImage src="/images/profile.jpg" />
                </ImageContainer>
              </div>
              <div className="col-md-2 col-sm-12"></div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default About;
