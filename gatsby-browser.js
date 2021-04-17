import React from "react"
import { ThemeProvider } from "./src/themes/themeProvider"
import "./src/styles/global.css"

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>
}
