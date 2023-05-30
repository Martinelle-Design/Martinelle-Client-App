import PageTitle from "../utilities/pageTitle/PageTitle";
import ProjectsClickableBanner from "../utilities/projectsCickableBanner/ProjectsClickableBanner";
const namespace = "project-page";
const ProjectIndexPage = () => {
  return (
    <div className={namespace}>
      <PageTitle text={"Projects".toUpperCase()} />
      <div className={`${namespace}-text-content`}>
        <h2>Our Expertise</h2>
        <p>
          Martinelle offers services that cover your people and space. Our team
          can work with you from beginning-to-end, or meet your needs at any
          stage of a project. By using our diversity of ideas and research, we
          develop proposals that continue to tackle our clients challenges.{" "}
        </p>
      </div>
      <ProjectsClickableBanner />
    </div>
  );
};
export default ProjectIndexPage;
