import React from "react"
import { ThemeContext } from "../themes/themeProvider"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Link = ({ className, to, href, label }) => {
  const { theme } = React.useContext(ThemeContext)

  return (
    <AniLink
      paintDrip
      className={className}
      to={to}
      href={href}
      hex={theme === "dark" ? "#E9DBF2" : "#D3B5E5"}
    >
      <div className="link">{label}</div>
    </AniLink>
  )
}

export default Link