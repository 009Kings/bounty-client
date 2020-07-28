import React from 'react';
import { Link } from 'react-router-dom';

const Profile = (props) => {
    console.log('💥')
    console.log(props)
    let userData = props.user
      ? <div>
          <h1>Profile</h1>
            <p><strong>Name:</strong> {props.user._doc.name}</p>
            <p><strong>email:</strong> {props.user._doc.email}</p>
            <p><strong>ID:</strong> {props.user._doc._id}</p>
        </div>
      : <h4>Loading...</h4>

      let errorDiv = () => {
        return (
          <div className="error-card"><h3>Please <Link to='/login'>login</Link> to view this page</h3></div>
        )
        }

      return (
        <div>
          {props.user ? userData : errorDiv() }
        </div>
      )
}

export default Profile;