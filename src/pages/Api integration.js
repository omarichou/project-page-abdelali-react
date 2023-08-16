import Header from "../components/header";

import Footer from "../components/footer";
import MainApiIntegration from "../components_main/main Api integration";

import {Helmet} from "react-helmet-async";



const ApiIntegration = () => {
  return (
    <div>
        <Helmet>
      <title>Api integration Project</title>
      </Helmet>

      <Header/>
<MainApiIntegration/>
      <Footer/>
      
    </div>
  );
}

export default ApiIntegration;
