import logo from "../../assets/shared/logo.svg";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  color: white;
`;

const Header = () => {
  return (
    <Wrapper>
      <img src={logo} alt="logo" />
      <ul>
        <li>HOME</li>
        <li>CREW</li>
        <li>DESTINATION</li>
        <li>TECHNOLOGY</li>
      </ul>
    </Wrapper>
  );
};

export default Header;
