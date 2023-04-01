import { useContext, useState } from "react";
import { ImageContext } from "../context/ImageProvider";
import Form from "./Form";
import classes from "./Main.module.css";
async function getImage(text) {
  const response = await fetch(
    "https://automatic-phantom-challenge.glitch.me/images/name",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    }
  );
  const blob = await response.blob();
  const imageUrl = URL.createObjectURL(blob);
  return imageUrl;
}

const Main = () => {
  const ctx = useContext(ImageContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const submitHandler = async (e) => {
    e.preventDefault();
    const imageName = e.target[0].value;
    if (imageName === "") {
      ctx.setValidity(false);
      return;
    }
    // fetch the image
    setLoading(true);

    try {
      const url = await getImage(imageName);
      ctx.setImage(url);
      if (error) {
        setError(false);
      }
    } catch (err) {
      setError(true);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={classes.main}>
      {error && <p style={{ fontSize: "24px" }}>Something Went Wrong...</p>}
      {loading && (
        <>
          <p className={classes.loading}>
            <div className={classes.spinner}></div> Loading...
          </p>
        </>
      )}
      {!loading && (
        <>
          {!ctx.isValid && (
            <p className={classes["invalid-text"]}>
              Please Enter a valid Value
            </p>
          )}

          <Form customClasses={classes.invalid} onSubmit={submitHandler}></Form>
          {ctx.imageUrl && <img className={classes.image} src={ctx.imageUrl} />}
          {!ctx.imageUrl && <p className={classes.empty}>No images Found</p>}
        </>
      )}
    </main>
  );
};

export default Main;
