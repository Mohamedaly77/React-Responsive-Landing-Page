import React, { useState } from 'react';
import logo from '../../assets/images/logo.svg';
import menu from '../../assets/images/icon-menu.svg';
import close from '../../assets/images/icon-menu-close.svg';
import './nav.css';

function NavBar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <div className=" flex  justify-between ">
        <div className=" py-3 px-3  mt-3 mb-6">
          <img src={logo} alt="logo" />
        </div>

        <nav className="">
          <div className=" flex">
            <ul className=" flex justify-center items-center cursor-pointer navbar-links">
              <li>
                <a href="#Home">Home</a>
              </li>
              <li>
                <a href="#news">New</a>
              </li>
              <li>
                <a href="#categories">Popular</a>
              </li>
              <li>
                <a href="#gallery">Trending</a>
              </li>
              <li>
                <a href="#computers">Categories</a>
              </li>
            </ul>
            <div className="smallscreen-menu flex items-center">
              <img src={menu} alt="icon" onClick={() => setToggleMenu(true)} />
            </div>
          </div>
          <div>
            {toggleMenu ? (
              <div className="smallscreen-overlay flex justify-center items-center">
                <img
                  src={close}
                  alt="close"
                  className="overlay-close"
                  onClick={() => setToggleMenu(false)}
                />
                <ul className="cursor-pointer smallscreen-link">
                  <li>
                    <a href="#Home">Home</a>
                  </li>
                  <li>
                    <a href="#news">New</a>
                  </li>
                  <li>
                    <a href="#categories">Popular</a>
                  </li>
                  <li>
                    <a href="#gallery">Trending</a>
                  </li>
                  <li>
                    <a href="#categories">Categories</a>
                  </li>
                </ul>
              </div>
            ) : null}
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
