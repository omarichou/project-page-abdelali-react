// context
import {useContext } from "react";
 import ThemeProvider from "../context/context.js";


 import { Link ,NavLink } from "react-router-dom";



const Footer = () => {
  const {theme } = useContext(ThemeProvider);

  return (
    <footer className={theme}>
  <div className="fllexx" style={{ justifyContent: "center" }}>
    <div className="les_meme">
      <h3>PAGES</h3>
      <NavLink  to="/"  className="lik">
        Home
      </NavLink>
      <NavLink  to="/project" className="lik">
        Projects
      </NavLink>
    </div>
    <div className="les_meme">
      <h3>SOCIAL</h3>
      <div className="fflex">
        <img loading="lazy" className="btn" src="boton/github-f.svg" alt="" />
        <p>
          <a href="https://github.com/abdelaliichou">
            GitHub
          </a>
        </p>
      </div>
      <div className="fflex">
        <img loading="lazy" className="btn" src="boton/linkedin-f.svg" alt="" />
        <p>
          <a
          
            href="https://www.linkedin.com/in/abdelali-ichou-60ab8222a/"
          >
            LinkedIn
          </a>
        </p>
      </div>
      <div className="fflex">
        <img loading="lazy" className="btn" src="boton/instagram.svg" alt="" />
        <p>
          <a
          
            href="https://www.instagram.com/abdelali._.ichou/"
          >
            Instagram
          </a>
        </p>
      </div>
      <div className="fflex">
        <img loading="lazy" className="btn" src="boton/facebook.svg" alt="" />
        <p>
          <a  href="https://www.facebook.com/ali.ichou.31/">
            Facebook
          </a>
        </p>
      </div>
      <div className="fflex">
        <img loading="lazy" className="btn" src="boton/mail-f.svg" alt="" />
        <p>
          <a  href="mailto:a.ichou@esi-sba.dz">
            Email
          </a>
        </p>
      </div>
    </div>
    <div className="les_meme">
      <h3>WHERE TO FIND ME :</h3>
      <div className="fflex">
        <img loading="lazy" className="btn" src="boton/phone.svg" alt="" />
        <p>
          <a href="tel:+213 697922950 ">Mobile: (+213) 697922950</a>
        </p>
      </div>
      <div className="fflex">
        <img loading="lazy" className="btn" src="boton/location.svg" alt="" />
        <p>Nedroma, Tlemcen</p>
      </div>
    </div>
  </div>
  <p
    style={{
      textAlign: "center",
      fontSize: 20,
      fontWeight: "bolder",
      padding: 35,
      marginBottom: 10,
      opacity: "0.5"
    }}
    id="omarre"
  >
    <i>By Ichou Omar</i>
  </p>
  </footer>
  );
}

export default Footer;
