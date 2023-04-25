import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ menuItems }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="sidebar">
        <button className="sidebar-toggle" onClick={toggleMenu}>
          <FaBars />
        </button>
        <ul className={showMenu ? "menu active" : "menu"}>
          {menuItems.map((item) => {
            const { id, title, path } = item;
            return (
              <li key={id}>
                <Link to={path} onClick={toggleMenu}>
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;