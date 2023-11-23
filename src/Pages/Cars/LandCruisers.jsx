import React from 'react'
import { useNavigate, Link, Outlet } from 'react-router-dom'
export const LandCruisers = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h2>Land Cruisers</h2>
      {/*Navigate Back*/}
      <Link to="newCars">New Cars (nested)</Link>{" "}
      <Link to="brandCars">Brand Cars (nested)</Link>
     
      <hr />
      <Outlet />
      <hr />
      {/*I do not know the reason, but for now it is not working*/}
      <button onClick={() => navigate("/landCruisers", { replace: true })}>
        Leave Website
      </button>{" "}
      <button onClick={() => navigate(-1)}>Move Back</button>
    </div>
  )
}
