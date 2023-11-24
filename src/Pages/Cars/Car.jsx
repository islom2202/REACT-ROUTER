import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
export const Car = () => {
 const { carsId } = useParams()
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
useEffect(() => {
  fetchData()
}, [])
  return (
    <div>
      <ul>
        {data.map(el => el.id == carsId ? (
          <li>
            <img src={el.image} alt="" />
            <h3>{el.name}</h3>
            <p>{el.description}</p>
          </li>
        ):null)}
      </ul>
    </div>
  )
}
