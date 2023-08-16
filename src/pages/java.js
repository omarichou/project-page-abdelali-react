import Header from "../components/header";

import Footer from "../components/footer";
import MainJAVA from "../components_main/mainJAVA";

import {Helmet} from "react-helmet-async";






const Java = () => {
  return (
    <>
    
    <Helmet>
    <title>Java page</title>
    </Helmet> 


      <Header/>
      <MainJAVA/>
      <Footer/>
    </>
  );
}

export default Java;
