import Header from "../components/header";

import Footer from "../components/footer";
import MainAnimation from "../components_main/main animation";

import {Helmet} from "react-helmet-async";



import React from 'react';

const Animation = () => {
  return (
    <div>
        <Helmet>
      <title>Animation Project</title>
      </Helmet>

      <Header/>

      <MainAnimation/> 

      <Footer/>

    </div>
  );
}

export default Animation;
