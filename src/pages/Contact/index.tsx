import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import {
  ContactContainer,
  ContactContent,
  ContactTitle,
  ContactSubtitle,
  ContactInfo,
  ContactItem,
  ContactLabel,
  ContactLink,
  ContactQuote,
  SocialLinks,
  SocialLink,
  Subtitle,
  Logo,
  CTAButton,
} from "./styles";

const Contact = () => {
  let text = "Hi Inés, I am interested in booking a call ";
  const [loading, setLoading] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

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
          <ContactContainer
            style={{
              opacity: fadeIn ? 1 : 0,
              transform: fadeIn ? "translateY(0px)" : "translateY(20px)",
              transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
            }}
          >
            <ContactContent>
              <Logo src={`${process.env.PUBLIC_URL}/images/logo.png`}></Logo>
              <ContactTitle>
                If this resonates, you're welcome to reach out directly.
              </ContactTitle>

              <ContactInfo>
                <ContactItem>
                  <ContactLink href="mailto:ines.imaginethefuture@gmail.com">
                    ines.imaginethefuture@gmail.com
                  </ContactLink>
                </ContactItem>
              </ContactInfo>
              <CTAButton href="https://calendly.com/ines-imaginethefuture/free-career-leadership-consultation">
                Start a conversation{" "}
                <text style={{ color: "#b08a4f" }}>→ </text>{" "}
              </CTAButton>
            </ContactContent>
          </ContactContainer>
        </>
      )}
    </>
  );
};

export default Contact;
