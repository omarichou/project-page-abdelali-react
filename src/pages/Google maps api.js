import Header from "../components/header";

import Footer from "../components/footer";
import MainGoogleMapsApi from "../components_main/main Google maps api";

import {Helmet} from "react-helmet-async";

const GoogleMapsApi = () => {
  return (
    <div>
        <Helmet>
      <title>Google Maps Api Project</title>
      </Helmet>

      <Header/>
      <MainGoogleMapsApi/>
      <Footer/>
    </div>
  );
}

export default GoogleMapsApi;
