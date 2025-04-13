
import React from 'react';
import { Link } from 'react-router-dom';
const Services = () => {
  const services = [
    { title: "Hotel des mariés", imgSrc: "hotel marie.webp" },
    { title: "Location des couverts", imgSrc: "couverts.jpg" },
    { title: "Location des chaises", imgSrc: "chaises&tables.webp" },
    { title: "Décoration des salles", imgSrc: "decoration salle.webp" },
    { title: "Location des baches", imgSrc: "baches event.jpg" },
    { title: "Services de cuisson", imgSrc: "cuisson.jpg" },
    { title: "Salle mortuaire", imgSrc: "IMG_20210527_134337.jpg" },
    { title: "Générateur électrique", imgSrc: "generateur.jpg" },
    { title: "Services traiteur", imgSrc: "services.webp" },
    { title: "Marmites chauffantes", imgSrc: "chauffantes.jpg" },
    { title: "Sonnorisation", imgSrc: "sono.jpg" },
    { title: "Livraison d'eau", imgSrc: "water.png" }
  ];

  return (
    <section className="services w-[100%] min-h-[90vh] bg-[#EDF1EF] p-[50px]" id="services">
      <div className="section-heading p-[50px]">
        <h2 className="second-title text-3xl font-bold text-[#333] inline-block relative">
          Nos Services Diversifiés
        </h2>
        <br />
        <span className="spantexte">
          Chaque événement est unique, et nous offrons des services sur mesure.
        </span>
      </div>
      <div className="container flex justify-around gap-[40px] pt-[40px] flex-wrap">
        {services.map((service, index) => (
          <div key={index} className="  box w-[300px] h-[350px] rounded-[9px] shadow-2xl hover:scale-105 relative">
            <img
              src={service.imgSrc}
              alt={service.title}
              className="h-[70%] w-[100%] object-cover hover:grayscale-100 "
            />
            <div className="h-[30%] p-[20px]">
              <h3 className="third-title text-[#7C1152] font-bold text-[20px]">
                {service.title}
              </h3>
              <Link to='SeePlusHotel' className='absolute text-[13px] text-white hover:text-[#FF9D00] right-0 bottom-0 bg-[#333] p-1' >Voir plus </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
