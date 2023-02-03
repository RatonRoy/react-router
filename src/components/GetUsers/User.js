import React from 'react'
import './User.css'

const User = ({ user }) => {
  const { name, email } = user
  return (
    <div className='user-container'>
      <h4> {name} </h4>
      <p className='small'> {email} </p>
      <button className='btn'> More Info </button>
    </div>
  )
}

export default User
