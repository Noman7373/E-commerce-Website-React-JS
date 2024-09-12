import "./about.css";

const AboutUs = () => {
  return (
    <>
      {/* <div className="about-image">
        <img src="shopping-poster.jpg" alt="about-poster" />
      </div> */}
      <div className="about-introduction">
        <h1>
          There is all about E-commerce <br /> fashion
        </h1>
        <hr />
        <video
          src="videp-clip.mp4"
          controls
          autoPlay
          loop
          muted
          preload="auto"
          width="1000"
          height="200"
          poster="shop-video"
        ></video>
       <div className="about-text">
       <p>
          Welcome to our e-commerce store, where we offer a curated selection of
          high-quality products designed to meet your everyday needs. <br />{" "}
          From fashion to electronics, we strive to provide exceptional value,
          fast delivery, and a seamless shopping experience for every customer.
        </p>
        <p>
          Get ready for unbeatable savings with our exclusive promotion! For a
          limited time, enjoy big discounts on a wide range of top-qualit <br />
          products, from fashion and accessories to electronics and home
          essentials. Take advantage of our fast shipping and seamless shopping <br />
          experience. Don’t wait—these deals won’t last long, and it’s the
          perfect time to grab your favorites at the best prices!
        </p>
       </div>
      </div>
    </>
  );
};

export default AboutUs;
