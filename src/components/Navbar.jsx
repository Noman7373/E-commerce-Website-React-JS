import React, { useState } from "react";
import "./navbar.css";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";
import { CiHeart, CiUser } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { SlCallOut } from "react-icons/sl";
const Navbar = () => {
  const [showCategory, setShowCategory] = useState(false);

  function handleCategory() {
    setShowCategory((prev) => !prev);
  }
  return (
    <nav>
      <div className="main">
        <div className="logo">
          <img src="/online-shopping.png" alt="shop-logo" />
          <h1>Shop</h1>
        </div>
        <div className="search">
          <div className="serch-category">
            <p>
              All Category{" "}
              <span onClick={handleCategory}>
                {showCategory ? <IoMdArrowDropdown /> : <IoMdArrowDropright />}
              </span>
            </p>
            {/* <ul
              className={showCategory ? "category-list-show" : "category-list"}
            >
              <li>T-Shirts</li>
              <li>Shoes</li>
              <li>Pents</li>
            </ul> */}
            <input type="text" placeholder="Search Your Product" />
          </div>
          <div className="search-btn">
            <button>Search</button>
          </div>
          <div className="icons">
            <CiUser />
            <CiHeart />
            <FaCartShopping />
          </div>
        </div>
      </div>
      <div className="nav-links">
        <div className="browse-category">
          <h1>
            Browse Categories{" "}
            <span>
              <IoMdArrowDropdown />
            </span>
          </h1>
        </div>
        <div className="home-links">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Shop</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
        </div>
        <div className="contact">
          <span className="call-icon">
            <SlCallOut />
          </span>
          <div className="call-details">
            <span>Call Now</span>
            <span>+0000000000</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
