import React, { useState } from "react";
import placeholder from "./images/user.png";
import "./styles.css";

const ImgPrev = () => {
  const [{ alt, src }, setImg] = useState({
    src: placeholder,
    alt: "Upload an Image",
  });

  const handleImg = (e) => {
    if (e.target.files[0]) {
      setImg({
        src: URL.createObjectURL(e.target.files[0]),
        alt: e.target.files[0].name,
      });
    }
  };
  return (
    <form>
      {" "}
      <h1 className="form__title">Image Preview in Reactjs</h1>
      <div className="form__img-input-container">
        <input
          type="file"
          accept=".png, .jpg, .jpeg"
          id="photo"
          className="visually-hidden"
          onChange={handleImg}
        />
        <label htmlFor="photo" className="form-img__file-label">
          <img src={src} alt={alt}  className="form-img__img-preview" />
        </label>
      </div>
    </form>
  );
};

export default ImgPrev;
