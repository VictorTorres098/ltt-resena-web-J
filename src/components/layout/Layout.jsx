import React from 'react'
import NavBar from '../navBar/NavBar'

export const MainLayout = ({children}) => {
  return (
    <div>
       <NavBar />
        {children}
    </div>
  )
}
