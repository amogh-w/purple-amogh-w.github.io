import React from "react"
import TextToIcon from "./TextToIcon"

const data = [
  "python",
  "r",
  "tensorflow",
  "docker",
  "circleci",
  "jenkins",
  "aws",
  "html",
  "css",
  "javascript",
  "typescript",
  "react",
  "node",
  "mysql",
  "postgresql",
  "mongo",
  "graphql",
  "git",
  "windows",
  "apple",
  "debian",
  "arch",
  "vim",
  "emacs",
  "perl",
  "ruby",
  "bash",
  "latex",
]

const Skills = () => {
  return (
    <div className="container flex flex-wrap text-secondary text-3xl md:text-4xl lg:text-5xl">
      {data.map(data => {
        return (
          <div className="ml-2 mt-2">
            <TextToIcon label={data} />
          </div>
        )
      })}
    </div>
  )
}

export default Skills
