import React from 'react'
import NavBar from '../navBar/NavBar'

export const MainLayout = ({children , showAdminPanel}) => {
  return (
    <div>
       <NavBar startAdminService={showAdminPanel}  />
        {children}
    </div>
  )
}
