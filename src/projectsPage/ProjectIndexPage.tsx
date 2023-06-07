import PageTitle from "../utilities/pageTitle/PageTitle";
import ProjectsClickableBanner from "../utilities/projectsClickableBanner/ProjectsClickableBanner";
const namespace = "project-page";
const ProjectIndexPage = () => {
  return (
    <div className={namespace}>
      <PageTitle text={"Projects".toUpperCase()} />
      <div className={`${namespace}-text-content`}>
          <h2>Our Expertise</h2>
          <ProjectsClickableBanner />
      </div>
    </div>
  );
};
export default ProjectIndexPage;
