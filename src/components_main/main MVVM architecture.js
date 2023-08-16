import React from 'react';
// context
import {useContext } from "react";
 import ThemeProvider from "../context/context.js";

 import { Link ,NavLink } from "react-router-dom";



const MainMVVMArchitecture = () => {
  const {theme } = useContext(ThemeProvider);

  return (
    <div className={`${theme} mainn`}>
  <div className="top-title">
    <p style={{ marginTop: 60, marginBottom: 60 }}>
      Projects built with{" "}
      <span style={{ marginTop: 60 }}>MVVM architecture</span>
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
          href="https://drive.google.com/drive/folders/17sT--pYN8TC7Zj8vu4dYeppaUpK0vb8X"
          target="_blank"
        >
          <img
            loading="lazy"
            className="img_card"
            src="projet photo/noteit.png"
            alt=""
          />
        </a>
      </div>
      <h3 className="msg_crd">
        <a
          target="_blank"
          href="https://drive.google.com/drive/folders/17sT--pYN8TC7Zj8vu4dYeppaUpK0vb8X"
        >
          Note it
        </a>
      </h3>
      <p className="prg_crd">
        This is an android application that consists in saving your daily notes
        without the need of internet connection, it has a unique desgin and it
        uses Room Database to store all your important notes, it also has the
        Night/Day mode implementation
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
          <NavLink to="/SQlite" className="SQlite">
            SQlite
          </NavLink>
        </span>
        <span className="sppan">
          <NavLink to="/RoomDB" className="Room_DB">
            Room DB
          </NavLink>
        </span>
        <span className="sppan">
          <NavLink to="/MVVMArchitecture" className="MVVM_architecture">
            MVVM architecture
          </NavLink>
        </span>
        <span className="sppan">
          <NavLink to="/DarkLightMode" className="Dark_Light_mode">
            Dark-Light mode
          </NavLink>
        </span>
        <span className="sppan">
          <NavLink to="/UIUX" className="UI_UX">
            UI-UX
          </NavLink>
        </span>
      </div>
    </div>
  </div>
  <h1 className="view_all2">
    <NavLink  to="/project">View All </NavLink>
  </h1>
</div>

  );
}

export default MainMVVMArchitecture;
