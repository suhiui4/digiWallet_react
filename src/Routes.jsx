import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import SettingEditProfile from "pages/SettingEditProfile";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "settingeditprofile",
      element: <SettingEditProfile />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
