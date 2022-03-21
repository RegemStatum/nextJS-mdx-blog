import type { NextPage } from "next";
import Head from "next/head";
import Feedback from "../../components/forms/Feedback";
import PageSection from "../../components/ui/PageSection";

const FeedbackPage: NextPage = () => {
  return (
    <div className="page page-min-height">
      <Head>
        <title>AlKon MDX | Feedback</title>
        <meta
          name="description"
          content="Al Kon mdx blog feedback page. Here you can leave your feedback"
        />
      </Head>
      <PageSection title="Give me your feedback">
        <Feedback />
      </PageSection>
    </div>
  );
};

export default FeedbackPage;
