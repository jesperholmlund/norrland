import React from "react";
import {FcSearch, FcFolder, FcHome, FcAbout, FcMenu, FcBusinessContact} from "react-icons/fc"


const Nav = () => {
  return (
    <header>
      <ul className="menu">
      <li style={{background: "#ff5e57"}} className="text-light h5 menu-item"> <FcMenu></FcMenu> Meny</li>
        <li className="menu-item">
          <a><FcHome></FcHome> Startsidan</a>
        </li>
        <li className="menu-item">
          <a><FcFolder></FcFolder> Arkiv</a>
        </li>
        <li className="menu-item">
          <a><FcSearch></FcSearch> Sök artiklar</a>
        </li>
        <li className="menu-item">
          <a><FcAbout></FcAbout> Om hemsidan</a>
        </li>
        <li className="menu-item">
          <a><FcBusinessContact></FcBusinessContact> Kontakta oss</a>
        </li>
      </ul>
    </header>
  );
};

export default Nav;
