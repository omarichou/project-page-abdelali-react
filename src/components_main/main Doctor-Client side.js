import React from 'react';
// context
import {useContext } from "react";
 import ThemeProvider from "../context/context.js";

 import { Link ,NavLink } from "react-router-dom";



const MainDoctorClientSide = () => {
  const {theme } = useContext(ThemeProvider);

  return (
    <div className={`${theme} mainn`}>
  <div className="top-title">
    <p style={{ marginTop: 60, marginBottom: 60 }}>
      Projects built with{" "}
      <span style={{ marginTop: 60 }}>Doctor-Client side</span>
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
          href="https://drive.google.com/drive/folders/1nB0MNhZtVwC9oSTFPHgzyaPP8ZpdM633"
          target="_blank"
        >
          <img
            loading="lazy"
            className="img_card"
            src="projet photo/dental.png"
            alt=""
          />
        </a>
      </div>
      <h3 className="msg_crd">
        <a
          target="_blank"
          href="https://drive.google.com/drive/folders/13ZtXk_Mqt83PFgvFgXZHkCAc5LU_PD3U"
        >
          Dental Care
        </a>
      </h3>
      <p className="prg_crd">
        This is an android application consists in the organization and the
        managment of a dental cabinet, it has a managment system that allows the
        cabinet owner to contact his patient directly and manage thier meeting
        requests and comments .
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
          <NavLink to="/UIUX" className="UI_UX">
            UI-UX
          </NavLink>
        </span>
        <span className="sppan">
          <NavLink to="/DoctorClientSide" className="Doctor_Client_side">
            Doctor-Client side
          </NavLink>
        </span>
        <span className="sppan">
          <NavLink to="/Firebase" className="Firebase">
            Firebase
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

export default MainDoctorClientSide;
