import React, { useState } from 'react';
import ErrorCard from '../components/ErrorCard';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default function Signup(props) {
  const [newUser, setNewUser] = useState(false);
  const [error, setError] = useState(null);
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })
  
  const handleSubmit = e => {
    e.preventDefault()
    console.log(inputs)
    if (inputs.password === inputs.password2) {
      axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/register`, inputs)
        .then(response => {
          if (response.status === 200) {
            console.log('🦋')
            // Set a variable so we can redirect to the bounties page
            setNewUser(true)
          } else {
            setError(response.statusText)
          }
        })
        .catch(err => setError(err.message))
    } else {
      setError('Passwords must match')
    }
  }

  const handleInputChange = e => {
    e.persist();
    console.log(`Making a change to ${e.target.name}`)
    setInputs({...inputs, [e.target.name]: e.target.value})
  }

  if (newUser) return <Redirect to={`/login`} />

  return (
    <div className="center-flex-column">
      {error ? <ErrorCard error={error} /> : null}
      <h1>Sign Up Form</h1>
      <form className="new-bounty-form" onSubmit={handleSubmit}>
        <div className="bounty-form-field">
          <label>Name: </label>
          <input required type="text" name="name" onChange={handleInputChange} />
        </div>
        <div className="bounty-form-field">
          <label>Email: </label>
          <input required type="email" name="email" onChange={handleInputChange} />
        </div>
        <div className="bounty-form-field">
          <label>Password: </label>
          <input required type="password" name="password" onChange={handleInputChange} />
        </div>
        <div className="bounty-form-field">
          <label>Verify Password: </label>
          <input required type="password" name="password2" onChange={handleInputChange} />
        </div>
        <div className="bounty-form-field">
          <input type="submit" value="Register" />
        </div>
      </form>
    </div>
  )
}
