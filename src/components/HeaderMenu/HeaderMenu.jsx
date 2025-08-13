import React, { useEffect, useState } from "react";
import "./HeaderMenu.css";
import Logo from "/images/Logo.jpg";

const HeaderMenu = () => {
  const [scroll, setScrolly] = useState(window.scrollY);
  const [menuActive, setMenuAct] = useState(false);

  window.addEventListener('scroll', function setSc() {
    setScrolly(window.scrollY);
  });

  const activeMenu = () => {
    setMenuAct(!menuActive);
  };

  useEffect(() => {
    if (menuActive === false) {
      document.querySelector('.background-MenuR')?.classList.remove('top-menu');
    } else {
      document.querySelector('.background-MenuR')?.classList.add('top-menu');
    }
  }, [menuActive]);

  useEffect(() => {
    if (window.scrollY > 10) {
      document.querySelector('header')?.classList.add('blue-background');
    } else {
      document.querySelector('header')?.classList.remove('blue-background');
    }
  }, [scroll]);

  return (
    <header>
      <div className="Top-menu">
        <div className="cent-TE">
          <div>
            <i
              onClick={() =>
                location.href = "https://api.whatsapp.com/send?phone=541125491150"
              }
              className="fa-brands fa-whatsapp fa-menu blue-background"
            ></i>
            <p>+54 11 2549-1150</p>
          </div>
          <div>
            <i
              onClick={() => window.location.href = "mailto:info@dspro.tech"}
              className="fa-regular fa-envelope fa-menu blue-background"
            ></i>
            <p>info@</p>
          </div>
        </div>
      </div>
      <div className="Down-menu">
        <div className="containerMenu">
          <div className="logo-header">
            <img src={Logo} alt="" />
          </div>
          <ul className="list-headerMenu">
            <li><a href="#About-section">SOBRE NOSOTROS</a></li>
            <li><a href="#Services-section">SERVICIOS</a></li>
            <li><a href="#Apprec-section">VALORACIONES</a></li>
            <li className="contact-header"><a href="#Contact-section">CONTACTAR</a></li>
          </ul>
          <svg
            onClick={() => activeMenu()}
            className="icon-Menu-Res"
            xmlns="http://www.w3.org/2000/svg"
            height="28px"
            viewBox="0 -960 960 960"
            width="28px"
            fill="#1f1f1f"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
          </svg>
        </div>
        <div className="background-MenuR">
          <ul className="list-headerMenu MENU-responsive">
            <li><a onClick={() => activeMenu()} href="#About-section">SOBRE NOSOTROS</a></li>
            <li><a onClick={() => activeMenu()} href="#Services-section">SERVICIOS</a></li>
            <li><a onClick={() => activeMenu()} href="#Apprec-section">VALORACIONES</a></li>
            <li className="contact-header"><a onClick={() => activeMenu()} href="#Contact-section">CONTACTAR</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default HeaderMenu;
