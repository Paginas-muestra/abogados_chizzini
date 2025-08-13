import React from "react";
import './Appreciation.css'
import '@google/model-viewer';
import Box_val from "../../components/Box_val/Box_val.jsx";
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

  return (
    <>
        <section id="Apprec-section" className="Apprec-section">
            <h2>Nuestras Valoraciones</h2>
            <div className="cent-Apprec">
              {vals.map((Item, i) => (
                <Box_val key={i} Val={Item}/>
              ))}
            </div>
        </section>
    </>

  );
};

export default Appreciation;