import React from "react";
import Image from "next/image";
import "animate.css";
import imageIda from "../public/images/ida.jpg";

const ImageIda = () => {
  return (
    <Image
      src={imageIda}
      width={400}
      height={500}
      alt="Picture of Ida"
      className="img-fluid animate__animated animate__fadeIn"
    />
  );
};

export default ImageIda;
