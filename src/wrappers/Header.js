import React from 'react';
import Nav from './Nav';

export default function Header(props) {
  return (
    <header className="header">
      <h1>Hello World!</h1>
      <Nav handleLogout={props.handleLogout} isAuthed={props.isAuthed} />
    </header>
  )
}