/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { PageURL } from "../../router/pageURL";
import { useOutletContext } from "react-router-dom";

function MainPage() {
  const { layoutHeight } = useOutletContext();
  return (
    <Container h={layoutHeight}>
      <spline-viewer url="https://prod.spline.design/KhannZfmkh4WOPsh/scene.splinecode"></spline-viewer>
      {/* <spline-viewer url="https://prod.spline.design/cMp5lhzQNESducgn/scene.splinecode"></spline-viewer> */}
      {/* <ButtonToDownload
        href="https://file.notion.so/f/f/aa2a3bfb-28da-459b-8276-8dd35b3ebcb8/f54c63c8-67fa-465e-81a6-238149312e87/Hojin_Lee_resume.pdf?table=block&id=18539da0-14f7-80ea-8687-f12cf81695a8&spaceId=aa2a3bfb-28da-459b-8276-8dd35b3ebcb8&expirationTimestamp=1738339200000&signature=xz5YOcPAcfeLcw2t57z0WdjbltHAyZv97rjiI-6pbMg&downloadName=Hojin_Lee_resume.pdf"
        download={"resume_hojinlee"}
        target="_blank"
        role="button"
      >
        Download Resume
      </ButtonToDownload> */}
    </Container>
  );
}

export default MainPage;

const Container = styled.article`
  position: relative;
  width: 100%;
  /* height: 100%; */
  min-height: ${({ h }) => `calc(100vh - ${h}px)`};
  display: grid;
  /* place-content: center; */
  overflow: hidden;
  * > {
    height: 100%;
  }
  @media (min-width: 481px) and (max-width: 1023px) {
  }
  @media (max-width: 480px) {
  }
`;

const ButtonToDownload = styled.a`
  background-color: transparent;
  padding: 1.5rem;
  border-radius: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
  text-decoration: none;
  border: 1px black solid;
  color: black;
  place-self: center;
`;
