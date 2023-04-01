import { createContext, useState } from "react";

export const ImageContext = createContext({
  imageUrl: "",
  isValid: true,
  setValidity: (value) => {},
  setImage: (value) => {},
});

export const ImageProvider = ({ children }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [isValid, setIsValid] = useState(true);
  const setValidity = (value) => {
    setIsValid(value);
  };
  const setImage = (value) => setImageUrl(value);
  const contextValue = { imageUrl, isValid, setValidity, setImage };
  return (
    <ImageContext.Provider value={contextValue}>
      {children}
    </ImageContext.Provider>
  );
};
