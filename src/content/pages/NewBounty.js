import React, { useState } from 'react';
import ErrorCard from '../components/ErrorCard';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default function NewBounty(props) {
  const [bountyCreated, setBountyCreated] = useState(false);
  const [error, setError] = useState(null);
  const [inputs, setInputs] = useState({
    name: '',
    wantedFor: ''
  })
  
  const handleSubmit = e => {
    e.preventDefault()
    console.log(inputs)
    axios.post(`${process.env.REACT_APP_SERVER_URL}/bounties`, inputs)
      .then(response => {
        if (response.status === 200) {
          console.log('🦋')
          // Set a variable so we can redirect to the bounties page
          setBountyCreated(true)
        } else {
          setError(response.statusText)
        }
      })
      .catch(err => setError(err.message))
  }

  const handleInputChange = e => {
    e.persist();
    console.log(`Making a change to ${e.target.name}`)
    setInputs({...inputs, [e.target.name]: e.target.value})
  }

  if (bountyCreated) return <Redirect to={`/bounties`} />

  return (
    <div className="center-flex-column">
      {error ? <ErrorCard {...error} /> : null}
      <h1>Bounty Intake Form</h1>
      <form className="new-bounty-form" onSubmit={handleSubmit}>
        <div className="bounty-form-field">
          <label>Criminal Name: </label>
          <input required type="text" name="name" onChange={handleInputChange} />
        </div>
        <div className="bounty-form-field">
          <label>Wanted For: </label>
          <input required type="text" name="wantedFor" onChange={handleInputChange} />
        </div>
        <div className="bounty-form-field">
          <label>Client: </label>
          <input type="text" name="client" onChange={handleInputChange} />
        </div>
        <div className="bounty-form-field">
          <label>Reward: </label>
          <input type="number" name="reward" onChange={handleInputChange} />
        </div>
        <div className="bounty-form-field">
          <label>Ship Name: </label>
          <input type="text" name="ship" onChange={handleInputChange} />
        </div>
        <div className="bounty-form-field">
          <label>Last Seen: </label>
          <input type="text" name="lastSeen" onChange={handleInputChange} />
        </div>
        <div className="bounty-form-field">
          <label>Hunters: </label>
          <input type="text" name="hunters" onChange={handleInputChange} />
        </div>
        <div className="bounty-form-field">
          <input type="submit" value="Submit Bounty" />
        </div>
      </form>
    </div>
  )
}

// name!
// wantedFor!
// client
// ship
// reward
// hunters: Array,
// lastSeen