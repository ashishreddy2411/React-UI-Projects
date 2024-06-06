// src/components/HeaderNav.js
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StoreIcon from "@mui/icons-material/Store";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useBasketValue } from "../Context/BasketContext";
import "../styles/header.css";

const HeaderNav = () => {
  const [{ basket }, dispatch] = useBasketValue();
  const [count, setCount] = useState(0);
  return (
    <div className="headerNavbar">
      <div className="header_logo">
        <StoreIcon fontSize="large" />
        <h2>Shopping Arena</h2>
      </div>
      <div className="header_searchBar">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_icons">
        <div className="nav__item">
          <span className="header_option_line_one">Hello Guest</span>
          <span className="header_option_line_two">Sign In</span>
        </div>
        <div className="nav__item">
          <span className="header_option_line_one">Your</span>
          <span className="header_option_line_two">Shop</span>
        </div>
        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="nav__item">
            <ShoppingCartIcon fontSize="large" />
            <span className="header_option_basket_count">{basket.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HeaderNav;
