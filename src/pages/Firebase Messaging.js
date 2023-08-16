import Header from "../components/header";

import Footer from "../components/footer";
import MainFirebaseMessaging from "../components_main/main Firebase Messaging";

import {Helmet} from "react-helmet-async";

const FirebaseMessaging = () => {
  return (
    <div>
      <Helmet>
      <title>Firebase Messaging Project</title>
      </Helmet>

      <Header/>
      <MainFirebaseMessaging/>
      <Footer/>
    </div>
  );
}

export default FirebaseMessaging;
