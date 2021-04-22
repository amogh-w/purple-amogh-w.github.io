import React from "react"
import General from "../layouts/general"

const NotFound = () => {
  return (
    <General title="Error">
      <p className="text-secondary text-3xl md:text-4xl lg:text-5xl">
        Page not found!
      </p>
    </General>
  )
}

export default NotFound
