import React from "react";
import Ippo from "./Ippo";
import Logo from "./Logo";
import MenuButton from "./MenuButton";

const Header = () => {
  return (
    <header className="md:h-32 w-screen sticky top-0 flex items-center justify-between z-10 bg-black">
      <MenuButton />
      <Logo />
      <Ippo />
    </header>
  );
};

export default Header;
