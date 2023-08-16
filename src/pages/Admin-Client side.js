import Header from "../components/header";

import Footer from "../components/footer";
import MainAdminClientSide from "../components_main/main Admin-Client side";

import {Helmet} from "react-helmet-async";

const AdminClientSide = () => {
  return (
    <div>
      <Helmet>
      <title>Admin Client Side  Project</title>
      </Helmet>

      <Header/>

<MainAdminClientSide/>
      <Footer/>
      
    </div>
  );
}

export default AdminClientSide;
