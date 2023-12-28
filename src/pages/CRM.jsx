import PropTypes from "prop-types";
import styled from "styled-components";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #c8a412;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
`;
const LiContainer = styled.li`
  background-color: #fff;
  width: 30vw;
  height: 20%;
  display: flex;
  justify-content: start;
  align-items: center;
  align-content: center;
  flex-direction: column;
  margin: 1rem;
  border-radius: 15px;
  padding: 2rem;
`;
const Dl = styled.dl`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
const Dt = styled.dt`
  color: #6b4e1b;
  font-weight: bold;
`;
function CRM(props) {
  const { name, job, email } = props.CRMData;
  return (
    <Container>
      <ul>
        {name.map((item, index) => (
          <LiContainer className="contact-card" key={index}>
            <h2>{name[index]}</h2>
            <Dl>
              <Dt>Job</Dt>
              <dd>{job[index]}</dd>
              <Dt>Email</Dt>
              <dd>{email[index]}</dd>
            </Dl>
          </LiContainer>
        ))}
      </ul>
    </Container>
  );
}
CRM.propTypes = {
  props: PropTypes.node,
};
export default CRM;
