// import { useState } from "react";
import "../index.css";


import { NavLink ,Link } from "react-router-dom";

// context
import {useContext } from "react";
 import ThemeProvider from "../context/context.js";


const Header = () => {
  // const econ1 = document.getElementById("econ1")
  // const responsiv_cntct= document.querySelector(".non")

  const fnccr = (e) => {
    e.parentElement.parentElement.classList.add("dn");
    e.parentElement.parentElement.parentElement.classList.remove("ofh");
  };

  const fnc_econ1 = () => {
    const p = document.querySelector(".res_para");
    p.classList.remove("dn");
    p.classList.remove("ani_op");
    p.parentElement.classList.add("ofh");
  };

  
  const {theme , changetheme} = useContext(ThemeProvider);

  return (
    <>
      <header className={`flex ${theme}`}>


        <div className="ichouimage">
          <img
            className="imgheader"
            loading="lazy"
            src="./abdelali_profile.png"
            alt="verifier votre connection enternet"
          />
          <div className="leslettre">
            <span className="spannichou">I</span>
            <span className="spannichou">c</span>
            <span className="spannichou">h</span>
            <span className="spannichou">o</span>
            <span className="spannichou mg">u</span>
            <span className="spannichou">A</span>
            <span className="spannichou">b</span>
            <span className="spannichou">d</span>
            <span className="spannichou">e</span>
            <span className="spannichou">l</span>
            <span className="spannichou">a</span>
            <span className="spannichou">l</span>
            <span className="spannichou">i</span>
          </div>
        </div>
        
        <div
       onChange={() => {
        changetheme(theme == "light" ? "dark" : "light")
       }}
       className="btn-container st"
      
     >
       <i className="fa fa-sun-o" aria-hidden="true" />
       <label className="switch btn-color-mode-switch">
         <input
           type="checkbox"
           name="color_mode"
           id="color_mode"
           defaultValue={1}
         />
         <label
           htmlFor="color_mode"
           data-on="Dark"
           data-off="Light"
           className="btn-color-mode-switch-inner"
         />
       </label>
       <i className="fa fa-moon-o" aria-hidden="true" />
     </div>

        <div className="leslink">
          
          <NavLink className="linka link1" to="/">
            Home
          </NavLink>
          <NavLink className="linka link2" to="/project">
            Projects
          </NavLink>
          <a className="linka link3" href="#omarre">
            Contact
          </a>
        </div>
        <div
          onClick={() => {
            fnc_econ1();
          }}
          id="econ1"
          className="leslink2 icon-bars"
        ></div>
      </header>

      <div
        onClick={(value) => {
          if (value.target.getAttribute("id") === "iconn") {
            // eo.target.parentElement.parentElement.classList.add("dn")
            setTimeout(fnccr, 600, value.target);
            value.target.parentElement.parentElement.classList.add("ani_op");
          }
        }}
        className={`${theme} res_para dn`}
      >
        <div className="flex_parent_resp">
          <div className="flixi">
            <img
              className="imgheader2"
              loading="lazy"
              src="./abdelali_profile.png"
              alt="verifier votre connection enternet"
            />
            <p>Abdelali ichou</p>
          </div>
          <div id="iconn" className="icon-remove ecoo"></div>
        </div>
        <div className="child_res">
        <p className="linkk_responsive">
            
          </p>
          <p className="linkk_responsive cursr" onClick={() => {
            changetheme(theme == "light" ? "dark" : "light")
          }}>
            {theme}
          </p>
          <p className="linkk_responsive">
            <NavLink to="/">Home</NavLink>
          </p>
          <p className="linkk_responsive">
            <NavLink to="/project">Projects</NavLink>
          </p>
          <p className="linkk_responsive ">
            <a
              onClick={(eo) => {
                eo.target.parentElement.parentElement.parentElement.parentElement.classList.remove(
                  "ofh"
                );
                eo.target.parentElement.parentElement.parentElement.classList.add(
                  "dn"
                );
              }}
              className="non"
              href="#omarre"
            >
              Contact
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
