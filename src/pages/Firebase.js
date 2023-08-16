import Header from "../components/header";

import Footer from "../components/footer";
import MainFirebase from "../components_main/main Firebase";

import {Helmet} from "react-helmet-async";

const Firebase = () => {
  return (
    <div>
      <Helmet>
      <title>Page Project</title>
      </Helmet>
      <Header/>

      <MainFirebase/>

      <Footer/>
      
    </div>
  );
}

export default Firebase;
