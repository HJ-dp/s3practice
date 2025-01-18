/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useState, useRef, useEffect } from "react";
import { Outlet } from "react-router";

function DefaultLayout() {
  const [layoutHeight, setlayoutHeight] = useState(0);
  const divRef = useRef(null);

  useEffect(() => {
    if (divRef.current) {
      setlayoutHeight(divRef.current.offsetHeight);
    }
  }, []);

  return (
    <div css={over}>
      <Box />
      <Box2 />
      <Box3 />
      <div ref={divRef}></div>
      <main>
        <Outlet context={{ layoutHeight }} />
      </main>
    </div>
  );
}

export default DefaultLayout;

const over = css`
  position: relative;
  overflow: hidden;
`;

const backgroundCss = css`
  position: absolute;
  border-radius: 100rem;
  filter: blur(120px);
  @supports not (filter: blur(150px)) {
    .blurred-border {
      display: none; /* 필터를 지원하지 않는 브라우저에서 숨기기 */
    }
  }
  z-index: -1;
`;

const Box = styled.div`
  width: 500px;
  height: 500px;
  background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
  left: 60%;
  top: 10%;
  ${backgroundCss}
`;
const Box2 = styled.div`
  width: 500px;
  height: 500px;
  background-color: #a7e0c8;
  left: -10%;
  top: 80%;
  ${backgroundCss}
`;

const Box3 = styled.div`
  width: 300px;
  height: 300px;
  background-image: linear-gradient(to top, #9795f0 0%, #fbc8d4 100%);
  left: 30%;
  top: 10%;
  ${backgroundCss}
`;
