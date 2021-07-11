import styled from "styled-components/macro";

export const Wrapper = styled.div`
  padding: 1em;
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding: 1em;
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  max-width: ${({ theme }) => theme.breakpoints.laptop};
  margin: 0 auto;
`;
