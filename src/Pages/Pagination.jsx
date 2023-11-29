import React, { useEffect, useState } from 'react'
import { useSearchParams, NavLink } from 'react-router-dom'
export const Pagination = () => {
  const API = "https://jsonplaceholder.typicode.com/posts"

  const [posts, setPosts] = useState([])
  // Fetch Data
  const fetchData = async () => {
    const res = await fetch(API)
    const data = await res.json()
    setPosts(data)
  }

  // setSearchParams
  const [searchParams, setSearchParams] = useSearchParams({page: 1})
  // Get current posts
  const postsPerPage = 10
  let NumberOfPages = Math.ceil(posts.length / postsPerPage)
  NumberOfPages = Array.from({ length: NumberOfPages }, (_, i) => i + 1)
  const indexOfLastPost = postsPerPage * searchParams.get("page")
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div>
      <h2>Pagination (using searchParams)</h2>
      <ul>
        {currentPosts.map((el) => (
          <li key={el.id} style={{ padding: "10px 0" }}>
            {el.id + " " + el.title}
          </li>
        ))}
      </ul>

      {/* Pages */}
      <ul style={{ listStyle: "none", display: "flex" }}>
        {NumberOfPages.map((el) => (
          <button
            key={el.id}
            style={{
              padding: "10px 15px",
              backgroundColor: el == searchParams.get("page") ? "greenyellow" : null
            }}
            onClick={() => setSearchParams({ page: el })}
          >
            {el}
          </button>
        ))}
      </ul>
    </div>
  )
}
