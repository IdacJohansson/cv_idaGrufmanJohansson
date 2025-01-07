import Image from "next/image";
import "animate.css";
import navigation from "../public/images/navigation.png";

const NavigationImage = () => {
  return (
    <Image
      src={navigation}
      width={400}
      height={600}
      alt="navigation image"
      className="img-fluid img-style"
    />
  );
};

export default NavigationImage;
