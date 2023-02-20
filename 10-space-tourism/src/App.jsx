import Header from "./components/header";
import Travel from "./components/travel";
import styled from "styled-components";
import backgroundImage from "./assets/home/background-home-desktop.jpg";

const BackgroundImage = styled.div`
  /* min-width: 70vw; */
  min-height: 100vh;
  background-image: url(${backgroundImage});
  background-position: center;
  background-size: cover;
  color: white;
`;

function App() {
  return (
    <BackgroundImage>
      <Header />
      <Travel />
    </BackgroundImage>
  );
}

export default App;
