import styled from 'styled-components'
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <LogoContainer>
      <Link to="/"><BlueLabel>Blue</BlueLabel><EconomyLabel>Economy</EconomyLabel></Link>
    </LogoContainer>
  );
}

const LogoContainer = styled.div`

`;

const BlueLabel = styled.span`
  font-size: 1.3rem;
`;

const EconomyLabel = styled.span`
  font-size: 1.3rem;
  color: #3d85c6;
`;

export default Logo;
