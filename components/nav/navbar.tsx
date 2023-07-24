import useColorTheme from "@/hooks/useColorTheme";
import DarkModeIcon from "../icons/darkModeIcon";

const NavBar = () => {
  const { colorTheme, toggleColorTheme } = useColorTheme();

  return (
    <nav className="flex w-full p-3 fixed top-0" id="nav-bar">
      <ul className="flex">
        <li className="mr-6">
          <a className="text-blue-500 hover:text-blue-800" href="#">
            Active
          </a>
        </li>
        <li className="mr-6">
          <a className="text-blue-500 hover:text-blue-800" href="#">
            Link
          </a>
        </li>
        <li className="mr-6">
          <a className="text-blue-500 hover:text-blue-800" href="#">
            Link
          </a>
        </li>
        <li className="mr-6">
          <a className="text-gray-400 cursor-not-allowed" href="#">
            Disabled
          </a>
        </li>
      </ul>

      <div
        className="ml-auto border rounded-lg cursor-pointer border-primary-text hover:border-primary-text-highlight hover:text-primary-text-highlight dark:hover:border-primary-text-highlight-dark dark:hover:text-primary-text-highlight-dark dark:border-primary-text-dark"
        onClick={toggleColorTheme}
      >
        <DarkModeIcon />
      </div>
    </nav>
  );
};

export default NavBar;
