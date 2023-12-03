import React from 'react'
import {NavLink} from "react-router-dom"
import { useAuth } from '../components/Auth'
export const Header = () => {
  const auth = useAuth()
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/cars">Cars</NavLink>
        <NavLink to="/landCruisers">Land Cruisers</NavLink>
        <NavLink to="/pagination">Pagination</NavLink>
        <NavLink to="/about">About (lazy loading)</NavLink>
        {!auth.user && <NavLink to="/login">Login</NavLink>}
        {auth.user && <NavLink to="/profile">Profile</NavLink>}
      </nav>
    </header>
  )
}
