import React, { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <div className="pushfoot"></div>
      <hr></hr>
      <div className="footer">
        <p>Author: Alexis De Almeyda</p>
        <p>
          <a id="mail" href="mailto:alexisdealmeyda@gmail.com">
            alexisdealmeyda@gmail.com
          </a>
        </p>
      </div>
    </Fragment>
  );
};

export default Footer;
