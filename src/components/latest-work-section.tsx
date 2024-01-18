import Section from "./common/section";
import LatestWorkCard from "./common/latest-work-card";

import chatapp from "../assets/images/chat-app-preview-min.jpg";
import teamapp from "../assets/images/team-app-preview-min.jpg";

const LatestWorkSection = () => {
  return (
    <Section>
      <div className="container mt-[100px]">
        <div className="flex flex-col gap-10">
          <LatestWorkCard
            img={chatapp}
            title="Chat App website"
            label={["Web Design", "Webflow Development", "Concept"]}
            caption="This is a homepage design and build for a concept project – a chat application. I have designed the page first then later built a responsive page in Webflow."
            linkTo="/my-work/chat-app"
          />
          <LatestWorkCard
            img={teamapp}
            title="Team website"
            label={["Web Design", "Webflow Development", "Concept"]}
            caption="A full website design and build for a concept team collaboration platform. This website also includes a beautiful blog. I have built the website and the blog in Webflow which has one of the best CMS for blog hosting."
            linkTo="/my-work/team-app"
          />
        </div>
      </div>
    </Section>
  );
};
export default LatestWorkSection;
