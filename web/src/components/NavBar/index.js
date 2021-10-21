import React from "react";
import logo from "../../img/logo.png";
import navBarItens from "../../utils/itens";
import ButtonBlue from "../buttonBlue";
import "./styles.scss";

const Navbar = () => {
  return (
    <nav className="NavBarMain">
      <a href="/">
        <img className="logo" src={logo} alt="Logo da PetAdopt" />
      </a>
      <ul className="nav-menu">
        {navBarItens.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.className} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
        <li>
          <a href="/login">
            <ButtonBlue hover="#000">Login</ButtonBlue>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
