import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = ({ updateLogin }) => {
  const [userDetails, setUserDetails] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await axios.post('https://crezvatic-assessment.onrender.com/user/login', userDetails);
    const data = await response.data;

    if (data.success) {
      updateLogin(data.user);
      navigate('/')
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
        <h1>Login Page</h1>
        <form method='post' onSubmit={handleLogin}>
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
          <button type='submit'>Login</button>
          <p>Not Registered <Link to={'/register'}>Click here</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Login