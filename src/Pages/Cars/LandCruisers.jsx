import React from 'react'
import { useNavigate, NavLink, Outlet } from 'react-router-dom'
export const LandCruisers = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h2>Land Cruisers</h2>
      <NavLink to="newCars">New Cars (nested)</NavLink>{" "}
      <NavLink to="brandCars">Brand Cars (nested)</NavLink>
      <hr />
      <Outlet />
      <hr />
      {/*I do not know the reason, but for now it is not working*/}
      <button onClick={() => navigate("/landCruisers", { replace: true })}>
        Leave Website
      </button>{" "}
      {/*Navigate Back*/}
      <button onClick={() => navigate(-1)}>Move Back</button>
    </div>
  )
}
