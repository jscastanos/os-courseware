import {
  faExternalLinkAlt,
  faFlagCheckered,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ErrorPage from "next/error";
import Head from "next/head";
import slugify from "slugify";
import courses from "../api/courses.json";
import { Lesson, LessonType } from "../api/types";
import Page from "../components/Page";
import Sidebar from "../components/Sidebar";

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
        <title>OS Courseware - {page.title}</title>
      </Head>
      <Page>
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 min-h-1/2 h-screen sticky top-0 z-20 bg-black-100">
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
                <h2 className="text-2xl">You just finished {topic}</h2>
                <span>
                  Assess yourself to on how well you&apos;ve done in this
                  module. &nbsp;
                </span>

                <a href={page.url} target="_blank" rel="noreferrer">
                  <div className="hover:bg-black-100 bg-black-90 py-2 px-4 rounded-xl">
                    <span className="text-white">I&apos;m Ready</span>
                    <FontAwesomeIcon
                      icon={faExternalLinkAlt}
                      className="text-white ml-3"
                    />
                  </div>
                </a>
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

  const page = course.lessons.find(
    ({ title }) => params.slug === slugify(title).toLowerCase()
  );

  return { props: { page, topic: course.topic } };
}
