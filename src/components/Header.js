import React, { Fragment } from "react";

const Header = () => {
  return (
    <Fragment>
      <nav id="navmenu">
        <a id="logo">
          <img src="/images/logo.svg" alt="Dog&Cat logo" />
        </a>
        <div>
          <a href="/">
            <img src="/images/home-icon.svg" alt="HOME" />
            <span className="spans">FORM</span>
          </a>
          <a href="/appointments">
            <img src="/images/search-icon.svg" alt="SEARCH" />
            <span className="spans">APPOINTMENTS</span>
          </a>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
