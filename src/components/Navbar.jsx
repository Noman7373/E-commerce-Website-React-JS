import "./navbar.css";
import { IoIosMenu } from "react-icons/io";
import { CiHeart, CiUser } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { SlCallOut } from "react-icons/sl";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { MdCancelPresentation } from "react-icons/md";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [navbarLinksShow, setNavbarLinksSHow] = useState(false);
  const cartItems = useSelector((state) => state.cart.data);

  const handleNavbar = () => {
    setNavbarLinksSHow((prev) => !prev);
  };

  return (
    <nav>
      <div className="main">
        <div className="logo">
          <img src="/online-shopping.png" alt="shop-logo" />
          <h1>Shop</h1>
        </div>
        <div className="icons">
          <CiUser />
          <CiHeart />

          <div className="cart-count">
            <NavLink to="/cart">
              {cartItems.length > 0 ? <span>{cartItems.length}</span> : ""}
              <FaCartShopping />
            </NavLink>
          </div>
        </div>
      </div>
      <div className="nav-links">
        <span onClick={() => handleNavbar()}>
          {navbarLinksShow ? <MdCancelPresentation /> : <IoIosMenu />}
        </span>

        <div
          onClick={handleNavbar}
          className={navbarLinksShow ? "nav-links-display" : "home-links"}
        >
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

// export { handleSearch };
export default Navbar;
