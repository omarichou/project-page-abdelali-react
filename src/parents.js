import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";

//  context
// import {useContext } from "react";
//  import themecontext from "./context/context";


//
import App from "./App";
import Project from "./pages/project.js";
import AndroidStudio from "./pages/Android-Studio";
import Android from "./pages/android";
import Java from "./pages/java";

import ResponsiveDesign from "./pages/Responsive Design";

import Animation from "./pages/animation";
import AdminClientSide from "./pages/Admin-Client side";
import ApiIntegration from "./pages/Api integration";
import Blockchain from "./pages/Blockchain";
import DoctorClientSide from "./pages/Doctor-Client side";
import DarkLightMode from "./pages/Dark-Light mode";
import FirebaseMessaging from "./pages/Firebase Messaging";
import Firebase from "./pages/Firebase";
import GoogleAuthentification from "./pages/Google authentification";
import GoogleMapsApi from "./pages/Google maps api";
import MVVMArchitecture from "./pages/MVVM architecture";
import OpticalCharacterRecognitionAIModel from "./pages/Optical character recognition (AI model)";
import RoomDB from "./pages/Room DB";
import SQlite from "./pages/SQlite";
import UIUX from "./pages/UI-UX";
import Web3js from "./pages/Web3js";
//

//

import {useContext } from "react";
import ThemeProvider from "./context/context";






//


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h3 className="h3">erreur</h3>,
  },
  {
    path: "/project",
    element: <Project />,
  },
  {
    path: "/androidstudio",
    element: <AndroidStudio />,
  },
  {
    path: "/android",
    element: <Android />,
  },
  {
    path: "/java",
    element: <Java />,
  },
  {
    path: "/responsiveDesign",
    element: <ResponsiveDesign />,
  },
  {
    path: "/Animation",
    element: <Animation />,
  },
  {
    path: "/AdminClientSide",
    element: <AdminClientSide />,
  },
  {
    path: "/ApiIntegration",
    element: <ApiIntegration />,
  },
  {
    path: "/Blockchain",
    element: <Blockchain />,
  },
  {
    path: "/DoctorClientSide",
    element: <DoctorClientSide />,
  },
  {
    path: "/DarkLightMode",
    element: <DarkLightMode />,
  },
  {
    path: "/FirebaseMessaging",
    element: <FirebaseMessaging />,
  },
  {
    path: "/Firebase",
    element: <Firebase />,
  },
  {
    path: "/GoogleAuthentification",
    element: <GoogleAuthentification />,
  },
  {
    path: "/GoogleMapsApi",
    element: <GoogleMapsApi />,
  },
  {
    path: "/MVVMArchitecture",
    element: <MVVMArchitecture />,
  },
  {
    path: "/OpticalCharacterRecognitionAIModel",
    element: <OpticalCharacterRecognitionAIModel />,
  },
  {
    path: "/RoomDB",
    element: <RoomDB />,
  },
  {
    path: "/SQlite",
    element: <SQlite />,
  },
  {
    path: "/UIUX",
    element: <UIUX />,
  },
  {
    path: "/Web3js",
    element: <Web3js />,
  },
]);

const Parents = () => {
  const {theme } = useContext(ThemeProvider);

  return (
    <div  className={theme}>
        <RouterProvider router={router} />
    </div>
  );
};

export default Parents;
