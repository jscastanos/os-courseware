import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ErrorPage from "next/error";
import Link from "next/link";
import courses from "../api/courses.json";
import Page from "../components/Page";

interface Page {
  id: string;
  title: string;
  description: string;
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
          <p>{page.description}</p>
          <iframe
            src={page.videoUrl}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
          />
        </div>
      </div>
    </Page>
  );
}

export async function getStaticPaths() {
  const paths = courses.map((page) => {
    return { params: { id: page.id } };
  });
  return { paths, fallback: true };
}

export async function getStaticProps({ params }: any) {
  const page = courses.find(({ id }) => params.id === id) || null;

  return { props: { page } };
}
