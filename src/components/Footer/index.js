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
  padding: 1rem;
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: center;
  position: sticky;
  bottom: 0;
`;

const Copywrite = styled.p`
  font-size: 14px;
  margin: 0;
`;
