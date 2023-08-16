// context
import {useContext } from "react";
 import ThemeProvider from "../context/context.js";


 import { Link ,NavLink } from "react-router-dom";



const MainResponsiveDesign = () => {
  const {theme } = useContext(ThemeProvider);

  return (
    <div className={`${theme} mainn`}>
  <div className="top-title">
    <p style={{ marginTop: 60, marginBottom: 60 }}>
      Projects built with{" "}
      <span style={{ marginTop: 60 }}>Responsive Design</span>
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
          href="https://drive.google.com/drive/folders/13ZtXk_Mqt83PFgvFgXZHkCAc5LU_PD3U"
          target="_blank"
        >
          <img
            loading="lazy"
            className="img_card"
            src="projet photo/animations.png"
            alt=""
          />
        </a>
      </div>
      <h3 className="msg_crd">
        <a
          target="_blank"
          href="https://drive.google.com/drive/folders/13ZtXk_Mqt83PFgvFgXZHkCAc5LU_PD3U"
        >
          Animation Login
        </a>
      </h3>
      <p className="prg_crd">
        This is a simple application that simulates the Login /Signup process
        with a good looking design ad some cool aniamtions
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
          <NavLink to="/responsiveDesign" className="Responsive_Design">
            Responsive Design
          </NavLink>
        </span>
        <span className="sppan">
          <NavLink to="/Animation" className="Animations">
            Animations
          </NavLink>
        </span>
      </div>
    </div>
  </div>
  <h1 className="view_all2">
    <NavLink to="/project">View All </NavLink>
  </h1>
</div>

  );
}

export default MainResponsiveDesign;
