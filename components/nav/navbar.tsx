import useColorTheme from "@/hooks/useColorTheme";
import DarkModeIcon from "../icons/darkModeIcon";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { largeScreenWidthPixels } from "@/utils/screenSizes";

const NavBar = () => {
  const { colorTheme, toggleColorTheme } = useColorTheme();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animationStart =
      window.innerWidth <= largeScreenWidthPixels
        ? window.innerHeight / 2.0
        : "top top";
    const element = ref.current;
    if (element) {
      gsap.fromTo(
        element.querySelector("#nav-bar"),
        {
          opacity: 0,
          y: 0,
        },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            start: animationStart,
            end: `+${window.innerHeight}`,
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <div ref={ref}>
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
          className="sm:mr-2 ml-auto border rounded-lg cursor-pointer border-primary-text hover:border-primary-text-highlight hover:text-primary-text-highlight dark:hover:border-primary-text-highlight-dark dark:hover:text-primary-text-highlight-dark dark:border-primary-text-dark"
          onClick={toggleColorTheme}
        >
          <DarkModeIcon />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
