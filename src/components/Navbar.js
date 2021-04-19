import React from "react"
import Link from "../components/Link"
import TextToIcon from "../components/TextToIcon"
import ThemeToggle from "../components/ThemeToggle"

const Navbar = ({ title }) => {
  return (
    <div className="fixed paper z-50 w-full flex items-center justify-between text-xl md:text-2xl lg:text-3xl pl-8 pr-8 pt-2 pb-2">
      <Link to="/" label={<TextToIcon label="leftarrow" />} />
      <p className="nav-text text-2xl md:text-3xl lg:text-4xl italic font-bold">
        {title}
      </p>
      <ThemeToggle className="link" />
    </div>
  )
}

export default Navbar
