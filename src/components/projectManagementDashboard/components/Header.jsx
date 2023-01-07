import React, { Fragment } from "react";

const Header = ({ children = null, customWrapperStyle = "" }) => {
  return (
    <Fragment>
      {children ? <div className={customWrapperStyle}>{children}</div> : null}
    </Fragment>
  );
};

export default Header;
