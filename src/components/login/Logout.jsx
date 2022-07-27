import React from 'react'
import { signOut } from "firebase/auth"
export const Logout = () => {
  return (
    <button onClick={()=>signOut()}>Logout</button>
  )
}
