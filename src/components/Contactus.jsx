import { FaLocationDot } from "react-icons/fa6";
import "./contact.css";
import { IoCallSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";

const Contactus = () => {
  return (
    <>
      {/* <div className="About-image">
        <img src="shakehands-pic.avif" alt="" />
      </div> */}
      <div className="about-container">
        <div className="about-intro">
          <div className="about-title">
            <h1>Let's Get On Touch</h1>
            <p>
              Shop top-quality products at great prices.Enjoy a seamless
              and satisfying online shopping experience.
            </p>
          </div>
          <div className="contact-info">
            <div className="adrress-info">
              <h3>
                <span>
                  <FaLocationDot />
                </span>
                Location
              </h3>
              <p>Lorem ipsum.............. </p>
            </div>

            <div className="adrress-info">
              <h3>
                <span>
                  <IoCallSharp />
                </span>
                Call
              </h3>
              <p>+000000000000</p>
            </div>

            <div className="adrress-info">
              <h3>
                <span>
                  <IoMdMail />
                </span>
                Email
              </h3>
              <p>abc@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="contact-form-fields">
          <h1>Contact Us</h1>
          <form>
            <div className="input-fields">
              <input
                type="name"
                autoComplete="name"
                placeholder="Enter Your Name"
                required
              />
              <input
                type="email"
                autoComplete="email"
                placeholder="Enter Your Email"
                required
              />
              <input
                type="number"
                autoComplete="number"
                placeholder="Enter Your Phone Number"
                required
              />
              <textarea
                name="textarea"
                placeholder="Message"
                rows={3}
              ></textarea>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
      ;
    </>
  );
};

export default Contactus;
