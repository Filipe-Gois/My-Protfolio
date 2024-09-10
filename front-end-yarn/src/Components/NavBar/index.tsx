import ThemeToggle from "../ThemeToggle";

const NavBar = () => {
  return (
    <nav className="h-[calc(100vh-3.5rem)] w-[65vw] bg-red-950 absolute top-14 right-0  ">
      <ul className="h-full w-full gap-3 flex flex-col">
        <li className="text-darkScheme-primary dark:text-lightScheme-primary text-center">
          Sobre Mim
        </li>
        <li className="text-darkScheme-primary dark:text-lightScheme-primary text-center">
          Tecnologias
        </li>
        <li className="text-darkScheme-primary dark:text-lightScheme-primary text-center">
          Projetos
        </li>
        <li className="text-darkScheme-primary dark:text-lightScheme-primary text-center">
          Contate-Me
        </li>

        <li className="flex justify-center">
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
