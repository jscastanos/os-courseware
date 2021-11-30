import Head from "next/head";
import Page from "./components/Page";
import CoursePage from "./_courses";

export default function Home() {
  return (
    <div>
      <Head>
        <title>OS Courseware</title>
      </Head>
      <Page>
        <CoursePage />
      </Page>
    </div>
  );
}
