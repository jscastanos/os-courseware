import { faFile, faFileAlt } from "@fortawesome/free-regular-svg-icons";
import {
  faExternalLinkAlt,
  faFlagCheckered,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ErrorPage from "next/error";
import Head from "next/head";
import slugify from "slugify";
import courses from "../api/courses.json";
import { Lesson } from "../api/types";
import Page from "../components/Page";
import Sidebar from "../components/Sidebar";

enum LessonType {
  lecture = "lecture",
  quiz = "quiz",
  materials = "materials",
}

interface Props {
  topic: string;
  page: Lesson;
}

export default function Course({ topic, page }: Props) {
  if (!page) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <div>
      <Head>
        <title>
          {topic} - {page.title}
        </title>
      </Head>
      <Page>
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 min-h-1/2 h-screen bg-black-100">
            {page.type === LessonType.lecture && (
              <iframe
                className="h-full w-full"
                src={page.url}
                frameBorder="0"
                allowFullScreen
              />
            )}
            {page.type === LessonType.quiz && (
              <div className="bg-black-80 min-h-full text-white flex flex-col justify-center items-center space-y-7 px-7">
                <h1 className="text-3xl">
                  Excellent! <FontAwesomeIcon icon={faFlagCheckered} />
                </h1>
                <h2 className="text-2xl">
                  You just finished{" "}
                  {page.showCustomTitle ? page.quizTitle : topic}
                </h2>
                <span>
                  Assess yourself to on how well you&apos;ve done in this
                  module. &nbsp;
                </span>

                <a href={page.url} target="_blank" rel="noreferrer">
                  <div className="hover:bg-black-100 bg-black-90 py-2 px-4 rounded-xl">
                    <span className="text-white">Take me there</span>
                    <FontAwesomeIcon
                      icon={faExternalLinkAlt}
                      className="text-white ml-3"
                    />
                  </div>
                </a>
              </div>
            )}
            {page.type === LessonType.materials && (
              <div className="bg-black-80 min-h-full text-white flex flex-col justify-center items-center space-y-7 px-7">
                <h1 className="text-3xl space-x-3">
                  <span>Course Materials</span>
                  <FontAwesomeIcon icon={faFileAlt} />
                  <FontAwesomeIcon icon={faFile} />
                </h1>
                <span>
                  Here are the materials used in this course; feel free to view
                  and download them.
                </span>

                <div className="space-y-2">
                  {page.files &&
                    page.files.map(({ name, url }, index) => (
                      <div key={name} className="flex flex-row space-x-1">
                        <span className="p-1">
                          {index + 1}. {name}
                        </span>
                        <a href={url} target="_blank" rel="noreferrer">
                          <div className="hover:bg-black-100 bg-black-90 p-1.5 mt-1 rounded-xl text-xs">
                            <span className="text-white">Open</span>
                            <FontAwesomeIcon
                              icon={faExternalLinkAlt}
                              className="text-white ml-1"
                            />
                          </div>
                        </a>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>

          <Sidebar activeTitle={page.title} activeTopic={topic} />
        </div>
      </Page>
    </div>
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
  const course = courses.find(
    ({ topic }) => params.topic === slugify(topic).toLowerCase()
  );

  if (!course) {
    return { props: { page: null } };
  }

  const lessons: Lesson[] = course.lessons;
  const page = lessons.find(
    ({ title }) => params.slug === slugify(title).toLowerCase()
  );

  return { props: { page, topic: course.topic } };
}
