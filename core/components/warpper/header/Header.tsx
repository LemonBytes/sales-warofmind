import React from "react";
import Ippo from "./Ippo";
import Logo from "./Logo";
import MenuButton from "./MenuButton";

const Header = () => {
  return (
    <header className="md:h-32 w-screen border-b-0.5 border-blurrRed  flex items-center justify-between">
      <MenuButton />
      <Logo />
      <Ippo />
    </header>
  );
};

export default Header;
