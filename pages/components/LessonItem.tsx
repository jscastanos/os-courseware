import { faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import Link from "next/link";
import slugify from "slugify";

interface Props {
  topic: string;
  title: string;
  time?: string;
  active?: boolean;
  url: string;
}

export default function LessonItem({ topic, title, time, active, url }: Props) {
  if (!topic || !title) {
    return null;
  }

  const slug = slugify(topic).toLowerCase();
  const titleSlug = slugify(title).toLowerCase();

  if (!url) {
    return (
      <div className="flex flex-row justify-between items-center px-6 py-3 space-x-3 text-sm cursor-default">
        <span className="truncate">{title}</span>
        <span>-</span>
      </div>
    );
  }

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <Link key={titleSlug} href={`/${slug}/${titleSlug}`}>
        <a>
          <div
            className={classNames(
              "flex flex-row justify-between items-center px-6 py-3 space-x-3 text-sm hover:bg-black-100",
              { "text-blue-400": active }
            )}
          >
            <span className="truncate">{title}</span>
            {time ? (
              <span className="w-20 text-left flex justify-end items-center">
                <FontAwesomeIcon icon={faClock} className="mr-2" />
                {time}
              </span>
            ) : (
              <span>-</span>
            )}
          </div>
        </a>
      </Link>
    </div>
  );
}
