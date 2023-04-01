import React from "react";
import classes from "./Navigation.module.css";
const Navigation = ({ children }) => {
  return (
    <>
      <nav className={classes.navigation}>
        <h1>Image Generator</h1>
      </nav>
      {children}
    </>
  );
};

export default Navigation;
