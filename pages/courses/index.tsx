import courses from "../api/courses.json";
import LessonList from "../components/LessonList";
import Page from "../components/Page";

export default function CoursesPage() {
  return (
    <Page>
      <div className="shadow-md">
        <h1 className="text-5xl text-center font-extrabold py-8">Courses</h1>
      </div>
      <div className="flex-1 py-8 px-28 bg-gray-50">
        <div className="bg-red-100">
          {courses.map((course) => (
            <LessonList
              key={course.topic}
              topic={course.topic}
              lessons={course.lessons}
            />
          ))}
        </div>
      </div>
    </Page>
  );
}
