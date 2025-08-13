import React from "react";
import './Contact.css'
import '@google/model-viewer';

const Contact = () => {
  return (
    <>
        <section id="Contact-section" className="Contact-section">
            <footer>
              <div className="izq-footer">
                <form action="">
                  <h2>CONTACTAR</h2>
                  <input type="text" placeholder="NOMBRE" required/>
                  <input type="email" placeholder="EMAIL" required/>
                  <input type="text" placeholder="ASUNTO" required />
                  <input type="text" placeholder="MENSAJE" required/>
                  <input type="submit" value="ENVIAR" />
                </form>
                <ul className="Footer-ul footer-ul-sections">
                  <li><h3>SECCIONES</h3></li>
                  <li><a href="#About-section">SOBRE NOSOTROS</a></li>
                  <li><a href="#Services-section">SERVICIOS</a></li>
                  <li><a href="#Apprec-section">VALORACIONES</a></li>
                  <li><a href="#Contact-section">CONTACTAR</a></li>
                </ul>
              </div>
              <div className="left-footer footer-d">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.082667289294!2d-58.39064522337976!3d-34.60207105741278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccbca6c5cf62d%3A0x294784b0d7dee727!2sEstudio%20Jur%C3%ADdico%20Chizzini!5e0!3m2!1ses-419!2sar!4v1755036342071!5m2!1ses-419!2sar"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />      
                <ul className="Footer-ul-map">
                  <li><h3>CONTACTOS</h3></li>
                  <li><p>EMAIL: info@.com</p></li>
                  <li><p>WHATSAPP: +54 11 2549-1150</p></li>
                  <li><p>DIR: Paraná 580, piso 3°, Buenos Aires, Argentina 1017</p></li>
                </ul>        
              </div>     
            </footer>
            <div className="Responsive-footer-map">
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.082667289294!2d-58.39064522337976!3d-34.60207105741278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccbca6c5cf62d%3A0x294784b0d7dee727!2sEstudio%20Jur%C3%ADdico%20Chizzini!5e0!3m2!1ses-419!2sar!4v1755036342071!5m2!1ses-419!2sar"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
              />  
              <div className="footer-responsive-uls">
                <ul className="Footer-ul footer-ul-resp">
                  <li><h3>SECCIONES</h3></li>
                  <li><a href="#About-section">SOBRE NOSOTROS</a></li>
                  <li><a href="#Services-section">SERVICIOS</a></li>
                  <li><a href="#Apprec-section">VALORACIONES</a></li>
                  <li><a href="#Contact-section">CONTACTAR</a></li>
                </ul>
                <ul className="Footer-ul-map responsive-map">
                  <li><h3>CONTACTOS</h3></li>
                  <li><p>EMAIL: info@.com</p></li>
                  <li><p>WHATSAPP: +54 11 2549-1150</p></li>
                  <li><p>DIR: Paraná 580, piso 3°, Buenos Aires, Argentina 1017</p></li>
                </ul> 
              </div>
            </div>
        </section>
    </>

  );
};

export default Contact;