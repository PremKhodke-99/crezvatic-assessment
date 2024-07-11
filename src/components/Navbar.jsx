import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = ({ user, handleLogout }) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  }

  return (
    <nav className='navbar'>
      <h1 onClick={handleClick}>Shopping Site</h1>
      {
        user ? (
          <div className='buttons'>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div className='buttons'>
            <button onClick={() => navigate('/login')}>Login</button>
            <button onClick={() => navigate('/register')}>Register</button>
          </div>
        )
      }
    </nav>
  )
}

export default Navbar