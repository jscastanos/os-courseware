import ErrorPage from "next/error";
import slugify from "slugify";
import courses from "../api/courses.json";
import { Lesson, LessonType } from "../api/types";
import LessonItem from "../components/LessonItem";
import Page from "../components/Page";

export default function Course({ page }: { page: Lesson }) {
  if (!page) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Page>
      <div className="relative">
        <div className="absolute top-0 left-0 w-96 p-4 bg-scroll">
          {courses.map(({ topic, lessons }: any) => (
            <div key={topic}>
              <h3 className="font-extrabold py-3 px-6">
                {topic.toUpperCase()}
              </h3>
              <div className="flex flex-col space-y-2">
                {lessons.map(({ title, time }: any) => (
                  <LessonItem
                    key={title}
                    topic={topic}
                    title={title}
                    time={time}
                    active={page.title === title}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="ml-96 h-[calc(100vh-100px)] p-9">
          <p className="text-xl pb-8 font-bold">{page.title.toUpperCase()}</p>
          {page.type === LessonType.lecture && (
            <iframe
              className="h-full w-full"
              src={page.url}
              frameBorder="0"
              allowFullScreen
            />
          )}

          {page.type === LessonType.quiz && (
            <div>
              Assess yourself click{" "}
              <a href={page.url} target="_blank" rel="noreferrer">
                here
              </a>
            </div>
          )}
        </div>
      </div>
    </Page>
  );
}

export async function getStaticPaths() {
  const paths = courses
    .map(({ topic, lessons }) =>
      lessons.map((lesson) => ({
        params: {
          topic: slugify(topic).toLowerCase(),
          slug: slugify(lesson.title).toLowerCase(),
        },
      }))
    )
    .flat();

  return { paths, fallback: true };
}

export async function getStaticProps({ params }: any) {
  const topic = courses.find(
    ({ topic }) => params.topic === slugify(topic).toLowerCase()
  );

  if (!topic) {
    return { props: { page: null } };
  }

  const page = topic.lessons.find(
    ({ title }) => params.slug === slugify(title).toLowerCase()
  );

  return { props: { page } };
}
