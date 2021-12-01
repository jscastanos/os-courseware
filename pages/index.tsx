import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Page from "./components/Page";

export default function Home() {
  return (
    <>
      <Head>
        <title>OS Courseware</title>
      </Head>
      <Page>
        <div className="flex h-screen w-screen bg-waves bg-cover bg-no-repeat bg-right-bottom">
          <div className="flex flex-col items-start flex-1 space-y-12 max-w-6xl mx-auto mt-6 mb-0 px-5">
            <div className="flex justify-between w-full mb-28">
              <h1>OS Courseware</h1>
              <a
                href="https://github.com/jscastanos/os-courseware"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                  width="30"
                  height="30"
                  alt="github"
                />
              </a>
            </div>
            <h1 className="text-black-100 text-7xl font-extrabold">
              Advanced Operating Systems and Networking
            </h1>
            <span className="text-black-80 text-xl">
              Learn from the comfort of your home. Watch the videos and assess
              yourself later.
            </span>
            <Link href="/overview-and-introduction-to-operating-system-concepts/overview-and-introduction">
              <a>
                <div className="bg-black-80 hover:bg-black-100 text-white px-4 py-3 rounded-xl">
                  <span>Start Learning</span>
                  <FontAwesomeIcon icon={faChevronRight} className="ml-3" />
                </div>
              </a>
            </Link>
          </div>
        </div>
      </Page>
    </>
  );
}
