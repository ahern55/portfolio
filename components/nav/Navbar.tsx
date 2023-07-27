import useColorTheme from "@/hooks/useColorTheme";
import DarkModeIcon from "../icons/DarkModeIcon";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { largeScreenWidthPixels } from "@/utils/screenSizes";
import NavHeader from "./NavHeader";
import { gitHubLink } from "@/data/externalLinks";

const NavBar = () => {
  const { toggleColorTheme } = useColorTheme();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animationStart =
      window.innerWidth <= largeScreenWidthPixels
        ? window.innerHeight / 1.8
        : "top top";
    const element = ref.current;
    if (element) {
      gsap.fromTo(
        element.querySelector("#nav-bar"),
        {
          autoAlpha: 0,
          opacity: 0,
          y: 0,
        },
        {
          opacity: 1,
          y: 0,
          autoAlpha: 1,
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
      <nav
        className="flex w-full p-3 fixed top-0 z-50"
        style={{ visibility: "hidden" }}
        id="nav-bar"
      >
        <ul className="flex">
          <NavHeader text="About" url="/about" />
          <NavHeader text="Projects" url="/projects" />
          <NavHeader text="Github" external url={gitHubLink} />
        </ul>

        <div
          className="sm:mr-2 ml-auto border rounded-lg cursor-pointer highlight-link-border"
          onClick={toggleColorTheme}
        >
          <DarkModeIcon />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
