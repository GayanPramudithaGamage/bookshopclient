import React from 'react'
import { Outlet } from 'react-router-dom' // Import the Outlet component from 'react-router-dom'
import NavBar from '../components/NavBar'

function Layout() {
  return (
    <div>
        <header>
        </header>
        <nav>
            <NavBar/>
        </nav>
        <main className='bg-blue-50'>
            <Outlet/>
        </main>
    </div>
  )
}

export default Layout