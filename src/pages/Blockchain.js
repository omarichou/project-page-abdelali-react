import Header from "../components/header";

import Footer from "../components/footer";
import MainBlockchain from "../components_main/main Blockchain";

import {Helmet} from "react-helmet-async";




const Blockchain = () => {
  return (
    <div>
      <Helmet>
      <title>Block chain Project</title>
      </Helmet>

      <Header/>
      <MainBlockchain/>
      <Footer/>
      
    </div>
  );
}

export default Blockchain;
