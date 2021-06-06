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
  SiArchlinux,
  SiCircleci,
  SiCss3,
  SiDebian,
  SiDocker,
  SiFirebase,
  SiGit,
  SiGnubash,
  SiGnuemacs,
  SiGooglescholar,
  SiGraphql,
  SiHtml5,
  SiJava,
  SiJavascript,
  SiJenkins,
  SiLatex,
  SiMongodb,
  SiMysql,
  SiNginx,
  SiNodeDotJs,
  SiPerl,
  SiPostgresql,
  SiPython,
  SiR,
  SiReact,
  SiRuby,
  SiTensorflow,
  SiTypescript,
  SiVim,
  SiWindows,
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
      case "r":
        return <SiR />
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
      case "jenkins":
        return <SiJenkins />
      case "firebase":
        return <SiFirebase />
      case "html":
        return <SiHtml5 />
      case "css":
        return <SiCss3 />
      case "javascript":
        return <SiJavascript />
      case "node":
        return <SiNodeDotJs />
      case "mysql":
        return <SiMysql />
      case "postgresql":
        return <SiPostgresql />
      case "git":
        return <SiGit />
      case "windows":
        return <SiWindows />
      case "debian":
        return <SiDebian />
      case "arch":
        return <SiArchlinux />
      case "vim":
        return <SiVim />
      case "emacs":
        return <SiGnuemacs />
      case "perl":
        return <SiPerl />
      case "ruby":
        return <SiRuby />
      case "bash":
        return <SiGnubash />
      case "latex":
        return <SiLatex />
      default:
        return <h1>error</h1>
    }
  }

  return <div>{icon()}</div>
}

export default TextToIcon
