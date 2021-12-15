import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { useState } from "react";
import LessonItem from "./LessonItem";

interface Props {
  id: number;
  topic: string;
  activeTopic: string;
  activeTitle: string;
  items: any[];
}

export default function Accordion({
  id,
  topic,
  activeTopic,
  activeTitle,
  items = [],
}: Props) {
  const currentTopic = topic === activeTopic;
  const [open, setOpen] = useState(currentTopic);

  if (!items.length) {
    return (
      <div className="outline-none">
        <div className="bg-black-90 flex justify-between px-4 py-3 items-center text-gray-500 border-t border-black-80 pr-10 relative cursor-not-allowed">
          <div className="text-gray-90">
            {id} - {topic}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="outline-none accordion-section"
      onClick={() => setOpen(!open)}
    >
      <div
        className={classNames(
          "bg-black-90 flex justify-between px-4 py-3 items-center text-gray-500 border-t border-black-80 transition ease duration-500 cursor-pointer pr-10 relative",
          { "bg-black-80": open }
        )}
      >
        <div className="transition ease duration-500 text-white">
          {id} - {topic}
        </div>
        <div
          className={classNames(
            "text-white h-7 w-7 border border-black-80 rounded-full items-center inline-flex justify-center transform transition ease duration-500 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2",
            {
              "-rotate-180": open,
            }
          )}
        >
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </div>
      <div
        className={classNames(
          "max-h-0 bg-black-90 overflow-hidden ease duration-500",
          { "max-h-screen border-t border-black-80": open }
        )}
      >
        <p className="text-gray-400 text-justify">
          <div className="flex flex-col">
            {items.map(({ title, time, url }: any) => (
              <LessonItem
                key={title}
                topic={topic}
                title={title}
                time={time}
                active={activeTitle === title && currentTopic}
                url={url}
              />
            ))}
          </div>
        </p>
      </div>
    </div>
  );
}
