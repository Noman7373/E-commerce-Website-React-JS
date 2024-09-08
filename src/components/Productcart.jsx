
import "./productcart.css";
import Productlist from "./Productpage/Productlist";
import { FaApple } from "react-icons/fa";

const Productcart = () => {
  return (
    <section className="main-cart">
      <div className="cart-title">
        <h1>
          Our Top Collection <br />
          <hr />
        </h1>
      </div>
      <div className="sale-category">
        <p>Best Sellers</p>
        <p>Trending</p>
        <p>New Arrival</p>
      </div>
      <div className="cart-items">
        <Productlist />
      </div>
      <div className="marketing-box">
        <div className="marketing-text">
          <h1>Shopping Online</h1>
          <p>
            To support this entire community, we've made <br /> lots of
            improvments to the Play Store this <br /> year. For example, we made
            it even easier <br /> to discover all that play.
          </p>
          <div className="marketing-logo">
            <div className="playStore-logo">
              <img src="/playstore.png" alt="playstore-logo" />

              <div className="title">
                <span className="get-text">GET IT ON</span>
                <span className="playStore">Google Play</span>
              </div>
            </div>

            <div className="playStore-logo">
              <span className="apple-logo">
                <FaApple />
              </span>

              <div className="title">
                <span className="get-text">Download on the</span>
                <span className="playStore">App Store</span>
              </div>
            </div>
          </div>
        </div>
        <div className="marketing-shopping-image">
          <img src="/marketingImage.jpg" alt="marketing-banner-image" />
        </div>
      </div>
    </section>
  );
};

export default Productcart;
