import React from "react";
import { Link } from "@reach/router";

const Title = () => {
  return (
    <div class="a">
      <nav class="menu">
        <div></div>
        <Link to="/">
          <div class="z">HOME</div>
        </Link>
        <Link to="/about">
          <div class="z">ABOUT</div>
        </Link>
        <Link to="/portfolio">
          <div class="z">PORTFOLIO</div>
        </Link>
        <Link to="/contact">
          <div class="z">CONTACT</div>
        </Link>
        <Link to="/blog">
          <div class="z">BLOG</div>
        </Link>
        <div></div>
      </nav>
      <div class="e">ALEX TROUT</div>
    </div>
  );
};

export default Title;
