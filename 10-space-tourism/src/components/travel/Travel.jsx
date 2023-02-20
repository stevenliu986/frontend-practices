import styled from "styled-components";

const Wrapper = styled.div`
  width: 450px;
  height: 250px;
  display: flex;
  justify-content: space-around;
`;

const Emphasize = styled.div`
  font-size: 48px;
`;

const DetailContent = styled.div`
  color: grey;
`;

const CapWord = styled.div`
  text-transform: uppercase;
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
      <div>Explore</div>
    </Wrapper>
  );
};

export default Travel;
