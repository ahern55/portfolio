import Link from "next/link";
import ExternalLinkIcon from "../icons/externalLinkIcon";

const NavHeader = ({
  text,
  url,
  external = false,
}: {
  text: string;
  url: string;
  external?: boolean;
}) => {
  return (
    <li className="mr-4">
      <Link
        href={url}
        target={external ? "_blank" : ""}
        className="flex font-extrabold items-center underline-offset-2 text-primary-text hover:text-primary-text-highlight dark:text-primary-text-dark dark:hover:text-primary-text-highlight-dark hover:underline"
      >
        <span className=" pr-1">{text}</span>
        {external ? <ExternalLinkIcon /> : ""}
      </Link>
    </li>
  );
};

export default NavHeader;
