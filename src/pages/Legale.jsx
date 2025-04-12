// import React from 'react';

// const Legale = () => {
//     return (

//         <section class="min-h-[60vh] ">
//             <h1 class="bg-[#7C1152]  text-center text-[#f1f1f1] p-[15px]">Mentions Légales</h1>
//             <div class=" pl-[30px] pt-[20px] flex flex-col gap-[10px]">

//                 <p><strong>Nom de l'entreprise :</strong><span class="text-[22px] font-bold">Super Decor</span> </p>
//                 <p><strong>Création :</strong> 2010</p>
//                 <p><strong>Statut juridique :</strong> SARL</p>
//                 <p><strong>Siège social :</strong> Bangou Ville ( Madagascar )</p>

//                 <p><strong>Responsable de la publication :</strong> Aubin Boris Simo</p>
//                 <p><strong>Contact Responsable de la publication :</strong> <a href="mailto:aubinborissimotsebo@gmail.com" target="_blank" rel="noopener noreferrer">aubinborissimotsebo@gmail.com</a></p>
//                 <p><strong>Contact :</strong> <a href="mailto:contact@superdecor.com">contact@superdecor.com</a> </p>
//                 <p><strong>Hébergeur :</strong> Hostinger</p>


//             </div>
//         </section>


//     );
// };

// export default Legale;



import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faUser, faEnvelope, faGlobe, faLocationDot, faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Legale = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="min-h-[60vh] bg-white">
      <h1 className="bg-[#7C1152] text-center text-[#f1f1f1] p-[15px] text-xl md:text-2xl font-bold">
        Mentions Légales
      </h1>

      <div className="max-w-[1200px] mx-auto px-4 py-8 flex flex-col gap-4 text-[#333] text-[16px] md:text-[18px]">
        <p data-aos="fade-up">
          <FontAwesomeIcon icon={faBuilding} className="text-[#FF9D00] mr-2" />
          <strong>Nom de l'entreprise :</strong>{" "}
          <span className="text-[22px] font-bold">Super Decor</span>
        </p>

        <p data-aos="fade-up">
          <FontAwesomeIcon icon={faFileAlt} className="text-[#FF9D00] mr-2" />
          <strong>Création :</strong> 2010
        </p>

        <p data-aos="fade-up">
          <FontAwesomeIcon icon={faFileAlt} className="text-[#FF9D00] mr-2" />
          <strong>Statut juridique :</strong> SARL
        </p>

        <p data-aos="fade-up">
          <FontAwesomeIcon icon={faLocationDot} className="text-[#FF9D00] mr-2" />
          <strong>Siège social :</strong> Bangou Ville (Madagascar)
        </p>

        <p data-aos="fade-up">
          <FontAwesomeIcon icon={faUser} className="text-[#FF9D00] mr-2" />
          <strong>Responsable de la publication :</strong> Aubin Boris Simo
        </p>

        <p data-aos="fade-up">
          <FontAwesomeIcon icon={faEnvelope} className="text-[#FF9D00] mr-2" />
          <strong>Contact Responsable :</strong>{" "}
          <a
            href="mailto:aubinborissimotsebo@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#7C1152] underline hover:text-[#FF9D00]"
          >
            aubinborissimotsebo@gmail.com
          </a>
        </p>

        <p data-aos="fade-up">
          <FontAwesomeIcon icon={faEnvelope} className="text-[#FF9D00] mr-2" />
          <strong>Contact :</strong>{" "}
          <a
            href="mailto:contact@superdecor.com"
            className="text-[#7C1152] underline hover:text-[#FF9D00]"
          >
            contact@superdecor.com
          </a>
        </p>

        <p data-aos="fade-up">
          <FontAwesomeIcon icon={faGlobe} className="text-[#FF9D00] mr-2" />
          <strong>Hébergeur :</strong> Hostinger
        </p>
      </div>
    </section>
  );
};

export default Legale;
