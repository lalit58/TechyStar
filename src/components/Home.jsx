import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechyStar</h1>
          <p>Solutions to all your problems</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            As a server provider, we are a team of dedicated professionals
            committed to delivering reliable and high-quality hosting solutions
            to our customers. Our mission is to empower businesses and
            individuals by providing them with the tools they need to succeed
            online. We understand that your website or application is critical
            to your success, and we take that responsibility seriously. That's
            why we invest in state-of-the-art infrastructure, cutting-edge
            technologies, and experienced support staff to ensure that your
            website is always up and running smoothly. At our core, we are
            driven by our customers.
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <NavLink to="https://www.google.com/" target="_blank">
                <AiFillGoogleCircle />
                <p>Google</p>
              </NavLink>
            </div>
            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <NavLink to="https://www.amazon.in/" target="_blank">
                <AiFillAmazonCircle />
                <p>Amazon</p>
              </NavLink>
            </div>
            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <NavLink to="https://www.youtube.com/" target="_blank">
                <AiFillYoutube />
                <p>Youtube</p>
              </NavLink>
            </div>
            <div
              style={{
                animationDelay: "0.9s",
              }}
            >
              <NavLink to="https://www.linkedin.com/" target="_blank">
                <AiFillLinkedin />
                <p>LinkedIn</p>
              </NavLink>
            </div>
            <div
              style={{
                animationDelay: "0.11s",
              }}
            >
              <NavLink to="https://www.instagram.com/" target="_blank">
                <AiFillInstagram />
                <p>Instagram</p>
              </NavLink>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
