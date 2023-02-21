import styled from "styled-components";

const Wrapper = styled.div`
  width: 550px;
  height: 250px;
  display: flex;
  justify-content: space-around;
  margin: 450px 0 0 250px;
`;

const Emphasize = styled.div`
  font-size: 64px;
  text-transform: uppercase;
  letter-spacing: 3px;
`;

const DetailContent = styled.div`
  color: grey;
`;

const CapWord = styled.div`
  text-transform: uppercase;
  color: grey;
  letter-spacing: 3px;
`;

const Button = styled.div`
  font-size: 32px;
  padding: 25px 0 0 100px;
  color: black;
`;

const Travel = () => {
  return (
    <Wrapper>
      <div>
        <CapWord>So, you want to travel to</CapWord>
        <Emphasize>Space</Emphasize>
        <DetailContent>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </DetailContent>
      </div>
      <Button>Explore</Button>
    </Wrapper>
  );
};

export default Travel;
