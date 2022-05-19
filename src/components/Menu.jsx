import React from 'react';
import Expo from "../img/Expo.png";
export  function Menu() {
  return (
  <header>
    <div className="container  container__header">
    <div className="header__logo">
        <a href="index.html">
            <img src={Expo} alt="logo"/>         
        </a>
    </div>
    <div className="menu__hamburger ">
        <input type="checkbox" id="menu-bar"/>
        <label className="hamburger__container" for="menu-bar">
            <div id="hamburger__wrapper" className="">
                <p className="burger"></p>
            </div>
        </label>
        <nav className="menu__dropdown">
            <div className="menu_items">
                <a className="items" href="#Inicio">INICIO</a>
                <a className="items" href="#Programa">PROGRAMA</a>
                <a className="items" href="#Sede">SEDE</a>
                <a className="items" href="#Conferencistas">CONFERENCISTAS</a>
                <a className="items" href="#Galeria">GALERÍA</a>
                <a className="items" href="#Contacto">CONTACTO</a>
            </div>
        </nav>
    </div>
    <nav className="menu">
        <ul className="menu__container">
            <li><a id="menu__items" href="#Inicio">Inicio</a></li>
            <li><a id="menu__items" href="#Programa">Programa</a></li>
            <li><a id="menu__items" href="#Sede">Sede</a></li>
            <li><a id="menu__items" href="#Conferencistas">Conferencistas</a></li>
            <li><a id="menu__items" href="#Galeria">Galería</a></li>
            <li><a id="menu__items" href="#Contacto">Contacto</a></li>
        </ul>
    </nav>
</div>
</header>
  
  )
}
