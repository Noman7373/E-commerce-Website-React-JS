import { FaFacebook } from "react-icons/fa";
import "./footer.css";
import { IoLogoInstagram } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <div className="footer-main">
        <div className="footer-section">
          <div className="footer-details">
            <h3>About Us</h3>
            <p>
              Copyright holders have the right to <br /> control most uses of
              their works. In <br /> some circumstances, it's possible to <br />{" "}
              use a copyright-protected work <br /> without infiring their.{" "}
            </p>
            <h3>
              Follow Us <br /> <hr />
            </h3>
            <span className="social-icons ">
              <a href="#">
                <FaFacebook />
              </a>
              <a href="#">
                <IoLogoInstagram />
              </a>
            </span>
          </div>
          <div className="footer-details">
            <h3>
              My Account <br /> <hr />
            </h3>
            <li>
              <a href="#">My Account</a>
            </li>
            <li>
              <a href="#">Wishlist</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#">New Product</a>
            </li>
          </div>

          <div className="footer-details">
            <h3>
              Support <br /> <hr />
            </h3>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Help Centre</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </div>

          <div className="footer-details">
            <h3>
              Contach Info <br /> <hr />
            </h3>
            <li>Call :</li>
            <li>+000000000</li>
            <li>Current Address :</li>
            <li>Baharin</li>
            <li>Mail :</li>
            <li>abc@gmail.com</li>
          </div>
        </div>
        <hr />
        <div className="copy-right">
        <p>Copyright 2024, All Rights Reserved</p>
        <p>Designed By  <strong> Noman Ahmed</strong></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
