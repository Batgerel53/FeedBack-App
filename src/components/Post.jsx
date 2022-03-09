import React from 'react'
import { Navigate, useNavigate, Routes, Route } from 'react-router-dom'

function Post() {
  const navigate = useNavigate()

  const onClick = () => {
    navigate('/about')
    console.log('hello')
  }

  const status = 200

  if (status === 404) {
    return <Navigate to="Notfound" />
  }

  return (
    <div>
      Post
      <button onClick={onClick}>Click</button>
      <Routes>
        <Route path="/show" element={<h1>Hello world</h1>} />
      </Routes>
    </div>
  )
}

export default Post
