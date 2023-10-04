import React from 'react'
import { Link } from 'react-router-dom'

const Task = () => {
  return (
    <div>
      <h1>Welcome to my Task Page</h1>

      <Link to='/'>
        Go back home
      </Link>
    </div>
  )
}

export default Task