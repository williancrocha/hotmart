import React from "react";
import PropTypes from "prop-types";

const Header = (props) => {
  return (
    <>
      <h1>{props.title}</h1>
      {props.children}
    </>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};



export default Header;
