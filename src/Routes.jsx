import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Homescreendashboard = React.lazy(
  () => import("pages/Homescreendashboard"),
);
const TryNow = React.lazy(() => import("pages/TryNow"));
const Signup = React.lazy(() => import("pages/Signup"));
const Frame = React.lazy(() => import("pages/Frame"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Frame />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/trynow" element={<TryNow />} />
          <Route
            path="/homescreendashboard"
            element={<Homescreendashboard />}
          />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
