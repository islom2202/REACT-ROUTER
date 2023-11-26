import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
export const Pagination = () => {
  const API = "https://jsonplaceholder.typicode.com/posts"
  const [posts, setPosts] = useState([])
  const fetchData = async() => {
    const res = await fetch(API)
    const data = await res.json()
    setPosts(data)
  } 
  const [searchParams, setSearchParams] = useSearchParams()
  
  useEffect(()=>{fetchData()}, [])
  return (
    <div>
      <h2>Pagination (using searchParams)</h2>
      <ul>
        {posts.map(el => (
          <li key={el.id} style={{padding: '10px 0'}}>{el.title}</li>
        ))}
      </ul>
    </div>
  )
}
