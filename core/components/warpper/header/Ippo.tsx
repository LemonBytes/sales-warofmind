import React from "react";
import Image from "next/image";
import ippo from "../../../../public/static/images/ippo3.gif";
const Ippo = () => {
  return (
    <Image className="px-10" src={ippo} alt={""} width={130} height={130} />
  );
};

export default Ippo;
