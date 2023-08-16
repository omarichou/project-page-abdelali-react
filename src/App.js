import Header from "./components/header";
import Maiiin from "./components/maiiin";
import Footer from "./components/footer";

import {Helmet} from "react-helmet-async";


function App() {
  return (
    <div>
      <Helmet>
      <title>Home page</title>
      </Helmet>
      
    <Header/>
    <Maiiin/>
    <Footer/>

    </div>
  );
}

export default App;
