import React, { useState } from 'react';
import ErrorCard from '../components/ErrorCard';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../../utils/setAuthToken';

export default function Login(props) {
  console.log(props)
  const [error, setError] = useState(null);
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  })
  
  const handleSubmit = e => {
    e.preventDefault()
    console.log(inputs)
    axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/login`, inputs)
      .then(response => {
        console.log(response)
        const { token } = response.data;
        // Save to LocalStorage
        localStorage.setItem('jwtToken', token);
        // Set token to Auth Header
        setAuthToken(token);
        // Decode token to get user data
        const decoded = jwt_decode(token);
        // Set current user
        props.nowCurrentUser(decoded);
      })
      .catch(err => {
        console.log(err)
        setError(err.message)
      })
  }

  const handleInputChange = e => {
    e.persist();
    console.log(`Making a change to ${e.target.name}`)
    setInputs({...inputs, [e.target.name]: e.target.value})
  }

  if (props.user) return <Redirect to={`/profile`} user={props.user} />

  return (
    <div className="center-flex-column">
      {error ? <ErrorCard error={error} /> : null}
      <h1>Login Form</h1>
      <form className="new-bounty-form" onSubmit={handleSubmit}>
        <div className="bounty-form-field">
          <label>Email: </label>
          <input required type="email" name="email" onChange={handleInputChange} />
        </div>
        <div className="bounty-form-field">
          <label>Password: </label>
          <input required type="password" name="password" onChange={handleInputChange} />
        </div>
        <div className="bounty-form-field">
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  )
}
