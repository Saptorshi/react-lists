import React from 'react';

const User = (props) => {
  return (
    <span>
      <li>Name : {props.children} | Age : {props.age}</li>
      <input type="text" onChange={props.changeName} value={props.children} />
      <button onClick={props.delEvent}>Delete</button>
    </span>
  )
}

export default User;