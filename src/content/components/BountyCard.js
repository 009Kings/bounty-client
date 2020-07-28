import React from 'react';
import DeleteButton from './DeleteButton';

export default function BountyCard(props) {
  const hunterList = props.hunters.length > 0 
    ? props.hunters.map((hunter, i) => (
      <li key={`hunter-${i}`} className="hunter">
        {hunter}
      </li>
    ))
    : <li className="hunter">No hunters Assigned</li>

    const captured = <span className="green">CAPTURED</span>;
    const atLarge = <span className="red">STILL AT LARGE</span>;

  return (
    <div className="bounty-card">
      <h3>{props.name} is {props.captured ? captured : atLarge}</h3>
      <h5>Wanted for {props.wantedFor}</h5>
      <p>Bounty posted by: {props.client}</p>
      <p>Reward: {props.reward}</p>
      {props.lastSeen ? <p>{`Last seen ${props.lastSeen}`}</p> : null}
      {props.ship ? <p>{`Currently using ${props.ship} as transportation`}</p> : null}

      <ul>
        {hunterList}
      </ul>
      <DeleteButton id={props._id} toggleRefresh={props.toggleRefresh} refresh={props.refresh} setError={props.setError} />
    </div>
  )
}
