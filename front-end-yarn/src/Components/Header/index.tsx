import { useState } from "react";
import Logo from "../Logo";
import MenuMobile from "../MenuMobile";
import NavBar from "../NavBar";

const Header = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState<boolean>(false);
  return (
    <header className="w-screen h-14 px-[5%] bg-lightScheme-primary dark:bg-darkScheme-primary flex justify-between items-center fixed md:justify-between">
      <Logo />

      <NavBar isNavbarVisible={isNavbarVisible} />

      <MenuMobile
        isNavbarVisible={isNavbarVisible}
        setIsNavbarVisible={setIsNavbarVisible}
      />
    </header>
  );
};

export default Header;
