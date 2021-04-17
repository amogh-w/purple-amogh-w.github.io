import React from "react"

const Home = ({ children }) => {
  return (
    <div className="background">
      <div className="paper">{children}</div>
    </div>
  )
}

export default Home
