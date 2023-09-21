"use client";

import React, { useState } from "react";
import Link from "next/link";
import ShoppingCart from "./components/ShoppingCart";
import MobileMenu from "./components/MobileMenu";
import HeaderTopBar from "./components/HeaderTopBar";
import Menus from "./components/Menus";
import useScrollDirection from "@/hooks/sticky-header";
import logoImg from "../../../public/assets/img/logo/logo.png"
import Image from "next/image";
const HeaderOne = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollDirection = useScrollDirection(null);

  return (
    <header>
      <HeaderTopBar />
      <div
        id="sticky-header"
        className={`menu-area ${
          scrollDirection === "down" ? "sticky-menu" : ""
        }`}
      >
        <div className="container">
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
                  <div className="navbar-wrap main-menu d-none d-lg-flex">
                    <Menus />
                  </div>
                  <div className="header-action">
                    <ul>
                      <ShoppingCart />
                      <li className="header-btn">
                        <Link href="/contact" className="btn transparent-btn">
                          Get a Quote
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div
        onClick={() => setMenuOpen(false)}
        className={menuOpen ? "body-overlay show" : "body-overlay"}
      ></div>
    </header>
  );
};

export default HeaderOne;
