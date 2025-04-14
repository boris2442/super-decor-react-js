// import React from 'react';
// import { Link } from 'react-router-dom';


// const Home = () => {
//     return (
//         <div>
//             <section className="hero-section px-[50px] pt-[15vh] justify-center flex  flex-col items-center gap-[30px] flex-wrap  h-[100vh]" id="accueil">
//                 <div className=" h-[100%] w-[100%] flex flex-col gap-[30px] ">
//                     <h1 className="title text-[#333] uppercase font-bold text-2xl md:text-5xl">
//                         <span className='text-white'>SUPER DECOR:</span><br /> <span className='lowercase'>EXPERT EN DéCORATION éVèNEMENTIELLe </span>
//                     </h1>
//                     <p className="para font-bold text-2xl text-[#f1f1f1]">Sublimez vos événements avec des locations de qualité.</p>
//                     <div className="">
//                         <Link to='/about'
//                             className="link bg-[#FF9D00] p-[5px] rounded font-bold text-[#fff] cursor-pointer text-lg hover:bg-[#333] text-[14px] md:text-[18px]">En
//                             savoir plus</Link>
//                     </div>

//                 </div>
//             </section>
//         </div>
//     );
// };

// export default Home;










import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const Home = () => {
  return (
    <section
      className="hero-section px-[50px] pt-[15vh] justify-center flex flex-col items-center gap-[30px] flex-wrap h-[100vh]"
      id="accueil"
    >
      <div className="h-[100%] w-[100%] flex flex-col gap-[30px]">
        <motion.h1
          custom={1}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="title text-[#333] uppercase font-bold text-2xl md:text-5xl"
        >
          <span className="text-white">SUPER DECOR:</span>
          <br />
          <span className="lowercase">EXPERT EN DÉCORATION ÉVÉNEMENTIELLE</span>
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="para font-bold text-2xl text-[#f1f1f1]"
        >
          Sublimez vos événements avec des locations de qualité.
        </motion.p>

        <motion.div
          custom={3}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <Link
            to="/about"
            className="link bg-[#FF9D00] p-[5px] rounded font-bold text-[#fff] cursor-pointer text-lg hover:bg-[#333] text-[14px] md:text-[18px]"
          >
            En savoir plus
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
