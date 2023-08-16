import Header from "../components/header";

import Footer from "../components/footer";
import MainOpticalCharacterRecognitionAIModel from "../components_main/main Optical character recognition (AI model)";

import {Helmet} from "react-helmet-async";
const OpticalCharacterRecognitionAIModel = () => {
  return (
    <div>
        <Helmet>
      <title>Page Project</title>
      </Helmet>

      <Header/>
      <MainOpticalCharacterRecognitionAIModel/>
      <Footer/>
    </div>
  );
}

export default OpticalCharacterRecognitionAIModel;
