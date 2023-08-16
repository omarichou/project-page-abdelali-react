
import Header from "../components/header";

import Footer from "../components/footer";
import MainResponsiveDesign from "../components_main/main-Responsive Design";

import {Helmet} from "react-helmet-async";



import React from 'react';

const ResponsiveDesign = () => {
  return (
    <div>
      <Helmet>
      <title>Repsonsive Desinge page</title>
      </Helmet> 
      
      <Header/>

    <MainResponsiveDesign/>

      <Footer/>
      

    </div>
  );
}

export default ResponsiveDesign;
