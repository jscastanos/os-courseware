import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ErrorPage from "next/error";
import Link from "next/link";
import slugify from "slugify";
import courses from "../../api/courses.json";
import Page from "../../components/Page";

interface Page {
  title: string;
  videoUrl: string;
}

export default function Course({ page }: { page: Page }) {
  if (!page) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Page>
      <div className="space-y-3">
        <Link href="/courses">
          <a className="space-x-3 group">
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="text-green-400 group-hover:text-green-500"
            />
            <span className="group-hover:text-green-500">Go back</span>
          </a>
        </Link>
        <div>
          <p>{page.title}</p>
          <iframe
            width="560"
            height="315"
            src={page.videoUrl}
            frameBorder="0"
            allowFullScreen
          />
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
