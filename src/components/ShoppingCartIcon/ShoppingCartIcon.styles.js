import styled from "styled-components/macro";

export const Wrapper = styled.button`
  position: relative;
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;

  &:focus {
    outline-offset: 2px;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }
`;

export const Number = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.white};
  width: 1rem;
  height: 1rem;
  top: 10px;
  left: 9px;
  font-size: 0.75rem;
  font-weight: ${({ theme }) => theme.weights.bold};
`;
