import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Header, SocialBar } from "../../components";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading";
import SideBar from "../../components/SideBarMobile";
import { AboutMe } from "../About/styles";
import { Button } from "react-bootstrap";
import { blogArticles } from "../../Data/Services";

const Blog = () => {
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setLoading(false);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <Header />
      <Footer />
    </>
  );
};

export default Blog;
