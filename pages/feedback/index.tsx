import type { NextPage } from "next";
import Feedback from "../../components/forms/Feedback";
import PageSection from "../../components/ui/PageSection";

const FeedbackPage: NextPage = () => {
  return (
    <div className="page">
      <PageSection title="Give me your feedback">
        <Feedback />
      </PageSection>
    </div>
  );
};

export default FeedbackPage;
