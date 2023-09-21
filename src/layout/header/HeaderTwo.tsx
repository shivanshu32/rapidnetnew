"use client";

import React, { useState } from "react";
import Menus from "./components/Menus";
import ShoppingCart from "./components/ShoppingCart";
import Link from "next/link";
import MobileMenu from "./components/MobileMenu";
import HeaderTopBarTwo from "./components/HeaderTopBarTwo";
import HeaderLogoTwo from "./components/HeaderLogoTwo";
import useScrollDirection from "@/hooks/sticky-header";
import logoImg from "../../../public/assets/img/logo/logo.png"
import Image from "next/image";
const HeaderTwo = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollDirection = useScrollDirection(null);

  return (
    <header className="header-style-two">
      <HeaderLogoTwo />
      <HeaderTopBarTwo />
      <div id="header-top-fixed"></div>
      <div
        id="sticky-header"
        className={`menu-area ${
          scrollDirection === "down" ? "sticky-menu" : ""
        }`}
      >
        <div className="container custom-container">
          <div className="row">
            <div className="col-12">
              <div
                className="mobile-nav-toggler"
                onClick={() => {
                  setMenuOpen(!menuOpen);
                }}
              >
                <i className="fas fa-bars"></i>
              </div>
              <div className="menu-wrap">
                <nav className="menu-nav">
                  <div className="logo">
                    <Link href="/">
                      <Image
                        src={logoImg}
                        alt="img not found"
                        style={{ width: "100%", height: "auto" }}
                      />
                    </Link>
                  </div>
                  <div className="navbar-wrap navbar-wrap-two main-menu d-none d-lg-flex">
                    <Menus />
                  </div>
                  <div className="header-action">
                    <ul>
                      <ShoppingCart />
                      <li className="header-phone">
                        <div className="icon">
                          <i className="fal fa-mobile-android"></i>
                        </div>
                        <div className="content">
                          <span>Customer Service:</span>
                          <h5 className="number">
                            <Link href="tel:872923025">+1 872 923 025</Link>
                          </h5>
                        </div>
                      </li>
                      <li className="header-btn">
                        <Link className="btn transparent-btn" href="/contact">
                          Get a Quote
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
              <div
                onClick={() => setMenuOpen(false)}
                className={menuOpen ? "body-overlay show" : "body-overlay"}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderTwo;
