import React from 'react'
import NavBar from './NavBar'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar></NavBar>
      {children}
    </>
  )
}

export default Layout
