import "./productcart.css";
import Productlist from "./Productpage/Productlist";
import { FaApple } from "react-icons/fa";
import { useData } from "../hooks/useData";

const Productcart = () => {
  const { handleSearch, handleSorting } = useData();

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
      <div className="filter-section">
        <div className="input-cart-section">
          <input
            type="text"
            placeholder="Search Product"
            onChange={handleSearch}
          />
        </div>
        <div className="select-section">
          <form action="#">
            <select name="sort" id="sort" onChange={handleSorting}>
              <option value="sort">Sort by</option>
              <option value="a - z">A - Z</option>
              <option value="z - a">Z - A</option>
              <option value="lowest">Lowest Price</option>
              <option value="highest">Highest Price</option>
            </select>
          </form>
        </div>
      </div>
      <div className="cart-items">
        <Productlist />
      </div>
      <div className="marketing-box">
        <div className="marketing-text">
          <h1>Shopping Online</h1>
          <p>
            To support this entire community, we've made lots of improvements to
            the Play Store this year. For example, we made it even easier to
            discover all that play.
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
          <img
            className="marketing-shopping-image"
            src="/marketingImage.jpg"
            alt="marketing-banner-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Productcart;
