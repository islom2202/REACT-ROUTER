import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
export const Cars = () => {
  // For programmtaic navigation we first define funct
  const navigate = useNavigate()
   let [data, setData] = useState([])
   const fetchData = async () => {
     try {
       let response = await fetch("../db.json")
       let fetchedData = await response.json()
       setData(fetchedData.landCruisers)
     } catch (error) {
       console.log("Error fetching data: ", error)
     }
   }
   // destructure param 
   const {carsId} = useParams()
   useEffect(() => {fetchData()},[])
  return (
    <section className="cars">
      {/* We call navigate function here*/}
      <button onClick={() => navigate("/landCruisers")}>
        Land Cruisers &#x2192; (Programmtatic navigation)
      </button>
      <ul>
        {data.map((car) => (
          // ID PARAMS
          <li key={car.id} onClick={() => navigate(`/${car.id}`)}>
            <img src={car.image} alt={car.name} />
            {car.name + " " + ("by ID")}
            {}
          </li>
        ))}
      </ul>
    </section>
  )
}
