import React from 'react'
import {NavLink} from "react-router-dom"
export const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/cars">Cars</NavLink>
        <NavLink to="/landCruisers">Land Cruisers</NavLink>
        <NavLink to="/pagination">Pagination</NavLink>
        <NavLink to="/about">About (lazy loading)</NavLink>
      </nav>
    </header>
  )
}
