import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {FaApple, FaPlus} from  'react-icons/fa';
import {GiCooler} from  'react-icons/gi';
import { HashLink as Link } from 'react-router-hash-link';

import React from 'react'

const Navbar = () => {
    return (
<div className='fixed-top'>
  <div className="container-fluid bg-dark justify-content-start d-flex">
    <a className="navbar-brand text-light" href="#"><FaApple /></a>
    <a className="navbar-brand text-light" href="#"><FaPlus /></a>
    <a className="navbar-brand text-light" href="#"><GiCooler /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  </div>
     

<nav className="navbar navbar-static-top navbar-expand-lg navbar-light border-bottom bg-light">
  <div className="container-fluid px-5">
    <a className="navbar-brand" href="#"><FaApple/></a>
    <a className="navbar-brand" href="#">PLUG</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
            <Link to="/#vision" className="nav-link">Vision</Link>
        </li>
        <li className="nav-item">
        <Link to="/#design" className="nav-link">Design</Link>
        </li>    
        <li className="nav-item">
        <Link to="/#innovation" className="nav-link">Innovation</Link>
        </li>
        <li className="nav-item">
        <Link to="/#precision" className="nav-link">Precision</Link>
        </li>
        <li className="nav-item">
        <Link to="/#trust" className="nav-link">Trust</Link>
        </li>
      </ul>
      <button className='btn-primary'>Buy</button>
    </div>
  </div>
</nav>
</div>

    )
}

export default Navbar
