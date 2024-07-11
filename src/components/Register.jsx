import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {

  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    password: ''
  })

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const response = await axios.post('https://crezvatic-assessment.onrender.com/user/register', userDetails);
    const data = await response.data;
    console.log(data);
    if (data.success) {
      navigate('/login')
    } else {
      alert(data.message);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value
    });
  }

  return (
    <div className='form'>
      <div className='login'>
        <h1>Registration Page</h1>
        <form method='post' onSubmit={handleRegister}>
          <div>
            <input
              type="text"
              id='name'
              placeholder='Enter your name'
              name='name'
              value={userDetails.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              type="email"
              id='email'
              placeholder='Enter your email'
              name='email'
              value={userDetails.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              type="password"
              id='password'
              placeholder='Enter your password'
              name='password'
              value={userDetails.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type='submit'>Sign Up</button>
          <p>Already Registered <Link to={'/login'}>Click here</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Register