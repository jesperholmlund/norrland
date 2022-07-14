import React, { useState } from "react";
import {FcSearch, FcFolder, FcHome, FcAbout, FcMenu, FcBusinessContact} from "react-icons/fc"
import Search from "./Search";
import About from "./About";
import Contact from "./Contact";
import { Route, Routes } from "react-router-dom";
import Archive from "./Archive";

const Nav = (props) => {
  const [search, setSearch] = useState(false)
  const handleClick = () =>{
    setSearch(!search)
  }
  return (
    <><header>
      <ul className="menu">
      <li className=" h5 menu-item"> <FcMenu></FcMenu> Meny</li>
      <li><div class="divider text-center"></div></li>
        <li className="menu-item">
          <a><FcHome></FcHome> Startsidan</a>
        </li>
        <Archive value={props.value}></Archive>
        <li className="menu-item">
          <a onClick={handleClick}><FcSearch></FcSearch> Sök artiklar</a>
        </li>
        <About value={props.value}></About>
        <Contact value={props.value}></Contact>
        <li><div class="divider text-center"></div></li>
      </ul>
    </header>
    <Search data={props.data} visibility={handleClick} show={search}></Search>
    </>
  );
};

export default Nav;
