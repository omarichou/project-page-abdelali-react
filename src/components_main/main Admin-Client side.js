import { Link ,NavLink } from "react-router-dom";


// context
import {useContext } from "react";
 import ThemeProvider from "../context/context.js";

const MainAdminClientSide = () => {
  const {theme } = useContext(ThemeProvider);

  return (
    <div className={`${theme} mainn`}>
  <div className="top-title">
    <p style={{ marginTop: 60, marginBottom: 60 }}>
      Projects built with{" "}
      <span style={{ marginTop: 60 }}>Admin-Client side</span>
    </p>
    <img
      className="img-title"
      loading="lazy"
      style={{ width: 60 }}
      src="boton/code.svg"
      alt=""
    />
  </div>
  <div className="parents_card parents_card2">
    <div className="card">
      <div className="div_img_card">
        <a
          href="https://drive.google.com/drive/folders/1LcsoMd2xN79PVQN7o3ANGhKrdnVCadPC"
          target="_blank"
        >
          <img
            loading="lazy"
            className="img_card"
            src="projet photo/ecommerce.png"
            alt=""
          />
        </a>
      </div>
      <h3 className="msg_crd">
        <a
          target="_blank"
          href="https://drive.google.com/drive/folders/1LcsoMd2xN79PVQN7o3ANGhKrdnVCadPC"
        >
          E-Commerce
        </a>
      </h3>
      <p className="prg_crd">
        This is a complete e-commerce project consists of two applications
        (Client/Admin) to facilate shops managing and the sell/buy process
        between the shop owner and the clients .
      </p>
      <div className="div_span">
        <span className="sppan">
          <NavLink to="/androidstudio" className="Android_Studio">
            Android Studio
          </NavLink>
        </span>
        <span className="sppan">
          <NavLink to="/android" className="Android">
            Android
          </NavLink>
        </span>
        <span className="sppan">
          <NavLink to="/java" className="Java">
            Java
          </NavLink>
        </span>
        <span className="sppan">
          <NavLink to="/Firebase" className="Firebase">
            Firebase
          </NavLink>
        </span>
        <span className="sppan">
          <NavLink to="/GoogleMapsApi" className="Google_maps_api">
            Google maps api
          </NavLink>
        </span>
        <span className="sppan">
          <NavLink to="/SQlite" className="SQlite">
            SQlite
          </NavLink>
        </span>
        <span className="sppan">
          <NavLink to="/UIUX" className="UI_UX">
            UI-UX
          </NavLink>
        </span>
        <span className="sppan">
          <NavLink to="/AdminClientSide" className="Admin_Client_side">
            Admin-Client side
          </NavLink>
        </span>
      </div>
    </div>
  </div>
  <h1 className="view_all2">
    <a href="prj2.html">View All </a>
  </h1>
</div>

  );
}

export default MainAdminClientSide;
