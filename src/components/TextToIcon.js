import React from "react"
import { FaArrowLeft } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaMedium } from "react-icons/fa"
import { SiGooglescholar } from "react-icons/si"
import { FaResearchgate } from "react-icons/fa"

const TextToIcon = ({ label }) => {
  const icon = () => {
    switch (label) {
      case "leftarrow":
        return <FaArrowLeft />
      case "email":
        return <MdEmail />
      case "github":
        return <FaGithub />
      case "linkedin":
        return <FaLinkedin />
      case "medium":
        return <FaMedium />
      case "googlescholar":
        return <SiGooglescholar />
      case "researchgate":
        return <FaResearchgate />
      default:
        return <h1>error</h1>
    }
  }

  return <div>{icon()}</div>
}

export default TextToIcon
