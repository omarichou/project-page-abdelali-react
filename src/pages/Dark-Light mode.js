import Header from "../components/header";

import Footer from "../components/footer";
import MainDarkLightMode from "../components_main/main Dark-Light mode";

import {Helmet} from "react-helmet-async";

const DarkLightMode = () => {
  return (
    <div>
      <Helmet>
      <title>Dark Light Mode Project</title>
      </Helmet>

      <Header/>
      <MainDarkLightMode/>
      <Footer/>
    </div>
  );
}

export default DarkLightMode;
