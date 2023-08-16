import Header from "../components/header";

import Footer from "../components/footer";
import MainMVVMArchitecture from "../components_main/main MVVM architecture";

import {Helmet} from "react-helmet-async";

const MVVMArchitecture = () => {
  return (
    <div>
        <Helmet>
      <title>MVVM Architecture Project</title>
      </Helmet>
      <Header/>
      <MainMVVMArchitecture/>
      <Footer/>
    </div>
  );
}

export default MVVMArchitecture;
