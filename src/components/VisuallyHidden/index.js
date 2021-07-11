import styled from "styled-components/macro";

/**
 * Allows for visually hidden text to be added to components such as
 * icon buttons and links. This provides better accessiblity.
 */
export function VisuallyHidden({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
`;
