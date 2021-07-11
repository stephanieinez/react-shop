import styled from "styled-components/macro";

export const Wrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.gray[700]};
  padding: 0.5em 1em;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.laptop};
  margin: 0 auto;
`;
