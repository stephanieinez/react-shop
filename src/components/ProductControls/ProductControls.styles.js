import styled from "styled-components/macro";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
  max-width: ${({ theme }) => theme.breakpoints.laptop};
  margin: 1em auto;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
`;

export const Text = styled.span``;

export const TitleWrapper = styled.div`
  margin-right: 1em;
`;

export const InputWrapper = styled.div``;

export const Label = styled.label`
  margin-right: 0.5em;
`;

export const Select = styled.select`
  &:not(:last-child) {
    margin-right: 1em;
  }
`;
