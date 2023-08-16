
// context
// import {useContext } from "react";
//  import ThemeProvider from "../context/context.js";
 import { Link ,NavLink } from "react-router-dom";


import React from 'react';




const Maiiin = () => {
  // const {theme } = useContext(ThemeProvider);

  return (
  <div className={` mainn`}>
  <div className="parent-parent" style={{ marginBottom: 130 }}>
    <section className="parent">
      <p className="paragr margin">Hey, I'm Abdelali.</p>
      <h1 className="margin">
        I enjoy <span className="sectioncyan">building</span> and 
        <span className="sectioncyan">designing</span> <br />
        mobile apps
      </h1>
      <div className="parentsbutton">
        <button className="button2" >Tell me more</button>
        <a className="button2" id="omar">
          Download CV
        </a>
      </div>
    </section>
  </div>
  <div className="div-media" />
  <section className="meme-after" style={{ marginBottom: 100 }}>
    <h1 className="let" style={{ fontSize: 37, margin: "0px 0px 30px 30px" }}>
      Let me introduce myself.
    </h1>
    <div className="fllex">
      <div className="div_immg">
        <img
          className="img2"
          loading="lazy"
          src="./abdelali_profile.png"
          alt=""
        />
      </div>
      <div className="voisinag_img">
        <p >
          This is Abdelali Ichou, 1CS student in the Higher school of computer
          sciences of Sidi Bel Abbes (ESI SBA). I'm a Native Full Stack mobile
          Developer which makes me able to create for you Native ANDROID/IOS
          apps with the best quality regardding to my +2 years experience in
          this field, I'm also a UI/UX designer, so all my projects are designed
          and coded by me !
        </p>
      </div>
    </div>
  </section>
  <div className="div-media " />
  <section className="meme-after">
    <h1 className=" let1" style={{ fontSize: 37, margin: "0px 0px 30px 30px" }}>
      Here are a few of my favorite projects.
    </h1>
    <div className="parents_card">
      <div className="card">
        <div className="div_img_card">
          <a
            href="https://drive.google.com/drive/folders/13ZtXk_Mqt83PFgvFgXZHkCAc5LU_PD3U"
          
          >
            <img
              className="img_card"
              loading="lazy"
              src="projet photo/animations.png"
              alt=""
            />
          </a>
        </div>
        <h3 className="msg_crd">
          <a
        
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
            <NavLink href="/Androidstudio" className="Android_Studio">
              Android Studio
            </NavLink>
          </span>
          <span className="sppan">
            <NavLink to="/Androidstudio">Android</NavLink>
          </span>
          <span className="sppan">
            <NavLink to="/java">Java</NavLink>
          </span>
          <span className="sppan">
            <NavLink to="/responsiveDesign">Responsive Design</NavLink>
          </span>
          <span className="sppan">
            <NavLink to="/Animation">Animations</NavLink>
          </span>
        </div>
      </div>
      <div className="card">
        <div className="div_img_card">
          <a
            href="https://drive.google.com/drive/folders/1LcsoMd2xN79PVQN7o3ANGhKrdnVCadPC"
          
          >
            <img
              className="img_card"
              loading="lazy"
              src="projet photo/ecommerce.png"
              alt=""
            />
          </a>
        </div>
        <h3 className="msg_crd">
          <a
          
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
            <NavLink to="/Androidstudio" className="Android_Studio">
              Android Studio
            </NavLink>
          </span>
          <span className="sppan">
            <NavLink to="/android">Android</NavLink>
          </span>
          <span className="sppan">
            <NavLink to="/java">Java</NavLink>
          </span>
          <span className="sppan">
            <NavLink to="/Firebase">Firebase</NavLink>
          </span>
          <span className="sppan">
            <NavLink to="/GoogleMapsApi">Google maps api</NavLink>
          </span>
          <span className="sppan">
            <NavLink to="/SQlite">SQlite</NavLink>
          </span>
          <span className="sppan">
            <NavLink to="/UIUX">UI-UX</NavLink>
          </span>
          <span className="sppan">
            <NavLink to="/AdminClientSide">Admin-Client side</NavLink>
          </span>
        </div>
      </div>
      <div className="card">
        <div className="div_img_card">
          <a
            href="https://drive.google.com/drive/folders/17sT--pYN8TC7Zj8vu4dYeppaUpK0vb8X"
      
          >
            <img
              className="img_card"
              loading="lazy"
              src="projet photo/noteit.png"
              alt=""
            />
          </a>
        </div>
        <h3 className="msg_crd">
          <a
          
            href="https://drive.google.com/drive/folders/17sT--pYN8TC7Zj8vu4dYeppaUpK0vb8X"
          >
            Note it
          </a>
        </h3>
        <p className="prg_crd">
          This is an android application that consists in saving your daily
          notes without the need of internet connection, it has a unique desgin
          and it uses Room Database to store all your important notes, it also
          has the Night/Day mode implementation
        </p>
        <div className="div_span">
          <span className="sppan">
            <NavLink to="/Androidstudio" className="Android_Studio">
              Android Studio
            </NavLink>
          </span>
          <span className="sppan">
            <NavLink to="/android">Android</NavLink>
          </span>
          <span className="sppan">
            <NavLink to="/java">Java</NavLink>
          </span>
          <span className="sppan">
            <NavLink to="/SQlite">SQlite</NavLink>
          </span>
          <span className="sppan">
            <NavLink to="/RoomDB">Room DB</NavLink>
          </span>
          <span className="sppan">
            <NavLink to="/MVVMArchitecture">MVVM architecture</NavLink>
          </span>
          <span className="sppan">
            <NavLink to="/DarkLightMode">Dark-Light mode</NavLink>
          </span>
          <span className="sppan">
            <NavLink to="/UIUX">UI-UX</NavLink>
          </span>
        </div>
      </div>
    </div>
    <h1 className="view_all">
      <NavLink to="/project">View All</NavLink>
    </h1>
  </section>

  <h2
    style={{
      textAlign: "center",
      fontSize: 47,
      fontWeight: "bold",
      padding: 30,
      paddingBottom: 50
    }}
  >
    Interested in Working Together?
  </h2>
  <button className="button2 get_touch">
    <a href="https://www.facebook.com/ali.ichou.31" >
      Get in Touch
    </a>
  </button>
  <div className="flixo">
    <img loading="lazy" className="img_fin" src="boton/fancyLines.svg" alt="" />
  </div>

</div>

  );
}

export default Maiiin;
