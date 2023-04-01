import React, { useContext } from "react";
import classes from "./Form.module.css";
import { useState } from "react";
import { ImageContext } from "../context/ImageProvider";
const Form = ({ onSubmit, customClasses }) => {
  const [imageName, setImageName] = useState("");
  const ctx = useContext(ImageContext);
  const inputChangeHandler = (e) => {
    setImageName(e.target.value);
    if (e.target.value.trim() !== "" && !ctx.isValid) {
      ctx.setValidity(true);
    }
  };
  return (
    <form onSubmit={onSubmit} className={classes.form}>
      <input
        value={imageName}
        onChange={inputChangeHandler}
        className={`${classes.input} ${!ctx.isValid && customClasses}`}
        placeholder={"Search images by Name"}
        type={"text"}
      />
      <button className={classes.btn}>Search</button>
    </form>
  );
};

export default Form;
