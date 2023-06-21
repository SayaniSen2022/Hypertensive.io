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
      <nav className="top-nav">
        <span className="logo">
          <NavLink to="/" className="flex">
            <IconContext.Provider value={{ className: "top-react-icons m-2" }}>
              <BsSuitHeartFill style={{ color: "#b5a1ff" }} />
            </IconContext.Provider>
            Hypertensive.io
          </NavLink>
        </span>
        <ul className="nav">
          <li>
            <NavLink to="/readings" className="flex">
              <IconContext.Provider value={{ className: "top-react-icons" }}>
                <AiOutlineDatabase style={{ color: "#FFCD58" }} />
              </IconContext.Provider>
              Readings
            </NavLink>
          </li>
          <li>
            <NavLink to="/statistics" className="flex">
              <IconContext.Provider value={{ className: "top-react-icons" }}>
                <BsClipboardData style={{ color: "#719F1E" }} />
              </IconContext.Provider>
              Statistics
            </NavLink>
          </li>
          <li>
            <ToggleColor />
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
