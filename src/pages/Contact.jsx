// import React from 'react';

// const Contact = () => {
//     return (
//         <div>
//             <section className="pt-10" id="contact">
//                 <div className="section-heading p-[50px]">

//                     <h2 className="second-title text-3xl font-bold text-[#333] inlineblock ">Nous Contactez!</h2><br />
//                     <span className="spantexte font-[500] text-[#333]">Inscription à la newsletter!</span>
//                 </div>


//                 <form>

//                     <div className="container-form">
//                         <div className="box-form">
//                             <label htmlFor="name" className="scrollform text-[13px] md:text-[16px]">Entrer votre nom</label>
//                             <input type="text" placeholder="SIMO" id="name" name="name" required className="scrollform" />
//                             <span className="scrollform spanName"></span>
//                         </div>
//                         <div className="box-form">
//                             <label htmlFor="email" className="scrollform text-[13px] md:text-[16px]">Entrer votre email</label>
//                             <input type="text" placeholder="aubinsimo@gmail.com" id="email" name="email" required className="scrollform" />
//                             <span className="scrollform spanEmail"></span>
//                         </div>
//                         <div className="box-form">
//                             <label htmlFor="textarea" className="scrollform text-[13px] md:text-[16px]">Laisser un message</label>
//                             <textarea name="message" id="textarea" placeholder="laisser un message" required className="scrollform"></textarea>
//                             <span className="spanTextarea scrollform"></span>
//                         </div>
//                         <div >
//                             <input type="submit" value="Envoyer" className="scrollform" />
//                         </div>
//                     </div>
//                 </form>
//             </section>
//         </div>
//     );
// };

// export default Contact;










import React from 'react';
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

const Contact = () => {
  return (
    <section className="pt-10" id="contact">
      <motion.div
        custom={0}
        variants={fadeZoomSlide}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="section-heading p-[50px]"
      >
        <h2 className="second-title text-3xl font-bold text-[#333] inlineblock">
          Nous Contactez!
        </h2>
        <br />
        <span className="spantexte font-[500] text-[#333]">Inscription à la newsletter!</span>
      </motion.div>

      <form>
        <div className="container-form">
          {[1, 2, 3, 4].map((index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeZoomSlide}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="box-form"
            >
              {index === 1 && (
                <>
                  <label htmlFor="name" className="scrollform text-[13px] md:text-[16px]">
                    Entrer votre nom
                  </label>
                  <input
                    type="text"
                    placeholder="SIMO"
                    id="name"
                    name="name"
                    required
                    className="scrollform"
                  />
                  <span className="scrollform spanName"></span>
                </>
              )}

              {index === 2 && (
                <>
                  <label htmlFor="email" className="scrollform text-[13px] md:text-[16px]">
                    Entrer votre email
                  </label>
                  <input
                    type="text"
                    placeholder="aubinsimo@gmail.com"
                    id="email"
                    name="email"
                    required
                    className="scrollform"
                  />
                  <span className="scrollform spanEmail"></span>
                </>
              )}

              {index === 3 && (
                <>
                  <label htmlFor="textarea" className="scrollform text-[13px] md:text-[16px]">
                    Laisser un message
                  </label>
                  <textarea
                    name="message"
                    id="textarea"
                    placeholder="laisser un message"
                    required
                    className="scrollform"
                  ></textarea>
                  <span className="spanTextarea scrollform"></span>
                </>
              )}

              {index === 4 && (
                <input type="submit" value="Envoyer" className="scrollform cursor-pointer" />
              )}
            </motion.div>
          ))}
        </div>
      </form>
    </section>
  );
};

export default Contact;
