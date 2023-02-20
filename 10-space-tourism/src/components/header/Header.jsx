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
        <a href="#">
          <li>HOME</li>
        </a>
        <a href="#">
          <li>CREW</li>
        </a>
        <a href="#">
          <li>DESTINATION</li>
        </a>
        <a href="#">
          <li>TECHNOLOGY</li>
        </a>
      </ul>
    </Wrapper>
  );
};

export default Header;
