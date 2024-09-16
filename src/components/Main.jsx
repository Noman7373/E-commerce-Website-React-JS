
import "./main.css";

const Main = () => {
  return (
    <section className="main-section">
      <div className="main-content">
        <div className="main-text">
          <h1>
            The Best
            <br /> Collection 2024
          </h1>
          <p>
            Luxury fashionable clothing and stationary <br /> items flat lay on
            white background - stock photo.
          </p>
          <button className="shop-btn">Shop Now</button>
        </div>
        <div className="main-img">
          <img src="/image.jpg" alt="" />
        </div>
      </div>
      <div className="about-shipping">
        <div className="shipping">
          <div className="free-delivery">
            <span>
              <img src="/free-delivery.png" alt="free delivery" />
            </span>
            <div className="delivery">
              <span className="free">Free</span>
              <span>Delivery</span>
            </div>
          </div>

          <div className="free-delivery">
            <span>
              <img src="/money.png" alt="quick-payment" />
            </span>
            <div className="delivery">
              <span className="free">Quick Payment</span>
              <span>100% Secure $</span>
            </div>
          </div>

          <div className="free-delivery">
            <span>
              <img src="/gift.png" alt="gift certificate" />
            </span>
            <div className="delivery">
              <span className="free">Gift Certificate</span>
              <span>Buy Now $120.40</span>
            </div>
          </div>

          <div className="free-delivery">
            <span>
              <img src="/customer-support.png" alt="customer-support" />
            </span>
            <div className="delivery">
              <span className="free">24/7 Support</span>
              <span>Ready Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
