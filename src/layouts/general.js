import React from "react"

const General = ({ children }) => {
  return (
    <div className="background">
      <div className="paper">{children}</div>
    </div>
  )
}

export default General
