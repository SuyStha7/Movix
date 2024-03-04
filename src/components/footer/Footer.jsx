import React from "react";
import { useNavigate } from "react-router-dom";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./footer.scss";

const Footer = () => {
  
  const navigate = useNavigate();
  const navigationHandler = (type) => {
    if (type === "terms") {
      navigate("/terms");
    } else if (type === "privacy") {
      navigate("/privacy");
    } else if (type === "about") {
      navigate("/about");
    } else if (type === "blog") {
      navigate("/blog");
    } else {
      navigate("/faq");
    }
    setMobileMenu(false);
  };

    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem"
                    onClick={() => navigationHandler("terms")}>Terms Of Use</li>
                    <li className="menuItem"
                    onClick={() => navigationHandler("privacy")}>Privacy-Policy</li>
                    <li className="menuItem"
                    onClick={() => navigationHandler("about")}>About</li>
                    <li className="menuItem"
                    onClick={() => navigationHandler("blog")}>Blog</li>
                    <li className="menuItem"
                    onClick={() => navigationHandler("faq")}>FAQ</li>
                </ul>
                <div className="infoText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <FaFacebookF />
                    </span>
                    <span className="icon">
                        <FaInstagram />
                    </span>
                    <span className="icon">
                        <FaTwitter />
                    </span>
                    <span className="icon">
                        <FaLinkedin />
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;