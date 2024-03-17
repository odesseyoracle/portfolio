import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg'>
      <div className="container">
        <ul className='navbar-nav'>
          <li className='navbar-item'><a className='nav-link' href="#home">Home</a></li>
          <li className='navbar-item'><a className='nav-link' href="#about">About</a></li>
          <li className='navbar-item'><a className='nav-link' href="#projects">Projects</a></li>
          <li className='navbar-item'><a className='nav-link' href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar