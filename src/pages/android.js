import Header from "../components/header";

import Footer from "../components/footer";
import MainAndoid from "../components_main/mainAndoid";

import {Helmet} from "react-helmet-async";


const Android = () => {
  return (
    <>
       <Helmet>
      <title>Andoid page</title>
      </Helmet> 

    <Header/>
    <MainAndoid/>
    <Footer/>
      
    </>
  );
}

export default Android;
