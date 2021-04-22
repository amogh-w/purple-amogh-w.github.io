import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Link from "./Link"

const PublicationCard = ({ publication }) => {
  return (
    <div className="paper grid grid-cols-3">
      <GatsbyImage
        image={getImage(publication.frontmatter.banner)}
        alt="banner"
      />
      <div className="flex flex-col col-span-2 p-4">
        <div className="text-xl md:text-2xl lg:text-3xl pb-2">
          <Link
            to={`/${publication.slug}`}
            label={publication.frontmatter.title}
          />
        </div>
        <div className="text-secondary text-sm lg:text-base font-semibold uppercase pb-2 ">
          {publication.frontmatter.authors}
        </div>
        <div className="text-secondary flex-grow text-sm lg:text-base pb-2">
          {publication.excerpt}
        </div>
        <div className="flex justify-between text-sm lg:text-base font-semibold uppercase">
          <a className="link" href={publication.frontmatter.link}>
            {publication.frontmatter.doi}
          </a>
          <a className="link" href={publication.frontmatter.pdf}>
            PDF
          </a>
        </div>
      </div>
    </div>
  )
}

export default PublicationCard
