import Header from "../components/header";
import Footer from "../components/footer";
import MainAndroidStudio from "../components_main/mainAndroidStudio";


import {Helmet} from "react-helmet-async";






import React from 'react';

const AndroidStudio = () => {
  return (
    <>
    <Helmet>
      <title>Android Studio  page</title>
    </Helmet>

    <Header />

    <MainAndroidStudio/>

    <Footer />
  </>
  );
}

export default AndroidStudio;
