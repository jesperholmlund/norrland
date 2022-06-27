import React from "react";

const Nav = () => {
  return (
    <header className=" bg-secondary">
      <ul style={{ display: "flex" }} className="menu bg-secondary">
        <li className="menu-item">
          <a>Hem</a>
        </li>
        <li className="menu-item">
          <a className="text-primary">Arkiv</a>
        </li>
        <li className="menu-item">
          <a>Om</a>
        </li>
        <li className="menu-item">
          <a>Kontakt</a>
        </li>
      </ul>
    </header>
  );
};

export default Nav;
