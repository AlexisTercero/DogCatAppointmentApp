import React, { Fragment } from "react";

const Header = () => {
  return (
    <Fragment>
      <nav id="navmenu">
        <a href="/index" id="logo">
          <img src="/images/logo.svg" alt="Dog&Cat logo" />
        </a>
        <div>
          <a href="/index">
            <img src="/images/home-icon.svg" alt="FORM" />
            <span className="spans">FORM</span>
          </a>
          <a href="/appointments">
            <img src="/images/search-icon.svg" alt="APPOINTMENTS" />
            <span className="spans">APPOINTMENTS</span>
          </a>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
