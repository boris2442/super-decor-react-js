// import React from 'react';
// import { Link } from 'react-router-dom';
// const About = () => {
//     return (
//         <div>
//             <section id="about" className="w-[100%] px-[10px] md:px-[30px] bg-[#f1f1f1] min-h-[90vh]  pt-[25%] md:pt-[7%]">
//                 <div className="section-heading">
//                     <h2 className="second-title text-3xl font-bold text-[#333] inline-block relative">À propos de nous!</h2><br/>
//                         <span className="text-[#FF9D00] spantexte">Une version simplifiée de nous!</span>
//                 </div>

//                 <div className="box-about md:grid grid-cols-2">
//                     <div className="  p-10 rounded-lg shadow-lg w-[100%]  child-box-about">
//                         <p className="mt-6 text-[14px] md:text-lg  leading-relaxed para">
//                             <span className="font-semibold spantexte">Super Decor</span> est spécialisé dans l'organisation des
//                             evènements sur mesure. Depuis <span className="font-semibold">2010</span>, nous mettons notre
//                             passion pour la cuisine et l'élégance au service de vos événements : mariages, anniversaires,
//                             séminaires et autres célébrations spéciales.
//                         </p>

//                         <Link to="/contact"
//                             className="mt-6 inline-block bg-[#FF9D00] text-[#f1f1f1]  px-[10px] py-3 rounded-md text-[16px] font-semibold hover:bg-[#333] transition para">
//                             Contactez-nous 📞
//                         </Link>
//                     </div>
//                     <div className="">
//                         <img src="carte maman.jpg" alt="carte de visite" className="para h-[100%] "/>

//                     </div>



//                 </div>

//             </section>

//         </div>
//     );
// };

// export default About;










import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeZoomSlide = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

const About = () => {
  return (
    <section
      id="about"
      className="w-full px-[10px] md:px-[30px] bg-[#f1f1f1] min-h-[90vh] pt-[25%] md:pt-[7%]"
    >
      <motion.div
        custom={0}
        variants={fadeZoomSlide}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="section-heading"
      >
        <h2 className="second-title text-3xl font-bold text-[#333] inline-block relative">
          À propos de nous!
        </h2>
        <br />
        <span className="text-[#FF9D00] spantexte">Une version simplifiée de nous!</span>
      </motion.div>

      <div className="box-about md:grid grid-cols-2">
        <motion.div
          custom={1}
          variants={fadeZoomSlide}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="p-10 rounded-lg shadow-lg w-full child-box-about"
        >
          <p className="mt-6 text-[14px] md:text-lg leading-relaxed para">
            <span className="font-semibold spantexte">Super Decor</span> est spécialisé dans
            l'organisation des évènements sur mesure. Depuis{' '}
            <span className="font-semibold">2010</span>, nous mettons notre passion pour la cuisine
            et l'élégance au service de vos événements : mariages, anniversaires, séminaires et
            autres célébrations spéciales.
          </p>

          <Link
            to="/contact"
            className="mt-6 inline-block bg-[#FF9D00] text-[#f1f1f1] px-[10px] py-3 rounded-md text-[16px] font-semibold hover:bg-[#333] transition para"
          >
            Contactez-nous 📞
          </Link>
        </motion.div>

        <motion.div
          custom={2}
          variants={fadeZoomSlide}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className=""
        >
          <img src="carte maman.jpg" alt="carte de visite" className="para h-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
