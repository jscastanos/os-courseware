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
}

export default function LessonItem({ topic, title, time, active }: Props) {
  if (!topic || !title) {
    return null;
  }

  const slug = slugify(topic).toLowerCase();
  const titleSlug = slugify(title).toLowerCase();

  return (
    <Link key={titleSlug} href={`/${slug}/${titleSlug}`}>
      <a>
        <div
          className={classNames(
            "flex flex-row justify-between items-center py-3 px-6 bg-gray-50 rounded-md hover:-translate-y-1 transition-all duration-200 hover:bg-gray-100",
            { "bg-gray-200": active }
          )}
        >
          <span>{title}</span>
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
  );
}
