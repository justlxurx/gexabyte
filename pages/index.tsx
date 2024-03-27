import { Stats } from "components/custom/home-page/Stats";
import TechStack from "components/custom/home-page/TechStack";
import MainProjects from "components/custom/projects/MainProjects";
import { News } from "components/UI/molecules/News/News";
import type { NextPage } from "next";
import { useTranslation } from "react-i18next";
import Services from "../components/custom/home-page/Services";
import TestVideo from "../components/UI/TestVideo";
import ScrollButton from "../components/custom/button/scrollButton";
import GlobalLayout from "components/layouts/GlobalLayout";
import Partners from "../components/custom/home-page/Partners";

const Home: NextPage = () => {
  const { t } = useTranslation();

  return (
    <GlobalLayout>
      <div
        style={{
          minHeight: "100vh",
          overflow: "hidden",
          backgroundColor: "white",
        }}
      >
        <TestVideo title={t("home.title")} subTitle={t("home.subtitle")} />
        <TechStack />
        <Stats />
        <Services />
        <Partners />
        <MainProjects />
      </div>
    </GlobalLayout>
  );
};

export default Home;
