import React from 'react';
import axios from 'axios';

export default function DeleteButton(props) {
  const handleDelete = e => {
    e.preventDefault()
    axios.delete(`${process.env.REACT_APP_SERVER_URL}/bounties/${props.id}`)
      .then(response => {
        if (response.status === 200) {
          console.log(response.data.message)
          // call refresh with true
          props.toggleRefresh(!props.refresh);
        } else {
          props.setError(response.statusText)
        }
      })
      .catch(err => props.setError(err.message))
  }

  return (
    <form className="delete-bounty-button" onSubmit={handleDelete}>
      <input type="submit" value="Remove this Bounty" />
    </form>
  )
}
