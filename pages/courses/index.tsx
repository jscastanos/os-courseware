import Link from "next/link";
import courses from "../api/courses.json";

export default function CoursesPage() {
  return (
    <div>
      <h1>list of courses</h1>
      <ul>
        {courses.map((l) => (
          <li key={l.id}>
            <Link href={`/courses/${l.id}`}>
              <a>Go to {l.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
