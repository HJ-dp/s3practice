/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { useOutletContext } from "react-router-dom";
import IconButton from "../atoms/iconButton";
import StackBox from "../atoms/stackBox";

function PreviewPage() {
  const { layoutHeight } = useOutletContext();

  return (
    <Container h={layoutHeight}>
      <Box color="purple" name="image">
        <ImgBox src="/assets/hojinlee.jpg" alt="hojin" />
        <br />
        <TitleP>이호진</TitleP>
        <br />
        <p>1995.02.24</p>
      </Box>
      <Box color="green" name="project">
        <TitleP>프로젝트</TitleP>
        <br />
      </Box>
      <Box color="brown" name="stack">
        <TitleP>기술 스택</TitleP>
        <br />
        <p>FE</p>
        <StackBox>
          <IconButton iconKey={"React"} />
          <IconButton iconKey={"Vue"} />
          <IconButton iconKey={"Sass"} />
        </StackBox>
        <p>BE / DB</p>
        <StackBox>
          <IconButton iconKey={"SpringBoot"} />
          <IconButton iconKey={"MySQL"} />
        </StackBox>
        <p>CI/CD</p>
        <StackBox>
          <IconButton iconKey={"EC2"} />
          <IconButton iconKey={"S3"} />
          <IconButton iconKey={"Route53"} />
          <IconButton iconKey={"CloudFront"} />
        </StackBox>
        <StackBox>
          <IconButton iconKey={"Js"} />
          <IconButton iconKey={"Ts"} />
          <IconButton iconKey={"Java"} />
          <IconButton iconKey={"Python"} />
        </StackBox>
      </Box>
      <Box color="yellow" name="contact">
        <TitleP>contact</TitleP>
        <br />
        <p>010-9544-2218</p>
        <p>skwo777@naver.com</p>
        <StackBox>
          <IconButton iconKey={"Notion"} />
          <IconButton iconKey={"Github"} />
        </StackBox>
      </Box>
      <Box color="pink" name="certi">
        <TitleP>수상 / 자격증</TitleP>
        <br />
        <p>네트워크 관리사 2급</p>
        <p>삼성청년SW아카데미 1학기 프로젝트 우수상</p>
        <p>삼성SW역량테스트 A형</p>
        <p>TOEIC Speaking 130</p>
        <p>JLPT N1</p>
      </Box>
      <Box color="pink" name="edu">
        <TitleP>교육</TitleP>
        <br />
        <p>한국외국어대학교 일본어통번역학과 졸업</p>
        <p>AI융합전공(SW&AI학과) 복수전공</p>
        <br />
        <p>디지털트윈 IT개발자 교육과정 2기 수료</p>
        <LightP>
          -Node.js, Vue.js를 활용한 Back-end, Front-end 웹 개발 기술
        </LightP>
        <LightP>-아두이노, 라즈베리파이를 활용한 IoT 기술</LightP>
        <LightP>-Java Script 언어 활용 및 문법 이해</LightP>
        <LightP>-DB설계와 PostgreSQL</LightP>
        <br />
        <p>삼성청년SW아카데미 10기 수료</p>
        <LightP>-컴퓨팅사고력 및 SW 문제해결 능력 강화</LightP>
        <LightP>-Java 언어 활용 및 문법 이해</LightP>
        <LightP>
          -Spring, Vue.js를 활용한 Back-end, Front-end 웹 개발 기술
        </LightP>
        <LightP>-DB설계와 MySQL</LightP>
      </Box>
    </Container>
  );
}

export default PreviewPage;

const Container = styled.article`
  width: 100%;
  min-height: ${({ h }) => `calc(100vh - ${h}px)`};
  display: grid;
  grid-template-areas:
    "image stack project"
    "image stack project"
    "image stack project"
    "certi edu project"
    "certi edu project"
    "contact edu project";
  @media (min-width: 481px) and (max-width: 1023px) {
    grid-template-areas:
      "image project"
      "certi project"
      "certi project"
      "edu stack"
      "edu stack"
      "contact stack";
  }
  @media (max-width: 480px) {
    grid-template-areas:
      "image"
      "stack"
      "project"
      "certi"
      "edu"
      "contact";
  }
`;

const ImgBox = styled.img`
  max-width: 300px;
  height: auto;
`;

const TitleP = styled.p`
  font-family: "Pretendard-Bold";
`;

const LightP = styled.p`
  font-family: "Pretendard-Light";
  font-size: 13px;
`;

const Box = styled.div`
  grid-area: ${({ name }) => `${name}`};
  border-radius: 0.7rem;
  margin: 0.25rem;
  padding: 0.4rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.1);
  *:not(:first-of-type) {
  }
`;
