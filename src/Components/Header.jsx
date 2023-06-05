import React from 'react';
import { NavLink } from 'react-router-dom';
import Login from './Buttons/Login';
import Signup from './Buttons/Signup';
import CartBtn from './Buttons/CartBtn';

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid py-3">
                    <NavLink className="navbar-brand fw-bold fs-4" to="/">BE-BAG</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active fw-bold" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link fw-bold" to="/product">Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link fw-bold" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link fw-bold" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                        <Login/>
                        <Signup/>
                        <CartBtn/>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;