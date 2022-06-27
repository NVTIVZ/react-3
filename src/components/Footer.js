import React from "react";
import "../styles/global.css";
import styled from "styled-components";

const Footer = () => {
  return <FooterArea>React-2</FooterArea>;
};

export default Footer;

const FooterArea = styled.footer`
  display: flex;
  justify-content: space-around;
  background: #ef7f4d;
  padding: 20px 0;
  margin-top: auto;
`;
