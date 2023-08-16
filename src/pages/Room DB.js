import Header from "../components/header";

import Footer from "../components/footer";
import MainRoomDB from "../components_main/main Room DB";

import {Helmet} from "react-helmet-async";


const RoomDB = () => {
  return (
    <div>
        <Helmet>
      <title>Page Project</title>
      </Helmet>
      <Header/>
      <MainRoomDB/>
      <Footer/>
    </div>
  );
}

export default RoomDB;
