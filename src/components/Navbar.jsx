// import React, { useState } from "react";
import "./navbar.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { CiHeart, CiUser } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { SlCallOut } from "react-icons/sl";
import { NavLink } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import { useSelector } from "react-redux";
const Navbar = () => {
  // const items = useSelector((state) => state.cart);
  // const [showCategory, setShowCategory] = useState(false);

  // function handleCategory() {
  //   setShowCategory((prev) => !prev);
  // }
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
            </p>
            <input type="text" placeholder="Search Your Product" />
          </div>
          <div className="search-btn">
            <button>Search</button>
          </div>
          <div className="icons">
            <CiUser />
            <CiHeart />

            <div className="cart-count">
              <NavLink to="/cart">
                {/* {items.length > 0 ? <GoDotFill /> : ""} */}

                <FaCartShopping />
              </NavLink>
            </div>
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
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/">Contact Us</NavLink>
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
