import Header from "../components/header";

import Footer from "../components/footer";
import MainDoctorClientSide from "../components_main/main Doctor-Client side";

import {Helmet} from "react-helmet-async";

const DoctorClientSide = () => {
  return (
    <div>
        <Helmet>
      <title>Doctor Client Side Project</title>
      </Helmet>


      <Header/>
      <MainDoctorClientSide/>
      <Footer/>
      
    </div>
  );
}

export default DoctorClientSide;
