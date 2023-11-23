import React from 'react'
import { useParams } from 'react-router-dom'
export const Car = () => {
 const { carsId } = useParams()
 console.log(carsId);
  return (
    <div>Car</div>
  )
}
