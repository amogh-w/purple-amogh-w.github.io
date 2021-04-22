import React from "react"
import {
  FaGithub,
  FaHome,
  FaLinkedin,
  FaMedium,
  FaResearchgate,
} from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import {
  SiAmazonaws,
  SiAndroid,
  SiApple,
  SiCircleci,
  SiDocker,
  SiGooglescholar,
  SiGraphql,
  SiJava,
  SiMongodb,
  SiNginx,
  SiPython,
  SiReact,
  SiTensorflow,
  SiTypescript,
} from "react-icons/si"

const TextToIcon = ({ label }) => {
  const icon = () => {
    switch (label) {
      case "home":
        return <FaHome />
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
      case "java":
        return <SiJava />
      case "python":
        return <SiPython />
      case "android":
        return <SiAndroid />
      case "apple":
        return <SiApple />
      case "react":
        return <SiReact />
      case "graphql":
        return <SiGraphql />
      case "mongo":
        return <SiMongodb />
      case "tensorflow":
        return <SiTensorflow />
      case "docker":
        return <SiDocker />
      case "typescript":
        return <SiTypescript />
      case "nginx":
        return <SiNginx />
      case "aws":
        return <SiAmazonaws />
      case "circleci":
        return <SiCircleci />
      default:
        return <h1>error</h1>
    }
  }

  return <div>{icon()}</div>
}

export default TextToIcon
