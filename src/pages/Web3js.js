import Header from "../components/header";

import Footer from "../components/footer";
import MainWeb3js from "../components_main/main Web3js";

import {Helmet} from "react-helmet-async";

import React from 'react';

const Web3js = () => {
  return (
    <div>
      <Helmet>
      <title>Web3js Project</title>
      </Helmet>
      <Header/>
      <MainWeb3js/>
      <Footer/>
    </div>
  );
}

export default Web3js;
