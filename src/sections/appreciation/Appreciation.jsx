import React, {useEffect} from "react";
import './Appreciation.css'
import '@google/model-viewer';
import Box_val from "../../components/Box_val/Box_val.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Appreciation = () => {
  
  const vals = [
    {
      name: "Laureano Furno",
      imgIcon: 'images/Client_img/Template.svg',
      opinion: "Lorem nima nostrum saependerit aperiam eum soluta, debitis, earum dolorem aliquid corporis corrupti voluptatem vero?",
      starNumber: 5
    },
    {
      name: "Laureano Furno",
      imgIcon: 'images/Client_img/Template.svg',
      opinion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nostrum saepe minus facere cupiditate id iste eveniet deserunt reprehenderit aperiam eum soluta, debitis, earum dolorem aliquid corporis corrupti voluptatem vero?",
      starNumber: 4.5
    },
    {
      name: "Laureano Furno",
      imgIcon: 'images/Client_img/Template.svg',
      opinion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nostrum saepe minus facere cupiditate id iste eveniet deserunt reprehenderit aperiam eum soluta, debitis, earum dolorem aliquid corporis corrupti voluptatem vero?",
      starNumber: 5
    },
  ]
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
        <section id="Apprec-section" className="Apprec-section">
            <h2>Nuestras Valoraciones</h2>
            <div className="cent-Apprec" data-aos="fade-up" data-aos-duration="1000">
              {vals.map((Item, i) => (
                <Box_val key={i} Val={Item}/>
              ))}
            </div>
        </section>
    </>

  );
};

export default Appreciation;