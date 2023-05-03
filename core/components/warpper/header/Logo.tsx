import React from "react";
import Image from "next/image";
import logo from "../../../../public/static/images/logo.png";
const Logo = () => {
  return (
    <Image
      className="outline outline-black p-8"
      src={logo}
      alt={""}
      width={130}
      height={130}
    />
  );
};

export default Logo;
