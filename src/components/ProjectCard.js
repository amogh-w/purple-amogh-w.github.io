import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Link from "./Link"
import TextToIcon from "./TextToIcon"

const ProjectCard = ({ project }) => {
  return (
    <div className="paper">
      <div className="h-56 flex relative">
        <GatsbyImage
          image={getImage(project.frontmatter.banner)}
          alt="banner"
        />
        <div className="h-full w-full absolute opacity-0 hover:opacity-80 text-sm  bg-contain bg-white dark:bg-gray-800 transition-all">
          <div className="h-full w-full flex items-center justify-center text-gray-700 dark:text-gray-300 text-3xl transform hover:scale-110 transition-all">
            {project.frontmatter.tech.split(" ").map((tech, idx) => {
              return (
                <div key={idx} className="m-2">
                  <TextToIcon label={tech} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between text-xl md:text-2xl lg:text-3xl pb-2">
          <Link to={`/${project.slug}`} label={project.frontmatter.title} />
          <div className="m-2">
            <a className="link" href={project.frontmatter.github}>
              <TextToIcon label="github" />
            </a>
          </div>
        </div>
        <div className="text-secondary text-sm lg:text-base">
          {project.excerpt}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
