import Link from "next/link";
import courses from "../api/courses.json";
import Card from "../components/Card";
import Page from "../components/Page";

export default function CoursesPage() {
  return (
    <Page>
      <div className="shadow-md">
        <h1 className="text-5xl text-center font-extrabold py-8">Courses</h1>
      </div>
      <div className="flex-1 py-8 px-20 bg-gray-50">
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {courses.map((l) => (
            <Link key={l.id} href={`/courses/${l.id}`}>
              <a>
                <Card title={l.title} description={l.description} />
              </a>
            </Link>
          ))}
        </div>
      </div>
    </Page>
  );
}
