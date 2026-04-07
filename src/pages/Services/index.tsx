import React, { useEffect, useRef, useState } from "react";
import { Header, MobileNav } from "../../components";
import Footer from "../../components/Footer";
import {
  Block,
  Content,
  Subtitle,
  Text,
  Subheading,
  Sub,
  Line,
  Wrapper,
  TextLine,
  LineText,
  HeadText,
  TextMain,
} from "./styles";
import styled from "styled-components";
import TestimonialItem from "./testimonials";
import CTA from "../../components/CTA";
import { Title } from "../../components/Footer/styles";

const PageWrapper = styled.div`
  width: 100%;
  max-width: 100vw;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const Services = () => {
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
            <TextMain>Services</TextMain>
            <Line></Line>
            <Subheading>
              Bringing clarity to complexity<br></br>
              <Sub>
                through perspective, structure and thoughtful execution.
              </Sub>
            </Subheading>
            <Text>
              I work with professionals, leaders, and organizations at<br></br>{" "}
              moments of change, growth, and transition — bringing<br></br>{" "}
              perspective, structure, and thoughtful guidance to the decisions
              <br></br>
              that shape careers, leadership, and organizations.<br></br>
              <br></br>
              The work is structured, yet never standardized.<br></br> Each
              engagement is shaped by context, need, and timing.
            </Text>
            <Line></Line>
            <Wrapper>
              <Block>
                <Subtitle>Strategic Advisory</Subtitle>
                <Text>
                  Working with senior leaders and organizations to clarify{" "}
                  <br></br>
                  direction, strengthen positioning, and make sound decisions at{" "}
                  <br></br>
                  moments that shape growth and transformation. <br></br>
                  <br></br>
                  The work focuses on leadership alignment, organizational,
                  <br></br> effectiveness, and talent and culture strategy — as
                  well as the<br></br> design and execution of key initiatives
                  across functions, from<br></br> operations and talent to
                  communications and positioning.
                </Text>
              </Block>
              <TestimonialItem
                quote={`"My coaching experience was met with patience and real-time results.<br>
                  Inés was well prepared, asked thought-provoking questions,<br>
                  and was deeply committed to the process.<br><br>

                  She helped me understand the value of preparation and approach<br>
                  each interview with clarity and intention. I absolutely recommend her –<br>
                  she brings both expertise and genuine support."`}
                author="– VP Human Resources (VPHR) "
              ></TestimonialItem>
              <Block>
                <Subtitle>Leadership & Career Coaching</Subtitle>
                <Text>
                  Guiding professionals and leaders at points of transition,
                  growth,<br></br> and evolving responsibilities — clarifying
                  direction,<br></br>
                  strengthening positioning, and enabling more deliberate
                  <br></br>
                  decisions.<br></br> Together, we refine narrative, strengthen
                  presence, and take a <br></br> more intentional approach to
                  career and leadership.<br></br>
                  <br></br>Clients range from emerging professionals to the
                  C-suite.
                </Text>
              </Block>
              <TestimonialItem
                quote={`“Inés’ coaching was truly holistic. She helped me work through <br>
                what was holding me back and brought clarity to my direction.<br><br>

                Her insight into building my professional brand – across resume,<br> 
                LinkedIn, networking and overall search – made a real difference.<br>
                I was able to focus my search and position myself effectively.<br><br>

                I felt fully prepared for interviews and ultimately landed a role that<br>
                feels like a strong fit.I’m now doing meaningful work with a great<br>
                team – and I’m genuinely happy.”
                "`}
                author="– Instructional & Curriculum Leader | Higher Education Instructor"
              ></TestimonialItem>
              <TestimonialItem
                quote={`“Inés was extremely supportive and insightful during a very<br>
                challenging transition.<br><br>

                She quickly established trust, helped me process the moment, and <br>
                helped me stay focused and forward-looking.<br><br>
                Each session was productive and thoughtful and her follow-up was <br>
                consistent and thorough.<br><br>

                Our work helped me gain clarity on my priorities and move forward with<br>
                confidence into my next role.”
                "`}
                author="— CMO | New York"
              ></TestimonialItem>
              <Block>
                <Subtitle>Strategic Outplacement</Subtitle>
                <Text>
                  For organizations and individuals at moments of downsizing,
                  <br></br>
                  restructuring, or transformation — <br></br>
                  <br></br>bringing structure and perspective to situations that
                  require<br></br> clarity and a path forward.<br></br>The work
                  is thoughtful and high-touch — supporting<br></br> individuals
                  in reflecting, repositioning, and moving forward,<br></br>{" "}
                  while helping organizations offer a considered,<br></br>{" "}
                  human-centered transition experience.
                </Text>
              </Block>
              <TestimonialItem
                quote={`
                  “I learned a great deal from my coaching experience – most  importantly,<br>
                  my confidence improved significantly through mock interviews<br>
                  and feedback.<br><br>

                  Inés helped me identify habits and blind spots that were affecting my<br>
                  performance and provided clear, practical guidance. I also appreciated<br>
                  her flexibility and ability to adapt to my schedule.”
                  ”
              `}
                author="— CPA | New York"
              ></TestimonialItem>
            </Wrapper>
            <Subheading>The Thinking Behind the Work</Subheading>
            <TextLine>
              My work combines thoughtful dialogue with a<br></br>
              structured approach —<br></br>bringing clarity and order to
              complexity.
            </TextLine>
            <TextLine>
              Over time, a consistent way of working emerged —<br></br>across
              sectors, leadership levels and organizational
              <br></br> contexts.
            </TextLine>
            <TextLine>
              I refer to this as <b>SAETA</b> — a lens that helps determine
              <br></br>
              where to begin and how to move forward.
            </TextLine>
            <TextLine>
              It is not a fixed process — <br></br>
              but a way to understand context, define direction,<br></br>
              and support clear decision-making.
            </TextLine>
            <TextLine>
              The starting point is always shaped by the situation — <br></br>
              because no two individuals or organizations <br></br>
              face the same context.
            </TextLine>
            <div style={{ marginTop: "10rem", marginBottom: "10rem" }}>
              <HeadText>Supporting tools</HeadText>
              <LineText>
                Depending on the engagement, the work may incorporate<br></br>
                structured reflection, selected frameworks, and targeted tools —
                <br></br>— to deepen insight and support practical
                decision-making.
              </LineText>
            </div>
            <CTA
              text={`For moments of transition, leadership decisions, and periods of change.`}
            ></CTA>
          </div>
        </Content>
      </PageWrapper>
      <Footer />
    </>
  );
};

export default Services;
