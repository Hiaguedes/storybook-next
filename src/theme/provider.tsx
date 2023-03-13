import theme from ".";
import { ThemeProvider as StyledThemeProvider } from '@emotion/react'
import { FC, PropsWithChildren } from "react";
import React from "react";

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => (
  <StyledThemeProvider theme={theme}>
    {children}
  </StyledThemeProvider>
)

export default ThemeProvider
