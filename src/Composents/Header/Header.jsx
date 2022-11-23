import "./Header.css";
import React from "react";
import { Navbar } from "react-bootstrap";
import { FaCaretDown, FaUserAlt  } from "react-icons/fa";

function Header() {
  return (
    <header className="header position-fixed w-100" style={{zIndex : 1}} >
      <Navbar bg="primary" className="px-2 px-md-5">
          <Navbar.Brand href="#home" className="text-white fw-bold">WELCOME ADMIN</Navbar.Brand>
          <div className="ms-auto d-flex align-items-center text-white">
            <FaUserAlt className="mx-1 mx-md-2"/>
            <div>admin</div>
            <FaCaretDown className="mx-1 mx-md-2"/>
          </div>
      </Navbar>
    </header>
  );
};

export default Header;
