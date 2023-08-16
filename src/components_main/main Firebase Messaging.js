import React from 'react';
// context
import {useContext } from "react";
 import ThemeProvider from "../context/context.js";
 import { Link ,NavLink } from "react-router-dom";



const MainFirebaseMessaging = () => {
  const {theme } = useContext(ThemeProvider);

  return (
    <div className={`${theme} mainn`}>
    <div className="top-title">
      <p style={{ marginTop: 60, marginBottom: 60 }}>
        Projects built with{" "}
        <span style={{ marginTop: 60 }}>Firebase Messaging</span>
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
            href="https://drive.google.com/drive/folders/1oLs_6YXAaUoTlugTcKYdkc1hJP06XvnR"
            target="_blank"
          >
            <img
              loading="lazy"
              className="img_card"
              src="projet photo/conference.png"
              alt=""
            />
          </a>
        </div>
        <h3 className="msg_crd">
          <a
            target="_blank"
            href="https://drive.google.com/drive/folders/13ZtXk_Mqt83PFgvFgXZHkCAc5LU_PD3U"
          >
            Meeting application
          </a>
        </h3>
        <p className="prg_crd">
          This is an android applicationthat allows the user to make a audio/video
          call with other app users, you can either signin/up with your phone
          number or with your email or with your Google account .
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
            <NavLink to="/FirebaseMessaging" className="Firebase_Messaging">
              Firebase Messaging
            </NavLink>
          </span>
          <span className="sppan">
            <NavLink to="/GoogleAuthentification" className="Google_authentification">
              Google authentification
            </NavLink>
          </span>
          <span className="sppan">
            <NavLink to="/UIUX" className="UI_UX">
              UI-UX
            </NavLink>
          </span>
          <span className="sppan">
            <NavLink to="/SQlite" className="SQlite">
              SQlite
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

export default MainFirebaseMessaging;
