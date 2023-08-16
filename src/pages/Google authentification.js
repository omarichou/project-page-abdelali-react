import Header from "../components/header";

import Footer from "../components/footer";
import MainGoogleAuthentification from "../components_main/main Google authentification";

import {Helmet} from "react-helmet-async";

const GoogleAuthentification = () => {
  return (
    <div>
      <Helmet>
      <title>Google Authentification Project</title>
      </Helmet>

      <Header/>
      <MainGoogleAuthentification/>
      <Footer/>
    </div>
  );
}

export default GoogleAuthentification;
