import React from "react"
import { ThemeContext } from "../themes/themeProvider"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Link = ({ className, to, label }) => {
  const { theme } = React.useContext(ThemeContext)

  return (
    <AniLink
      paintDrip
      className={className}
      to={to}
      hex={theme === "dark" ? "#C4B5FD" : "#A78BFA"}
    >
      <div className="link">{label}</div>
    </AniLink>
  )
}

export default Link
