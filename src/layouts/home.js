import React from "react"
import { Helmet } from "react-helmet"

const Home = ({ children }) => {
  return (
    <div className="background flex flex-col items-center">
      <Helmet title="Home" />
      <div className="container h-full">
        <div className="paper h-full">{children}</div>
      </div>
    </div>
  )
}

export default Home
