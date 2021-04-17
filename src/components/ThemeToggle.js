import React from "react"
import { ThemeContext } from "../themes/themeProvider"
import { MdBrightness2 } from "react-icons/md"
import { MdBrightness5 } from "react-icons/md"

const ThemeToggle = ({ className }) => {
  const { theme, setTheme } = React.useContext(ThemeContext)

  return (
    <button
      className={className}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <MdBrightness5 /> : <MdBrightness2 />}
    </button>
  )
}

export default ThemeToggle
