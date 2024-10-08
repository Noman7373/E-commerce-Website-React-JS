import "./navbar.css";
import { CiHeart, CiUser } from "react-icons/ci";
import { FaCartShopping, FaCircle } from "react-icons/fa6";

import { NavLink } from "react-router-dom";
import { useState } from "react";

import { useSelector } from "react-redux";
import { RiMenuFold3Line2 } from "react-icons/ri";
import useData from "../hooks/useData";

const Navbar = () => {
  const { logOut } = useData();
  const [navbarLinksShow, setNavbarLinksSHow] = useState(false);
  const [userMenu, setUserMenu] = useState(false);
  const cartItems = useSelector((state) => state.cart.data);

  const handleNavbar = () => {
    setNavbarLinksSHow((prev) => !prev);
  };

  const handleuserMenu = () => {
    setUserMenu((prev) => !prev);
  };

  return (
    <nav>
      <div className="main">
        <div className="container">
          <div
            id={userMenu ? "user-logout-menu-show" : "user-logout-menu"}
          >
            <ul id="user-logout-menu-show-ul">
              <NavLink to="" onClick={handleuserMenu}>
                {" "}
                <li onClick={logOut}>Log Out</li>
              </NavLink>{" "}
              <NavLink to="/signup" onClick={handleuserMenu}>
                {" "}
                <li>Sign Up</li>
              </NavLink>{" "}
            </ul>
          </div>
          <div className="logo">
            <img src="/online-shopping.png" alt="shop-logo" />
          </div>
          <ul className={navbarLinksShow ? "ul active" : ""}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "activeNavbar" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "activeNavbar" : "")}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shop"
                className={({ isActive }) => (isActive ? "activeNavbar" : "")}
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "activeNavbar" : "")}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="icons">
            {/* <NavLink to="/signup"> */}
            <button onClick={handleuserMenu}>
              <CiUser />
            </button>
            {/* </NavLink> */}
            <CiHeart />
            <div className="cart-count">
              <NavLink to="/cart">
                {cartItems.length > 0 ? <p>{cartItems.length}</p> : <p>0</p>}
                <FaCartShopping />
              </NavLink>
            </div>

            <div className="menu-icons">
              <button onClick={handleNavbar}>
                <RiMenuFold3Line2 />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

// export { handleSearch };
export default Navbar;
