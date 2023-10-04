import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>

      <Link to='/task'>
        Check my task
      </Link>
    </div>
  )
}

export default Home