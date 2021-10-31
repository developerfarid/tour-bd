import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useData from '../Hooks/useData';
import "./Headers.css"

const Headers = () => {
   const {user, logOut} =useData()
    return (
        <Navbar className=" my-navber bg-black" expand="lg">
        <Container>
            <NavLink style={{ fontFamily: "Oswald" }} className="text-decoration-none fs-1 text-info" to="/home">Chill</NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto ">
                    <NavLink activeStyle={{ color: "#e6d011", textDecoration:"underline" }} className="my-link" to="/home">Home</NavLink>
                    <NavLink activeStyle={{ color: "#e6d011", textDecoration:"underline" }} className="my-link" to="/contact">Contact</NavLink>
                    <NavLink activeStyle={{ color: "#e6d011", textDecoration:"underline" }} className="my-link" to="/weoffer">We Offer</NavLink>
                    {user?.email && <NavLink activeStyle={{ color: "#e6d011", textDecoration:"underline" }} className="my-link" to="/myorder">My Order</NavLink>}
                    {user?.email &&<NavLink activeStyle={{ color: "#e6d011", textDecoration:"underline" }} className="my-link" to="/admin">Admin</NavLink>}
                    {user?.email ? <button activeStyle={{ color: "#e6d011", textDecoration: "underline", }} className="my-link border-0 bg-transparent" onClick={logOut}>Logout</button> : <NavLink activeStyle={{ color: "#e6d011", }} className="my-link" to="/login">Login</NavLink>}
                </Nav>
                {user.email && <Navbar.Text className="fw-bold fs-5 text-info">
                    Signed in as: <span>{user?.displayName}</span>
                </Navbar.Text>}
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
};

export default Headers;