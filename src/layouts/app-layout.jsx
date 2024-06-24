// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from "../components/Headerpage"
import Headerpage from '../components/Headerpage';

const AppLayout = () => {
  return (
    <div>
        <main className='min-h-screen container'>
            { /* header  */}
           <Headerpage />
            <Outlet />
            {/*  body */ }
        </main>

        <div className='p-10 text-center bg-gray-800 mt-10'>
          Made with 💖 Pranit
        </div>
    </div>
  )
}

export default AppLayout;