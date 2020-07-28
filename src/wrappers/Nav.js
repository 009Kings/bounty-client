import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav(props) {
  // if authed, return link to profile and logout
  // else: login and sign up

  let conditionalLinks = props.isAuthed ? (
    <>
    <li className="nav-link">
      <Link to="/profile" className="link">Profile</Link>
    </li>
    <li className="nav-link">|</li>
    <li className="nav-link">
      <a href='#' onClick={props.handleLogout} className="link">Logout</a>
    </li>
    </>
  ) : (
    <>
    <li className="nav-link">
      <Link to="/signup" className="link">Register</Link>
    </li>
    <li className="nav-link">|</li>
    <li className="nav-link">
      <Link to="/login" className="link">Login</Link>
    </li>
    </>
  )

  return (
    <nav>
      <ul className="nav">
        <li className="nav-link">
          <Link to="/" className="link">Home</Link>
        </li>
        <li className="nav-link">|</li>
        <li className="nav-link">
          <Link to="/bounties" className="link">Definitely not intergalactic bounties</Link>
        </li>
        <li className="nav-link">|</li>
        {conditionalLinks}
      </ul>
    </nav>
  )
}