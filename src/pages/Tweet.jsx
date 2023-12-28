import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #86618f;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TContainer = styled.div`
  width: 15vw;
  height: 25vh;
  background-color: white;
  border-radius: 10px;
`;
const PContainer = styled.div`
  background-color: #86618f74;
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: start;
  align-items: center;
`;
const MContainer = styled.div`
  width: 100%;
  height: 60%;
  padding: 2rem 1rem;
`;
const DContainer = styled.div`
  width: 100%;
  height: 15%;
`;
const Profile = styled.div`
  width: 70px;
  height: 70px;
  background-color: white;
  border-radius: 50%;
  margin: 0 2rem;
  margin-top: -9px;
  margin-bottom: 1rem;
`;
const PText = styled.h3`
  font-family: sans-serif;
  font-size: 1rem;
`;
const MText = styled.h3`
  font-family: sans-serif;
`;
const Divider = styled.div`
  background-color: #0000001f;
  height: 1px;
  margin: 0rem 1rem;
`;
const DText = styled.p`
  font-family: sans-serif;
  font-size: 0.8rem;
  color: #4c3352ad;
  height: 100%;
  width: 100%;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: start;
  margin-left: 1rem;
  font-weight: 600;
`;

const Tweet = () => {
  return (
    <Container>
      <TContainer>
        <PContainer>
          <Profile></Profile>
          <PText>MummySlaps</PText>
        </PContainer>
        <MContainer>
          <MText>
            Build a Twitter/Animal-Crossing hybrid! A social network for animals
            called Critter
          </MText>
        </MContainer>
        <DContainer>
          <Divider></Divider>
          <DText>
            {" "}
            Posted,{" "}
            <time dateTime="2024-01-01T00:00:00.000Z">
              January 1st at 12:00am
            </time>
          </DText>
        </DContainer>
      </TContainer>
    </Container>
  );
};

export default Tweet;
