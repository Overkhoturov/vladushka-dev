'use client'
import { lightTheme } from "@/lib/ThemeConfig";
// import { GlobalStyles } from '../lib/ThemeConfig';
import { ThemeProvider as StyledThemeProvider  } from "styled-components";
// import { createContext } from 'react'
 
// export const ThemeContext = createContext({})
 
const ThemeProvider = ({
  children,
}: {
  children: React.ReactNode
}) => (
  <StyledThemeProvider theme={lightTheme}>
    {/* <GlobalStyles /> */}
    {children}
  </StyledThemeProvider>
)

export default ThemeProvider;
