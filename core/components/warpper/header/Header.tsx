import React from "react";
import Ippo from "./Ippo";
import Logo from "./Logo";
import MenuButton from "./MenuButton";

const Header = () => {
  return (
    <header className="md:h-32 w-screen border-b border-white  flex items-center justify-between">
      <MenuButton />
      <Logo />
      <Ippo />
    </header>
  );
};

export default Header;
