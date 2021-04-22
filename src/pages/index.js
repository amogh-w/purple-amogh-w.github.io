import React from "react"
import Home from "../layouts/home"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import TextToIcon from "../components/TextToIcon"
import ThemeToggle from "../components/ThemeToggle"
import Link from "../components/Link"

const profileData = {
  name: "Amogh Warkhandkar",
  tagline: "Student & Developer",
  socialLinks: [
    {
      id: 1,
      label: "email",
      href: "mailto:amoghw2025@gmail.com",
    },
    {
      id: 2,
      label: "github",
      href: "https://github.com/amogh-w",
    },
    {
      id: 3,
      label: "linkedin",
      href: "https://www.linkedin.com/in/amogh-w/",
    },
    {
      id: 4,
      label: "medium",
      href: "https://medium.com/@amoghw2025",
    },
    {
      id: 5,
      label: "googlescholar",
      href: "http://scholar.google.com/citations?user=9refg3wAAAAJ&hl=en",
    },
    {
      id: 6,
      label: "researchgate",
      href: "https://www.researchgate.net/profile/Amogh_Warkhandkar",
    },
  ],
}

const navLinks = [
  {
    id: 1,
    label: "About",
    href: "/about",
  },
  {
    id: 2,
    label: "Experience",
    href: "/experience",
  },
  {
    id: 3,
    label: "Projects",
    href: "/projects",
  },
  {
    id: 4,
    label: "Publications",
    href: "/publications",
  },
]

const Index = ({ data }) => {
  return (
    <Home>
      <div className="h-full flex flex-col justify-around">
        <div className="flex flex-col items-center">
          <div>
            <GatsbyImage
              className="border-0 rounded-full shadow w-40 md:w-50 lg:w-60"
              image={getImage(data.profile)}
              alt="profile"
            />
          </div>
          <p className="text-3xl md:text-4xl lg:text-5xl pt-2">
            {profileData.name}
          </p>
          <p className="text-secondary text-1xl md:text-2xl lg:text-3xl pb-2">
            {profileData.tagline}
          </p>
          <div className="flex justify-center text-2xl md:text-3xl lg:text-4xl">
            {profileData.socialLinks.map(link => {
              return (
                <div className="m-2" key={link.id}>
                  <a className="link" href={link.href}>
                    <TextToIcon label={link.label} />
                  </a>
                </div>
              )
            })}
          </div>
        </div>
        <div className="flex flex-col items-center text-2xl md:text-3xl lg:text-4xl italic font-bold">
          {navLinks.map(link => {
            return <Link key={link.id} to={link.href} label={link.label} />
          })}
        </div>
        <div className="flex flex-col items-center text-2xl md:text-3xl lg:text-4xl">
          <ThemeToggle className="link" />
        </div>
      </div>
    </Home>
  )
}

export const query = graphql`
  query Index {
    profile: file(relativePath: { eq: "profile.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
  }
`

export default Index
