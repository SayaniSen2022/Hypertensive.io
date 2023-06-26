import React, { useState } from "react";
import { IconContext } from "react-icons";
import { NavLink } from "react-router-dom";
import { AiOutlineDatabase } from "react-icons/ai";
import { BsClipboardData } from "react-icons/bs";
import { BsSuitHeartFill } from "react-icons/bs";
import "./Navbar.css";
import ToggleColor from "../Theme/ToggleColor";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <nav className="navbar">
        <div className="brand-title">
          <NavLink to="/" className="flex">
            <IconContext.Provider value={{ className: "top-react-icons m-2" }}>
              <BsSuitHeartFill style={{ color: "#b5a1ff" }} />
            </IconContext.Provider>
            Hypertensive.io
          </NavLink>
        </div>
        <a
          href="#"
          className="toggle-button"
          onClick={() => setShowMenu(!showMenu)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
        <div className={showMenu ? "navbar-links active" : "navbar-links"}>
          <ul>
            <li>
              <NavLink to="/readings">
                <IconContext.Provider value={{ className: "top-react-icons" }}>
                  <AiOutlineDatabase style={{ color: "#FFCD58" }} />
                </IconContext.Provider>
                Readings
              </NavLink>
            </li>
            <li>
              <NavLink to="/statistics">
                <IconContext.Provider value={{ className: "top-react-icons" }}>
                  <BsClipboardData style={{ color: "#719F1E" }} />
                </IconContext.Provider>
                Statistics
              </NavLink>
            </li>
            <li className="theme-switch">
              <ToggleColor />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
