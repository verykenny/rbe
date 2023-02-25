import styled from 'styled-components'
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <LogoContainer>
      <LogoLink to="/"><BlueLabel>Blue</BlueLabel><EconomyLabel>Economy</EconomyLabel></LogoLink>
    </LogoContainer>
  );
}

const LogoContainer = styled.div`

`;

const LogoLink = styled(Link)`
  color: #fff;
  text-decoration: none;
`;

const BlueLabel = styled.span`
  font-size: 1.3rem;
  color: #fff;
`;

const EconomyLabel = styled.span`
  font-size: 1.3rem;
  color: #3d85c6;
  font-weight: 600;
`;

export default Logo;
