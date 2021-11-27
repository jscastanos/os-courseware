import Link from "next/link";
import slugify from "slugify";
import { Lesson } from "../types";

interface Props {
  topic: string;
  lessons: Lesson[];
}

export default function LessonList({ topic, lessons }: Props) {
  const slug = slugify(topic).toLowerCase();

  return (
    <>
      <h3 className="font-extrabold">{topic}</h3>
      {lessons.map((lesson) => {
        const titleSlug = slugify(lesson.title).toLowerCase();
        return (
          <Link key={titleSlug} href={`courses/${slug}/${titleSlug}`}>
            <a>
              <div className="flex flex-col justify-between">
                <span>{lesson.title}</span>
                <span>{lesson.time}</span>
              </div>
            </a>
          </Link>
        );
      })}
    </>
  );
}
