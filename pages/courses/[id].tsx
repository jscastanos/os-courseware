import courses from "../api/courses.json";

interface Page {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
}

export default function Course({ page }: { page: Page }) {
  return (
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
  );
}

export async function getStaticPaths() {
  const paths = courses.map((page) => {
    return { params: { id: page.id } };
  });
  return { paths, fallback: true };
}

export async function getStaticProps({ params }: any) {
  const page = courses.find(({ id }) => params.id === id);

  return { props: { page } };
}
