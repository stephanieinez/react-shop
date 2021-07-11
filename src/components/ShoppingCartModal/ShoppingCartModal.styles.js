import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 1em 0;
`;

export const Items = styled.div`
  margin: 5em 0;
`;

export const Image = styled.img`
  max-height: 4em;
  object-fit: contain;
  margin-bottom: 0.5em;
`;

export const Name = styled.span`
  font-size: 0.75rem;
  margin-right: 1em;
`;

export const Price = styled.span`
  font-size: 0.75rem;
`;

export const Total = styled.span`
  align-self: flex-end;
  font-weight: ${({ theme }) => theme.weights.bold};
`;

export const EmptyText = styled.span`
  font-size: 1.5rem;
  margin: 5em 0;
`;

export const StyledDialogOverlay = styled(DialogOverlay)`
  background: hsla(0, 0%, 0%, 0.33);
  position: fixed;
  top: 0;
  left: 0;
  overflow: auto;
  height: 100%;
  width: 100%;
`;

export const StyledDialogContent = styled(DialogContent)`
  background: ${({ theme }) => theme.colors.white};
  overflow: auto;
  height: 100%;
  width: 40%;
  display: flex;
  flex-direction: column;
  padding: 32px;
  margin-left: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    width: 60%;
  }
`;
