import React from "react";
import './banner.css'
import SideMenu from "../../components/HeaderMenu/HeaderMenu.jsx";
import '@google/model-viewer';

const Banner = () => {

  return (
    <>
        <section id="bannerSection" className="bannerSection">
            <SideMenu />
            <div className="conj-banner">
              <div className="panel-inclinado">

                <div className="tablet-v-bann">
                  <h1 className="nm-ban">Estudio Juridico Chizzini</h1>
                  <h1><span className="blue-color">Tus Abogados</span> De Confianza</h1>
                  <p>En Estudio Jurídico Contable M&L brindamos asesoramiento legal y contable integral a personas y empresas. Nos enfocamos en ofrecer soluciones claras, trato humano y un acompañamiento personalizado en cada etapa. Estamos ubicados en Avellaneda, a minutos de CABA.</p>
                  <div className="Contact-sectionBann">
                    <button onClick={() => location.href="#Contact-section"}>CONTACTAR</button>
                    <div className="Icons-ban">
                      <i className="fa-brands fa-instagram blue-background"></i>
                      <i className="fa-brands fa-linkedin blue-background"></i>
                      <i className="fa-regular fa-envelope blue-background"></i>
                      <i onClick={() => location.href="https://api.whatsapp.com/send?phone=541125491150"} className="fa-brands fa-whatsapp blue-background"></i>
                    </div>
                  </div>
                </div>
                
                <model-viewer
                    src="/Justice_Monument_0811014441_texture.glb"
                    ar
                    camera-controls
                    camera-orbit="15deg 75deg 3.9m"
                    poster="poster.webp"
                    auto-rotate={false}
                    shadow-intensity="1"
                    style={{ width: '100%', height: '100%', paddingTop: 120}}
                    className="libertyS">
                </model-viewer>
              </div>
              <div className="ab-bann">
                <h1 className="nm-ban">Estudio Juridico Contable ML</h1>
                <h1><span className="blue-color">Tus Abogados</span> De Confianza</h1>
                <p>En Estudio Jurídico Contable M&L brindamos asesoramiento legal y contable integral a personas y empresas. Nos enfocamos en ofrecer soluciones claras, trato humano y un acompañamiento personalizado en cada etapa. Estamos ubicados en Avellaneda, a minutos de CABA.</p>
                <div className="Contact-sectionBann">
                  <button onClick={() => location.href="#Contact-section"}>CONTACTAR</button>
                  <i className="fa-brands fa-instagram blue-background"></i>
                  <i className="fa-brands fa-linkedin blue-background"></i>
                  <i className="fa-regular fa-envelope blue-background"></i>
                  <i onClick={() => location.href="https://api.whatsapp.com/send?phone=541125491150"} className="fa-brands fa-whatsapp blue-background"></i>
                </div>
              </div>
            </div>
        </section>
    </>

  );
};

export default Banner;