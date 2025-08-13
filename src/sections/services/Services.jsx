import React, {useState} from "react";
import './Services.css'
import Box_Service from "../../components/box_Service/Box_Service.jsx";

const Services = () => {
  const fam = {
    title: "DERECHO DE FAMILIA",
    imgIcon: "/images/Juridico/Fam.svg",
    services: [
      "Cuota alimentaria",
      "Divorcio",
      "Curatela",
      "Régimen de comunicación",
      "Adopción",
      "Cuidado personal",
      "División de bienes",
      "Responsabilidad parental",
      "Violencia familiar",
      "Filiación",
      "Uniones convivenciales",
      "Acuerdos prenupciales"
    ]
  }

  const laboral = {
    title: "DERECHOS LABORALES",
    imgIcon: "../../images/Juridico/Laboral.svg",
    services: [
      "Despidos",
      "Accidentes de trabajo",
      "Acoso laboral",
      "Reclamos salariales",
      "Horas extras",
      "Licencias laborales",
      "Negociaciones colectivas",
      "Indemnizaciones",
      "Contratos de trabajo",
      "Enfermedades profesionales",
      "Suspensiones",
      "Reinstalación laboral"
    ]
  }

  const commercial = {
    title: "DERECHO CIVIL Y COMERCIAL",
    imgIcon: "/images/Juridico/Civil-comer.svg",
    services: [
      "Contratos civiles y comerciales",
      "Cobro de deudas",
      "Incumplimiento contractual",
      "Responsabilidad civil",
      "Daños y perjuicios",
      "Propiedad y posesión",
      "Alquileres y desalojos",
      "Sociedades comerciales",
      "Quiebras y concursos",
      "Fideicomisos",
      "Defensa del consumidor",
      "Registro de marcas y patentes"
    ]

  }

  const provisional = {
    title: "DERECHO PREVISIONAL",
    imgIcon: "/images/Juridico/Prov.svg",
    services: [
      "Jubilaciones",
      "Pensiones por fallecimiento",
      "Reajuste de haberes",
      "Reconocimiento de servicios",
      "Moratoria previsional",
      "Retiro por invalidez",
      "PUAM (Pensión Universal para el Adulto Mayor)",
      "Pensión no contributiva",
      "Cálculo de aportes",
      "Reclamos ante ANSES",
      "Beneficios sociales complementarios",
      "Asesoramiento integral previsional"
    ]

  }

  const juridico_array = [fam, laboral, commercial, provisional]
  
  const impositivos = {
    title: "IMPOSITIVOS Y FISCALES",
    imgIcon: "/images/Contable/tax.svg",
    services: [
      "Liquidación de Impuestos mensuales y anuales",
      "Monotributistas",
      "Responsables Inscritos",
      "Ingresos Brutos",
      "Convenio multilateral"
    ]
  }

  const laborales = {
    title: "LABORALES",
    imgIcon: "/images/Contable/labor.svg",
    services: [
      "Altas y bajas de empleados",
      "Liquidación de sueldos y jornales",
      "Confección de recibos",
      "Cargas sociales",
      "ART (Aseguradora de Riesgos del Trabajo)"
    ]
  }

  const asistencia = {
    title: "ASISTENCIA Y SOPORTE ANTE ORGANISMOS",
    imgIcon: "/images/Contable/attendance.svg",
    services: [
      "Atención ante AFIP",
      "Atención ante ARBA",
      "Atención ante ANSES",
      "Atención ante Ministerio de Trabajo",
      "Atención ante organismos municipales"
    ]
  }

  const gestion = {
    title: "GESTIÓN Y TRÁMITES",
    imgIcon: "/images/Contable/management.svg",
    services: [
      "Inscripciones y bajas impositivas",
      "Habilitaciones comerciales",
      "Trámites en registros públicos",
      "Gestiones ante organismos estatales",
      "Certificaciones y legalizaciones"
    ]
  }

  const conta = [impositivos, laborales, asistencia, gestion]

  const sucesiones_y_procesal_array = [
  {
    title: "SUCESSIONES Y PATRIMONIAL",
    imgIcon: "/images/Procesal/succession.svg",
    services: [
      "Sucesiones y herencias",
      "Testamentos y validaciones",
      "Liquidación de herencia",
      "Partición de bienes",
      "Trámites registrales sucesorios"
    ]
  },
  {
    title: "CONTRATOS",
    imgIcon: "/images/Procesal/management.svg",
    services: [
      "Redacción de contratos civiles y comerciales",
      "Contratos de compraventa y locación",
      "Contratos de franquicia",
      "Contratos de prestación de servicios",
      "Renegociación y análisis contractual"
    ]
  },
  {
    title: "QUIEBRAS, AMPAROS Y PROCESAL",
    imgIcon: "/images/Procesal/insolvency.svg",
    services: [
      "Procesos de quiebra y concurso",
      "Asistencia en amparos judiciales",
      "Recursos procesales urgentes",
      "Medidas cautelares",
      "Representación en juicios civiles"
    ]
  }
];
  const [services, setServices] = useState(juridico_array);


  function selectService(service){
    switch(service){
      case "Juridico":
        document.querySelectorAll('.Service-Cont , .Service-Suc').forEach(element => {
          element?.classList.remove("select-service-color")
        });
        document.querySelector('.Service-jur')?.classList.add("select-service-color")
        setServices(juridico_array)
        break;
      case "Contable":
        document.querySelectorAll('.Service-jur , .Service-Suc').forEach(element => {
          element?.classList.remove("select-service-color")
        });
        setServices(conta)
        document.querySelector('.Service-Cont')?.classList.add("select-service-color")
        break;
      case "Sucession":
        document.querySelectorAll('.Service-jur, .Service-Cont').forEach(element => {
          element?.classList.remove("select-service-color")
        });
        setServices(sucesiones_y_procesal_array)
        document.querySelector('.Service-Suc')?.classList.add("select-service-color")
        break;
    }
  }
  return (
    <>
        <section id="Services-section" className="Services-section">
          <div className="cent-Services">
            <h2>Nuestros <span className="blue-color">servicios</span></h2>
            <ul className="ul-SERVICES">
              <li className="Service-jur select-service-color" onClick={() => selectService("Juridico")}><p>Juridico</p></li>
              <li className="Service-Cont" onClick={() => selectService("Contable")}><p>Contable</p></li>
              <li className="Service-Suc" onClick={() => selectService("Sucession")}><p>Procesales</p></li>
            </ul>
            <div className="services-Containers">
              {services.map((item, index) => (
                <Box_Service key={index} service={item} />
              ))}
            </div>
          </div>
        </section>
    </>

  );
};

export default Services;