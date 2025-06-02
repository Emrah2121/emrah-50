import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path || location.pathname.startsWith(path + "/");

  const handleOpen = () => setMenuOpen(true);
  const handleClose = () => setMenuOpen(false);

  return (
    <section id="header">
      <Link to="/" onClick={handleClose}>
        <img
          width="50"
          height="50"
          src="https://img.icons8.com/pulsar-gradient/100/shopee.png"
          alt="shopee"
        />
      </Link>

      <div>
        <ul id="navbar" className={menuOpen ? "active" : ""}>
          <li>
            <Link to="/" className={isActive("/") ? "active" : ""} onClick={handleClose}>
              Ana Səhifə
            </Link>
          </li>
          <li>
            <Link to="/product" className={isActive("/product") ? "active" : ""} onClick={handleClose}>
              Məhsullar
            </Link>
          </li>
          <li>
            <Link to="/blog" className={isActive("/blog") ? "active" : ""} onClick={handleClose}>
              Bloq
            </Link>
          </li>
          <li>
            <Link to="/about" className={isActive("/about") ? "active" : ""} onClick={handleClose}>
              Haqqımızda
            </Link>
          </li>
          <li>
            <Link to="/contact" className={isActive("/contact") ? "active" : ""} onClick={handleClose}>
              Əlaqə
            </Link>
          </li>
          <li>
            <Link to="/cart" id="lg-bag" onClick={handleClose}>
              <i className="fal fa-shopping-cart"></i>
            </Link>
          </li>
          <li>
            <a
              href="#"
              id="close"
              onClick={(e) => {
                e.preventDefault();
                handleClose();
              }}
            >
              <i className="fa-regular fa-circle-xmark"></i>
            </a>
          </li>
        </ul>
      </div>

      <div id="mobile">
        <Link to="/cart">
          <i className="fal fa-shopping-cart"></i>
        </Link>
        <i id="bar" className="fas fa-bars" onClick={handleOpen}></i>
      </div>
    </section>
  );
};

export default Header;
