/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { useOutletContext } from "react-router-dom";

function MainPage() {
  const { layoutHeight } = useOutletContext();
  return (
    <Container h={layoutHeight}>
      <spline-viewer url="https://prod.spline.design/gPap5rmtqg8zbOYg/scene.splinecode"></spline-viewer>
      <ButtonToDownload href="/assets/Hojin_Lee_resume.pdf" target="_blank">
        Download Resume
      </ButtonToDownload>
    </Container>
  );
}

export default MainPage;

const Container = styled.article`
  position: relative;
  width: 100%;
  min-height: ${({ h }) => `calc(100vh - ${h}px)`};
  display: grid;
  overflow: hidden;
  & > :first-child {
    height: 110vh;
  }

  @media (min-width: 481px) and (max-width: 1023px) {
  }
  @media (max-width: 480px) {
  }
`;

const ButtonToDownload = styled.a`
  position: absolute;
  top: 60%;
  background-color: rgba(255, 255, 255, 0.6);
  padding: 1.5rem;
  border-radius: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
  text-decoration: none;
  border: 1px black solid;
  color: black;
  place-self: center;
`;
