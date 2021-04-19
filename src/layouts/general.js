import React from "react"
import { Helmet } from "react-helmet"
import Navbar from "../components/Navbar"

const General = ({ title, children }) => {
  return (
    <div className="background flex flex-col items-center">
      <Helmet title={title} />
      <Navbar title={title} />
      <div className="container overflow-auto no-scrollbar">
        <div className="md:flex flex-col items-center mt-20 mb-6 p-4">
          {children}
        </div>
      </div>
    </div>
  )
}

export default General
