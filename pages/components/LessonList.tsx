import { Lesson } from "../api/types";
import LessonItem from "./LessonItem";
interface Props {
  topic: string;
  lessons: Lesson[];
}

export default function LessonList({ topic, lessons }: Props) {
  if (!topic) {
    return null;
  }

  return (
    <div className="w-full">
      <h3 className="font-extrabold py-3 px-6">{topic.toUpperCase()}</h3>
      <div className="flex flex-col space-y-2">
        {lessons.map(({ title, time, url }) => (
          <LessonItem
            key={title}
            topic={topic}
            title={title}
            time={time}
            url={url}
          />
        ))}
      </div>
    </div>
  );
}
