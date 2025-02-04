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
