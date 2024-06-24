import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';

const Headerpage = () => {
  const navigate = useNavigate()
  return (
    <nav className='py-4 flex justify-between items-center'>
        <Link to="/"> 
            <img src='/logo-color.png' className='h-16 w-20' alt='Logo' />
        </Link>

        <div>
          <Button onClick={() => navigate("/auth")}> Login </Button>
        </div>
    </nav>
  )
}

export default Headerpage;