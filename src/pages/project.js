import Header from "../components/header";

import Footer from "../components/footer";
import MainProject from "../components_main/main-project";

import {Helmet} from "react-helmet-async";



const Project = () => {
  return (
    <div>
      <Helmet>
      <title>Page Project</title>
      </Helmet>
      
      <Header/>
      <MainProject/>
      <Footer/>
    </div>
  );
}

export default Project;
