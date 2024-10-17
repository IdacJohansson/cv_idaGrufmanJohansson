import React from "react";
import Image from "next/image";
import "animate.css";
import imageIda from "../public/images/ida.jpg";

const ImageIda = () => {
  return (
    <Image
      src={imageIda}
      width={400}
      height={600}
      alt="Picture of Ida"
      className="img-fluid img-style"
    />
  );
};

export default ImageIda;
