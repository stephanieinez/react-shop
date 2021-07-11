import styled from "styled-components/macro";

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.gray[700]};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  cursor: pointer;
  padding: 0.5em 0;
  font-weight: ${({ theme }) => theme.weights.medium};

  &:disabled {
    cursor: revert;
    background-color: ${({ theme }) => theme.colors.gray[300]};
  }
`;
