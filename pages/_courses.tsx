import courses from "./api/courses.json";
import LessonList from "./components/LessonList";

export default function CoursePage() {
  return (
    <div className="w-full">
      <h1 className="text-3xl text-center font-extrabold py-8">LESSONS</h1>
      <div className="max-w-5xl mx-auto mb-0 mt-5">
        <div className="block">
          <div className="flex flex-col space-y-6">
            {courses.map((course: any) => (
              <LessonList
                key={course.topic}
                topic={course.topic}
                lessons={course.lessons}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
