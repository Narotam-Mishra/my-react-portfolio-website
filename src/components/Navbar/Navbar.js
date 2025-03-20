import React, { useState } from 'react'
import './navbar.css';
import logo from '../../images/logo.png'
import contactImg from '../../images/contact.png';
import menu from '../../images/menu.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const[showMenu, setShowMenu] = useState(false);
  return (
    // Nav bar items
    <nav className="navbar">
      <a href="#intro">
        <img src={logo} className="logo" alt="logo_image" />
      </a>
      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
        >
          About me
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          to="clients"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
        >
          Tech Stack
        </Link>
      </div>
      <button
        className="desktopMenuBtn"
        onClick={() => {
          document
            .getElementById("contact")
            .scrollIntoView({ behaviour: "smooth" });
        }}
      >
        <img src={contactImg} className="desktopMenuImg" alt="contact_image" />
        Contact Me
      </button>

      {/* Hamburger Menu for small screen */}
      <img
        src={menu}
        className="b-Menu"
        alt="Hamburger_Menu"
        onClick={() => setShowMenu(!showMenu)}
      />
      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="hListItem"
          onClick={() => setShowMenu(false)}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="hListItem"
          onClick={() => setShowMenu(false)}
        >
          About me
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="hListItem"
          onClick={() => setShowMenu(false)}
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          to="clients"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="hListItem"
          onClick={() => setShowMenu(false)}
        >
          Tech Stack
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="hListItem"
          onClick={() => setShowMenu(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar