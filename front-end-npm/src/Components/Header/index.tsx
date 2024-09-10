import Logo from "../Logo";
import MenuMobile from "../MenuMobile";
import NavBar from "../NavBar";

const Header = () => {
  return (
    <header className="w-screen h-14 px-[5%] bg-lightScheme-primary dark:bg-darkScheme-primary flex justify-between items-center relative">
      <Logo />

      <NavBar />

      <MenuMobile />
    </header>
  );
};

export default Header;
