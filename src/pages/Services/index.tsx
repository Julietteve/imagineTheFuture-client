import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header, SocialBar } from "../../components";
import Footer from "../../components/Footer";
import SideBar from "../../components/SideBarMobile";
import { AboutMe, ColDiv, Info } from "../About/styles";
import { howIHelp, mainService } from "../../Data/Services";
import { ServiceBox, ReadMore } from "./styles";

const Services = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate();
  const handleConsultation = useCallback(
    () => navigate("/services/consulting", { replace: true }),
    [navigate],
  );
  const handleCoaching = useCallback(
    () => navigate("/services/coaching", { replace: true }),
    [navigate],
  );
  const handleOutplacement = useCallback(
    () => navigate("/services/outplacement", { replace: true }),
    [navigate],
  );

  return (
    <>
      <Header />
      <Footer />
    </>
  );
};

export default Services;
