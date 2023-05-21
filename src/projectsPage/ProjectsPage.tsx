import { Route, Routes } from "react-router-dom";
import ProjectIndexPage from "./ProjectIndexPage";
const ProjectPage = () => {
  return (
    <Routes>
      <Route path="/" element={<ProjectIndexPage />}>
        <Route path="/private-residential" element={<div>Project Page</div>} />
        <Route path="/commercial" element={<div>Project Page</div>} />
        <Route
          path="/furniture-manufacturing"
          element={<div>Project Page</div>}
        />
        <Route path="/hospitality" element={<div>Project Page</div>} />
      </Route>
    </Routes>
  );
};
export default ProjectPage;
