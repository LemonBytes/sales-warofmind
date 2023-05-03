import React from "react";
import Ippo from "./Ippo";
import Logo from "./Logo";
import MenuButton from "./MenuButton";

const Header = () => {
  return (
    <header className="md:h-32 lg:h-32 xl:h-32 h-20 w-screen sticky -top-1 flex items-center justify-around z-10 bg-white">
      <MenuButton />
      <div className="border border-1 w-[30%] "></div>
      <Logo />
      <div className="border border-1 w-[30%]  "></div>
      <Ippo />
    </header>
  );
};

export default Header;
