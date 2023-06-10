import React from 'react'
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <>
    <div className="container">
  <footer className="py-2 my-5">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><NavLink className="nav-link px-2 text-muted" to="/">Home</NavLink></li>
      <li className="nav-item"><NavLink className="nav-link px-2 text-muted" to="/product">Products</NavLink></li>
      <li className="nav-item"><NavLink className="nav-link px-2 text-muted" to="/about">About</NavLink></li>
      <li className="nav-item"><NavLink className="nav-link px-2 text-muted" to="/contact">Contact</NavLink></li>
    </ul>
    <p className="text-center text-muted">© 2023 Be-Bag</p>
  </footer>
</div></>
  )
}

export default Footer;