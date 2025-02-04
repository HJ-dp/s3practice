import { css } from "@emotion/react";

export const globalFont = css`
  @font-face {
    font-family: "Pretendard-Light";
    src: url("/fonts/Pretendard-Light.woff2") format("woff2");
    font-weight: 100;
    font-style: Light;
  }

  @font-face {
    font-family: "Pretendard-Regular";
    src: url("/fonts/Pretendard-Regular.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "Pretendard-Bold";
    src: url("/fonts/Pretendard-Bold.woff2") format("woff2");
    font-weight: 700;
    font-style: Bold;
  }
`;

export const globalCss = css`
  body {
    background-color: #000000;
    & * {
      box-sizing: border-box;
    }
  }

  /* 폰트 초기화 */
  body,
  input,
  textarea,
  select,
  button,
  table {
    font-family: "Pretendard-Regular";
  }

  /* 여백 초기화 */
  body,
  div,
  ul,
  li,
  dl,
  dd,
  dt,
  ol,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  fieldset,
  legend,
  p,
  select,
  table,
  th,
  td,
  tr,
  textarea,
  button,
  form,
  figure,
  figcaption {
    margin: 0;
    padding: 0;
  }
`;

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const flexCenterColumn = css`
  ${flexCenter}
  flex-direction: column;
`;
