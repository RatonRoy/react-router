import axios from 'axios'
import React, { useEffect, useState } from 'react'
import User from './User'

const Users = () => {
  const [users, setUsers] = useState([])

  const fetchData = async () => {
    try {
      // axios.get(), axios.post(),axios.put(), axios.delete()
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      )

      const usersData = response.data
      setUsers(usersData)

      // console.log(response)
      console.log(usersData)
    } catch (error) {
      console.log(error.response)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className='text-center'>
      <h4> Total Users : {users.length} </h4>

      <div className='users-container'>
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </div>
  )
}

export default Users
