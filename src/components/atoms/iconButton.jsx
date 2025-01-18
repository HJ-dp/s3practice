/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";

/**
 * iconKey에 'icon name' prop
 * notion, github, React, **/
function IconButton({ iconKey }) {
  const iconMap = {
    Notion: [
      "src/assets/icon/notion.png",
      "https://dynamic-cosmonaut-59e.notion.site/f744ddba8b744caeaa0465174af1f279?pvs=4",
    ],
    Github: ["src/assets/icon/github.png", "https://github.com/HJ-dp"],
    React: [
      "https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png",
      "",
    ],
    Sass: ["https://img.icons8.com/color/48/sass.png", ""],
    Vue: ["https://img.icons8.com/color/48/vue-js.png", ""],
    SpringBoot: ["https://img.icons8.com/color/48/spring-logo.png", ""],
    MySQL: ["https://img.icons8.com/color/48/mysql-logo.png", ""],
    Js: ["https://img.icons8.com/color/48/javascript--v1.png", ""],
    Ts: ["https://img.icons8.com/color/48/typescript.png", ""],
    Java: ["https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png", ""],
    Python: ["https://img.icons8.com/color/48/python.png", ""],
    CloudFront: ["https://img.icons8.com/ios/50/6713d2/aws-cloudfront.png", ""],
    S3: [
      "https://icon.icepanel.io/AWS/svg/Storage/Simple-Storage-Service.svg",
      "",
    ],
    EC2: ["https://icon.icepanel.io/AWS/svg/Compute/EC2.svg", ""],
    Route53: [
      "https://icon.icepanel.io/AWS/svg/Networking-Content-Delivery/Route-53.svg",
      "",
    ],
  };

  const selectedIcon = iconMap[iconKey] ? iconMap[iconKey][0] : "";
  const selectedLink = iconMap[iconKey] ? iconMap[iconKey][1] : "";

  return (
    <>
      {iconMap[iconKey][1] ? (
        <a
          css={b}
          href={selectedLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SImgWrapper ddd={iconKey}>
            <img css={a} src={selectedIcon} alt={iconKey} />
          </SImgWrapper>
        </a>
      ) : (
        <SImgWrapper ddd={iconKey}>
          <SImg src={selectedIcon} alt={iconKey} oops={iconKey} />
        </SImgWrapper>
      )}
    </>
  );
}

export default IconButton;

const b = css`
  width: 30px;
  height: 30px;
`;

const a = css`
  width: 100%;
  height: 100%;
`;

const SImgWrapper = styled.div`
  position: relative;
  display: inline-block; /* 자식 이미지와 함께 보여지도록 */
  &::after {
    content: "${({ ddd }) => ddd}";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 100%;
    height: 10px;
    transform: scaleX(0) translateX(-50%); /* 기본 상태에서 가로 크기를 0으로 설정 */
    transform-origin: bottom right; /* 애니메이션이 오른쪽에서 시작하도록 설정 */
    transition: transform 0.3s ease; /* transform에만 애니메이션 적용 */
  }
  &:hover::after {
    transform: scaleX(1) translateX(-50%); /* hover 시 가로 크기를 100%로 확장 */
    transform-origin: bottom left; /* 애니메이션이 왼쪽에서 시작하도록 설정 */
  }
`;

const SImg = styled.img`
  ${b}
  position: relative;
  transition: transform 0.3s ease; /* 애니메이션 효과 */
  &:hover {
    transform: scale(1.1);
  }
`;
