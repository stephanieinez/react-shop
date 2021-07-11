import styled from "styled-components/macro";

export const Link = styled.a`
  text-decoration: none;
  color: inherit;
  margin-bottom: 1em;
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 1em;
`;

export const Image = styled.img`
  width: 100%;
  max-height: 20em;
  object-fit: contain;
  margin-bottom: 0.5em;
`;

export const Name = styled.h3``;

export const Price = styled.span``;

export const Sizes = styled.span``;
