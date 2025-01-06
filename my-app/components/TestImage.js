import React from "react";
import Image from "next/image";
import "animate.css";
import testImage from "../public/images/test.png";

const TestImage = () => {
  return (
    <Image
      src={testImage}
      width={400}
      height={600}
      alt="Test pic"
      className="img-fluid img-style"
    />
  );
};

export default TestImage;