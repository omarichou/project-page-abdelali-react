import Header from "../components/header";

import Footer from "../components/footer";
import MainUIUX from "../components_main/main UI-UX";

import {Helmet} from "react-helmet-async";


const UIUX = () => {
  return (
    <div>
      <Helmet>
      <title>ui-ux Project</title>
      </Helmet>

      <Header/>
      <MainUIUX/>
      <Footer/>
      
    </div>
  );
}

export default UIUX;
