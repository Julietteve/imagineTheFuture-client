import React, { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FooterData } from "../../Data/Footer";
import {
  Bottom,
  FooterContainer,
  DataContainer,
  Data,
  Logo,
  Title,
  Anchor,
  BootomFooter,
  BootomFooterSpan,
} from "./styles";

interface FooterProps {
  showTopDivider?: boolean;
}

let styleLink = {
  color: "grey",
  fontFamily: "Inter, sans-serif",
  fontSize: "1rem",
  textDecoration: "none",
  paddingTop: "15px",
};

const Footer: React.FC<FooterProps> = ({ showTopDivider = true }) => {
  const navigate = useNavigate();
  const handleOnClick = useCallback(
    () => navigate("/", { replace: true }),
    [navigate],
  );

  return (
    <>
      <FooterContainer $showTopDivider={showTopDivider}>
        <Logo src="/images/logo.png" onClick={handleOnClick}></Logo>
        <Data>
          {FooterData.map((item, index) => (
            <DataContainer key={index}>
              <Title>{item.title}</Title>
              {item.data.map((anchor) =>
                anchor.external ? (
                  <Anchor target={"_blank"} href={anchor.url}>
                    {anchor.name}
                  </Anchor>
                ) : (
                  <Link style={styleLink} to={anchor.url}>
                    {anchor.name}
                  </Link>
                ),
              )}
            </DataContainer>
          ))}
        </Data>
      </FooterContainer>
      <Bottom>
        <BootomFooter />
        <BootomFooterSpan>
          {" "}
          ©{new Date().getFullYear()} Imagine the future by M. Ines Fernandez
        </BootomFooterSpan>
      </Bottom>
    </>
  );
};

export default Footer;
