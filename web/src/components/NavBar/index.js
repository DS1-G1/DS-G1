import React from "react";
import logo from "../../img/logo.png";
import navBarItens from "./itens";
import ButtonBlue from "../buttonBlue";
import "./styles.scss";

const Navbar = () => {
  return (
    <nav className="NavBarMain">
      <img className="logo" src={logo}></img>
      <ul className="nav-menu">
        {navBarItens.map((item, index) => {
          return (
            <li>
              <a className={item.className} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
      <ButtonBlue>Login</ButtonBlue>
    </nav>
  );
};

export default Navbar;
