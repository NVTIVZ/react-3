import React from "react";
import styled from "styled-components";

const Footer = () => {
  return <FooterArea>Pokedex</FooterArea>;
};

export default Footer;

const FooterArea = styled.footer`
  display: flex;
  justify-content: space-around;
  background: ${({ theme }) => theme.main};
  padding: 20px 0;
  margin-top: auto;
`;
