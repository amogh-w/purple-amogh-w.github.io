import React from "react"

const Home = ({ children }) => {
  return (
    <div className="background flex flex-col items-center">
      <div className="container h-full">
        <div className="paper h-full">{children}</div>
      </div>
    </div>
  )
}

export default Home
