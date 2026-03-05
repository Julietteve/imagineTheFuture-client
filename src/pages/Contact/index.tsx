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
              <ContactTitle>Let's start a conversation</ContactTitle>

              <ContactSubtitle>
                I'd be delighted to explore how we might work together.
              </ContactSubtitle>
              <ContactInfo>
                <ContactItem>
                  <ContactLabel>Email</ContactLabel>
                  <ContactLink href="mailto:ines.imaginethefuture@gmail.com">
                    ines.imaginethefuture@gmail.com
                  </ContactLink>
                  <Subtitle>I personally respond to all inquiries.</Subtitle>
                </ContactItem>

                <ContactItem>
                  <ContactLabel>Connect</ContactLabel>
                  <SocialLinks>
                    <SocialLink
                      href="https://www.linkedin.com/in/inesita/"
                      target="_blank"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedinIn />
                    </SocialLink>
                    <SocialLink
                      href="https://www.instagram.com/inesdlcroix/"
                      target="_blank"
                      aria-label="Instagram"
                    >
                      <FaInstagram />
                    </SocialLink>
                  </SocialLinks>
                </ContactItem>
              </ContactInfo>
            </ContactContent>
          </ContactContainer>
          <Footer />
        </>
      )}
    </>
  );
};

export default Contact;
