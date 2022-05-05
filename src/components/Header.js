import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Link
} from "react-router-dom";
import logo from '../assets/img/main/logo.svg';



const Header = () => (
    <>
      <header id="header" className="fixed-top">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-10 d-flex align-items-center">
              <h1 className="logo mr-auto" > </h1>
              <nav className="nav-menu d-lg-block">
                <ul>
                  <li>
                    {/* <a id="has_bottom_border" href="/signin">
                      ゲスト登録
                    </a> */}
                    {/* <Link id="has_bottom_border" to="/signin"> */}
                    <Link id="has_bottom_border" to="/login">
                      ゲスト登録
                    </Link>
                  </li>
                  <li>
                    <Link id="has_bottom_border" to="/lorem" state={{ title: "ホスト登録" }}>
                      ホスト登録
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="logo-container">
          <a href="#/">

            <img src={logo} alt="logo" />
          </a>
        </div>
      </header>
    </>
  );

export default Header;
