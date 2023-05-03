import React from "react";
import Image from "next/image";
import logo from "../../../../public/static/images/logo.jpg";
const Logo = () => {
  return (
    <Image className="px-10" src={logo} alt={""} width={130} height={130} />
  );
};

export default Logo;
