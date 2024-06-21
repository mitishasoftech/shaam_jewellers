import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light myNavbar">
      <div className="container-fluid">
        <div className='header'>
          <div className='logo'>
            <i className="fa-solid fa-crown"></i>
          </div>
          <div className='heading'>
            <Link className="navbar-brand headingtext" to='/'>SHASHI JEWELLERS</Link>
          </div>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text" activeClassName='active' to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text" activeClassName='active' to="/about">About</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link text" activeClassName='active' to="/products">
                Products
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a className="dropdown-item" href="#">RINGS</a></li>
                <li><a className="dropdown-item" href="#">EARINGS</a></li>
                <li><a className="dropdown-item" href="#">BRACELETS & BANGLES</a></li>
                <li><a className="dropdown-item" href="#">MANGALSUTRA</a></li>
                <li><a className="dropdown-item" href="#">NECKLACE</a></li>
                <li><a className="dropdown-item" href="#">GEMS</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link text" activeClassName='active' to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
