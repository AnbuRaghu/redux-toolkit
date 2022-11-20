import React from 'react'
import {useSelector} from 'react-redux'

export default function Profile() {
  //using use selector we can get the state from the store it takes callback which takes entire state as params
  const user = useSelector(state => state.user.value)
  return (
    <div>
        
        <h1>Profile Info</h1>
        <p>name: {user.name}</p>
        <p>age: {user.age}</p>
        <p>email:{user.email}</p>
    </div>
  )
}
