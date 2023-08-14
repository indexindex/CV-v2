import About from "../src/components/About";
import CustomText from "../src/components/CustomText";
import Interests from "../src/components/Interests";
import { ImagePageBanner } from "../src/components/PageBanner";
import ResumeSection from "../src/components/ResumeSection";
import {
  CodingSkills,
  KnowledgeSkills,
  LanguagesSkills,
} from "../src/components/Skills";
import Layout from "../src/layout/Layout";
const ResumeImage = () => {
  const typingAnimation = [
    `<span class="typed-bread"> <a href="#">Home</a>  / Resume </span>`,
  ];
  return (
    <Layout>
      <ImagePageBanner pageName={"Resume"} typingData={typingAnimation} />
      <About />
      <ResumeSection />
      {/* <CodingSkills /> */}
      <KnowledgeSkills />
      <LanguagesSkills />
      <Interests />
      <CustomText />
    </Layout>
  );
};
export default ResumeImage;
