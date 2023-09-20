import { useState, useEffect } from "react";
import introJs from "intro.js";
import { IconContext } from "react-icons";
import { NavLink } from "react-router-dom";
import { AiOutlineDatabase } from "react-icons/ai";
import { BsClipboardData } from "react-icons/bs";
import { BsSuitHeartFill } from "react-icons/bs";
import "./Navbar.css";
import ToggleColor from "../Theme/ToggleColor";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const getCurrentThemeStyling = () => {
    let colorMode = localStorage.getItem("chakra-ui-color-mode");

    return colorMode === "light" ? "customTooltip" : "customTooltipDark";
  };

  useEffect(() => {
    const intro = introJs();

    intro.setOptions({
      disableInteraction: true,
      steps: [
        {
          title: "Welcome",
          intro: "Hello user!!",
        },
        {
          title: "Hypertensive.io",
          element: ".brand-title",
          intro:
            "Hypertensive.io is our brand new app to help you be on your toes about health",
          position: "bottom",
        },
        {
          title: "Readings",
          element: "#reading-link",
          intro: "Input your readings",
          position: "bottom",
        },
        {
          title: "Statistics",
          element: "#stats-link",
          intro: "check your stats",
          position: "bottom",
        },
        {
          intro: "Tour is finished! stay healthy and leave review! Cheers!!",
        },
      ],
      tooltipClass: getCurrentThemeStyling(),
      showProgress: true,
      dontShowAgain: false,
      dontShowAgainCookieDays: 1,
      showBullets: false,
    });
    intro.start();

    return () => {
      intro.exit();
    };
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="brand-title">
          <NavLink to="/" className="flex">
            <IconContext.Provider value={{ className: "top-react-icons m-2" }}>
              <BsSuitHeartFill style={{ color: "#FFC0CB" }} />
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
            <li id="reading-link">
              <NavLink to="/readings">
                <IconContext.Provider value={{ className: "top-react-icons" }}>
                  <AiOutlineDatabase style={{ color: "#ECF87F" }} />
                </IconContext.Provider>
                Readings
              </NavLink>
            </li>
            <li id="stats-link">
              <NavLink to="/statistics">
                <IconContext.Provider value={{ className: "top-react-icons" }}>
                  <BsClipboardData style={{ color: "#2EFF2E" }} />
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
