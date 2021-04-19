import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Link from "./Link"
import TextToIcon from "./TextToIcon"

const ProjectCard = ({ project }) => {
  return (
    <div className="paper">
      <div className="h-56 flex ">
        <GatsbyImage
          className="object-cover"
          image={getImage(project.frontmatter.banner)}
          alt="banner"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between text-xl md:text-2xl lg:text-3xl pb-2">
          <Link to={`/${project.slug}`} label={project.frontmatter.title} />
          <Link
            href={project.frontmatter.githubLink}
            label={<TextToIcon label="github" />}
          />
        </div>
        <div className="text-secondary text-sm md:text-sm lg:text-sm">
          {project.excerpt}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
