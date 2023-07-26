import Image from "next/image";
import InstagramIcon from "./icons/instagramIcon";
import GitHubIcon from "./icons/gitHubIcon";
import LinkedInIcon from "./icons/linkedInIcon";
import Link from "next/link";
import {
  gitHubLink,
  instagramLink,
  linkedInLink,
  palantirLink,
  travelBlogLink,
} from "@/data/externalLinks";

const Overview = () => {
  return (
    <div className="h-screen flex m-3 flex-wrap gap-0">
      <div className="lg:ml-20 w-full md:w-1/2 h-fit">
        <h1 className="text-4xl lg:text-5xl font-extrabold">
          {" "}
          Hello! I'm Jason 👋
        </h1>
        <div className="text-xl lg:text-2xl mt-8">
          Welcome to my digital portfolio!
        </div>
        <div className="text-lg lg:text-xl mt-8 w-5/6 font-bold">
          I'm a software engineer in New York City, working for{" "}
          <Link href={palantirLink} target="_blank">
            {" "}
            Palantir
          </Link>
          . I love to run, lift, study languages (currently Spanish & French),
          and{" "}
          <Link href={travelBlogLink} target="_blank">
            travel
          </Link>
          !
        </div>
        <div className="mt-4 flex">
          <Link
            href={instagramLink}
            target="_blank"
            className="mr-2 highlight-link"
          >
            <InstagramIcon />
          </Link>
          <Link
            href={gitHubLink}
            target="_blank"
            className="mr-2 highlight-link"
          >
            <GitHubIcon />
          </Link>
          <Link
            href={linkedInLink}
            target="_blank"
            className="mr-2 highlight-link"
          >
            <LinkedInIcon />
          </Link>
        </div>
      </div>
      <div className="h-full m-auto lg:mr-20">
        <div className=" w-80 lg:w-96 aspect-square relative  mt-4">
          <Image src="/images/headshot.png" alt="headshot" fill />
        </div>
      </div>
    </div>
  );
};

export default Overview;
