import React from 'react';
import { Link ,NavLink } from "react-router-dom";


// context
import {useContext } from "react";
 import ThemeProvider from "../context/context.js";

const MainApiIntegration = () => {
  const {theme } = useContext(ThemeProvider);

  return (
    <div className={`${theme} mainn` }>
  <div className="top-title">
    <p style={{ marginTop: 60, marginBottom: 60 }}>
      Projects built with <span style={{ marginTop: 60 }}>Api integration</span>
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
          href="https://drive.google.com/drive/folders/1LioUSh1G6Hcim5tQIU4iprqoruB1YBjj"
          target="_blank"
        >
          <img
            loading="lazy"
            className="img_card"
            src="projet photo/tasksly.png"
            alt=""
          />
        </a>
      </div>
      <h3 className="msg_crd">
        <a
          target="_blank"
          href="https://drive.google.com/drive/folders/13ZtXk_Mqt83PFgvFgXZHkCAc5LU_PD3U"
        >
          Tasksly
        </a>
      </h3>
      <p className="prg_crd">
        Tasksly is a smart Todo task application that uses a deep learning model
        to extract cells from tables, it will give you the ability to take
        picture of some table and the applicatinop will make from it a bunch
        from tasks, Also we added a blockchain payment gateway inside the
        application for those who wants to pay in a decentrelized and secure way
        .
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
          <NavLink to="java.html" className="Java">
            Java
          </NavLink>
        </span>
        <span className="sppan">
          <NavLink to="/Firebase" className="Firebase">
            Firebase
          </NavLink>
        </span>
        <span className="sppan">
          <NavLink to="/SQlite" className="SQlite">
            SQlite
          </NavLink>
        </span>
        <span className="sppan">
          <NavLink to="/ApiIntegration" className="Api_integration">
            Api integration
          </NavLink>
        </span>
        <span className="sppan">
          <NavLink to="/Blockchain" className="Blockchain">
            Blockchain
          </NavLink>
        </span>
        <span className="sppan">
          <NavLink to="/Web3js" className="Web3js">
            Web3js
          </NavLink>
        </span>
        <span className="sppan">
          <p className="ocr">Optical character recognition (AI model)</p>
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

export default MainApiIntegration;
