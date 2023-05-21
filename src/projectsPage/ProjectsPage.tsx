import { Route, Routes } from "react-router-dom";
import ProjectIndexPage from "./ProjectIndexPage";
const ProjectPage = () => {
  return (
    <Routes>
      <Route index element={<ProjectIndexPage />} />
      <Route path="/private-residential" element={<div>Project Page</div>} />
      <Route path="/commercial" element={<div>Project Page</div>} />
      <Route
        path="/furniture-manufacturing"
        element={<div>Project Page</div>}
      />
      <Route path="/hospitality" element={<div>Project Page</div>} />
    </Routes>
  );
};
export default ProjectPage;
