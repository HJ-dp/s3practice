/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

function StackBox({ children }) {
  return <Container>{children}</Container>;
}

export default StackBox;

const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  flex-wrap: wrap;
  padding: 1rem;
  margin: 0.5rem;
  width: 100%;
  max-width: 500px;
  display: flex;
  gap: 1em;
  justify-content: center;
  align-items: center;
`;
