import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiOutlineSearch } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation, NavLink, Link } from "react-router-dom";

import "./header.scss";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/logo.png";
import Avatar from "../../assets/Avatar1.png";

const Header = () => {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("hide");
      } else {
        setShow("show");
      }
    } else {
      setShow("top");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
      setTimeout(() => {
        setShowSearch(false);
      }, 1000);
    }
  };

  const openSearch = () => {
    setMobileMenu(false);
    setShowSearch(true);
  };

  const openMobileMenu = () => {
    setMobileMenu(true);
    setShowSearch(false);
  };

  const navigationHandler = (type) => {
    setMobileMenu(false);
  };

  return (
    <header className={`header ${mobileMenu ? "mobileView" : ""} ${show} `}>
      <ContentWrapper>
        <div className="mobileMenuItems">
          <div>
            <motion.img
              whileTap={{ scale: 0.7 }}
              src={Avatar}
              alt="user"
              className="user"
            />
          </div>
        </div>
        <div className="logo">
          <Link to="/">
            <motion.img whileHover={{ scale: 0.96 }} src={logo} alt="logo" />
          </Link>
        </div>
        <ul className="menuItems">
          <motion.li whileHover={{ scale: 0.95 }} className="menuItem">
            <NavLink to="/explore/movie" className="menuItem">
              Movies
            </NavLink>
          </motion.li>
          <motion.li whileHover={{ scale: 0.95 }} className="menuItem">
            <NavLink to="/explore/tv" className="menuItem">
              TV shows
            </NavLink>
          </motion.li>
          <motion.li whileHover={{ scale: 0.95 }} className="menuItem">
            <NavLink to="/pricing" className="menuItem">
              Pricing
            </NavLink>
          </motion.li>
          <motion.li whileHover={{ scale: 0.95 }} className="menuItem">
            <NavLink to="/contact" className="menuItem">
              Contact
            </NavLink>
          </motion.li>
          <motion.li whileHover={{ scale: 0.95 }} className="menuItemSearch">
            <HiOutlineSearch />
          </motion.li>

          <div>
            <motion.img
              whileTap={{ scale: 0.7 }}
              src={Avatar}
              alt="user"
              className="user"
            />
          </div>
        </ul>

        <div className="mobileMenuItems">
          <HiOutlineSearch onClick={openSearch} className="search" />
          <div>
            {mobileMenu ? (
              <VscChromeClose
                onClick={() => setMobileMenu(false)}
                className="svg"
              />
            ) : (
              <SlMenu onClick={openMobileMenu} className="svg" />
            )}
          </div>
        </div>
      </ContentWrapper>
      {showSearch && (
        <div className="searchBar">
          <ContentWrapper>
            <div className="searchInput">
              <input
                type="text"
                placeholder="Search for a movie or TV shows..."
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={searchQueryHandler}
              />
              <VscChromeClose onClick={() => setShowSearch(false)} />
            </div>
          </ContentWrapper>
        </div>
      )}
    </header>
  );
};

export default Header;
