import Image from "next/image";
import "animate.css";
import patagonia from "../public/images/patagonia.png";

const PatagoniaImage = () => {
  return (
    <Image
      src={patagonia}
      width={400}
      height={600}
      alt="patagonia image"
      className="img-fluid img-style"
    />
  );
};

export default PatagoniaImage;