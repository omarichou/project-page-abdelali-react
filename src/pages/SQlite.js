import Header from "../components/header";

import Footer from "../components/footer";
import MainSQlite from "../components_main/main SQlite";

import {Helmet} from "react-helmet-async";

const SQlite = () => {
  return (
    <div>
      <Helmet>
      <title>SQlite Project</title>
      </Helmet>
      
      <Header/>
       <MainSQlite/>
       <Footer/>

    </div>
  );
}

export default SQlite;
