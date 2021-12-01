import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import courses from "../api/courses.json";
import Accordion from "./Accordion";

interface Props {
  activeTitle: string;
  activeTopic: string;
}

export default function Sidebar({ activeTitle, activeTopic }: Props) {
  return (
    <div className="w-screen lg:w-96  bg-black-90">
      <div className="h-screen  overflow-y-auto">
        <div className="p-4 mb-5">
          <div className="flex mb-5">
            <Link href="/">
              <a>
                <div className="hover:bg-black-100 py-2 px-4">
                  <FontAwesomeIcon icon={faHome} className="text-white mr-3" />
                  <span className="text-white">Home</span>
                </div>
              </a>
            </Link>
          </div>
          <h1 className="text-white text-lg">
            Advanced Operating Systems and Networking
          </h1>
        </div>
        {courses.map(({ topic, lessons }: any, index) => (
          <div key={topic}>
            <Accordion
              id={index + 1}
              topic={topic}
              activeTopic={activeTopic}
              activeTitle={activeTitle}
              items={lessons}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
