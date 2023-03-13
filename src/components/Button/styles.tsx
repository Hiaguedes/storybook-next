import styled from "@emotion/styled";

export const ButtonBase = styled.button`
  cursor: pointer;
  padding: 8px 14px;
  transition: 0.3s;
  background-color: ${({ theme }) => theme.colors.primary.main};
  border: 1px solid black;
  color: ${({ theme }) => theme.colors.primary.text};

  :hover {
    background-color: ${({ theme }) => theme.colors.primary.dark};
  }
`;
