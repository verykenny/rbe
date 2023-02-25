import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <Copywrite>&copy; 2023 BlueEconomy. All rights reserved.</Copywrite>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  position: sticky;
`;

const Copywrite = styled.p`
  font-size: 14px;
  margin: 0;
`;
