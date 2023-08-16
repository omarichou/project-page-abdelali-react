
import { Link ,NavLink } from "react-router-dom";


// context
import {useContext } from "react";
 import ThemeProvider from "../context/context.js";

const MainProject = () => {
  const {theme } = useContext(ThemeProvider);

  return (
    <div className={`${theme} mainn`}>
  <div>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <h1
        style={{
          textAlign: "center",
          fontSize: 65,
          marginTop: 70,
          marginBottom: 30
        }}
      >
        Projects
      </h1>
      <img loading="lazy" style={{ width: 60 }} src="boton/code.svg" alt="" />
    </div>
    <p
      style={{
        textAlign: "center",
        width: "60%",
        margin: "10px auto",
        fontSize: 28,
        opacity: "0.5",
        marginBottom: 100
      }}
    >
      I've built cool Native Android/ios applications that respects the UI/UX
      patterns and principles regardding to my +2 years experience in this
      field, Here are some of my favorite projects over the course of my
      journey.
    </p>
  </div>
  <div className="parents_card parents_card2">
    <div className="card">
      <div className="div_img_card">
        <a
          href="https://drive.google.com/drive/folders/13ZtXk_Mqt83PFgvFgXZHkCAc5LU_PD3U"
        
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
    <div className="card">
      <div className="div_img_card">
        <a
          href="https://drive.google.com/drive/folders/1LcsoMd2xN79PVQN7o3ANGhKrdnVCadPC"
        
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
    <div className="card">
      <div className="div_img_card">
        <a
          href="https://drive.google.com/drive/folders/17sT--pYN8TC7Zj8vu4dYeppaUpK0vb8X"

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
    <div className="card">
      <div className="div_img_card">
        <a
          href="https://drive.google.com/drive/folders/1oLs_6YXAaUoTlugTcKYdkc1hJP06XvnR"
          
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
          <NavLink to="/androidstudio" className="Android">
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
    <div className="card">
      <div className="div_img_card">
        <a
          href="https://drive.google.com/drive/folders/1nB0MNhZtVwC9oSTFPHgzyaPP8ZpdM633"
        
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
    <div className="card">
      <div className="div_img_card">
        <a
          href="https://drive.google.com/drive/folders/1LioUSh1G6Hcim5tQIU4iprqoruB1YBjj"
      
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
    <div className="card">
      <div className="div_img_card">
        <a
          href="https://drive.google.com/drive/folders/1LphVLE910VSWTQ6B3FrRhKTGFOe5uBr3"
        
        >
          <img
            loading="lazy"
            className="img_card"
            src="projet photo/learny.png"
            alt=""
          />
        </a>
      </div>
      <h3 className="msg_crd">
        <a
          
          href="https://drive.google.com/drive/folders/13ZtXk_Mqt83PFgvFgXZHkCAc5LU_PD3U"
        >
          Learny
        </a>
      </h3>
      <p className="prg_crd">
        This is an android educational application that includes all the
        learning tools with to start the best course .
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
          <a to="/java" className="Java">
            Java
          </a>
        </span>
        <span className="sppan">
          <a to="/UIUX" className="UI_UX">
            UI-UX
          </a>
        </span>
      </div>
    </div>
    <div className="card">
      <div className="div_img_card">
        <a
          href="https://drive.google.com/drive/folders/1LkdSJwS9muAj2HkRQbBuMlGG-2CavFcS"
        
        >
          <img
            loading="lazy"
            className="img_card"
            src="projet photo/muslim.png"
            alt=""
          />
        </a>
      </div>
      <h3 className="msg_crd">
        <a
      
          href="https://drive.google.com/drive/folders/13ZtXk_Mqt83PFgvFgXZHkCAc5LU_PD3U"
        >
          Muslim Project
        </a>
      </h3>
      <p className="prg_crd">
        This is my first android application wich is so simple and easy to
        understand .
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
      </div>
    </div>
  </div>
  <h1 className="view_all2">
    <a
      
      href="https://drive.google.com/drive/folders/1LNR4dsE8EscXqSaXAqXOdP2xhQDq6DSi?fbclid=IwAR0GT_HPcEkdRYkK5sbX2WXe8sDWTZ77pluwU0dL-lL04tnDVvbWxecVrKY"
    >
      View All in Drive
    </a>
  </h1>
</div>

  );
}

export default MainProject;
