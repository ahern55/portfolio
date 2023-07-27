import Link from "next/link";
import ExternalLinkIcon from "../icons/ExternalLinkIcon";

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
        className="flex font-extrabold items-center highlight-link hover:underline"
      >
        <span className=" pr-1">{text}</span>
        {external ? <ExternalLinkIcon /> : ""}
      </Link>
    </li>
  );
};

export default NavHeader;
