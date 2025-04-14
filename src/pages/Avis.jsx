

// import React from 'react';

// const Avis = () => {
//   const avis = [
//     {
//       imgSrc: "avis/avis1.jpg",
//       title: "Une expérience mémorable",
//       content: "<strong>SUPER DECOR</strong> a transformé notre mariage en un rêve. Le service était impeccable et tout était parfaitement bien organisé."
//     },
//     {
//       imgSrc: "avis/avis1.jpg",
//       title: "Une sonorisation professionnelle",
//       content: "Nous avons fait appel à <strong>SUPER DECOR</strong> pour une inauguration d'entreprise et nous n'avons pas été déçus. Tout a été géré avec soin."
//     },
//     {
//       imgSrc: "avis/avis2.jpg",
//       title: "Un service exceptionnel",
//       content: "Leur équipe est très professionnelle. Les couverts étaient magnifiques et la nourriture délicieuse. Je recommande vivement."
//     }
//   ];

//   return (
//     <section className='pt-[06%]'>
//       <div className="section-heading p-[50px]">
//         <h2 className="second-title text-3xl font-bold text-[#333] inline-block">Ils nous ont fait confiance !</h2><br />
//         <span className="spantexte font-[500] text-[#333]">Ce que nos clients disent de nous</span>
//       </div>

//       <div className="flex justify-center items-center gap-[30px] flex-wrap">
//         {avis.map((avi, index) => (
//           <div key={index} className="max-w-[310px] h-[420px] rounded-[9px] shadow-2xl p-[20px] flex flex-col justify-start items-center text-center">
//             <img
//               src={avi.imgSrc}
//               alt={avi.title}
//               className="h-[170px] w-[170px] object-cover hover:grayscale-100 rounded-full mb-4"
//             />
//             <div className="flex gap-[5px] mb-2">
//               {[...Array(5)].map((_, i) => (
//                 <i key={i} className="fa-solid fa-star text-yellow-500"></i>
//               ))}
//             </div>
//             <h4 className="third-title text-[#7C1152] md:text-[18px] font-bold text-[14px] mb-2">{avi.title}</h4>
//             <p dangerouslySetInnerHTML={{ __html: avi.content }}></p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Avis;







import React from 'react';
import { motion } from 'framer-motion';

const fadeCard = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const Avis = () => {
  const avis = [
    {
      imgSrc: "avis/avis1.jpg",
      title: "Une expérience mémorable",
      content:
        "<strong>SUPER DECOR</strong> a transformé notre mariage en un rêve. Le service était impeccable et tout était parfaitement bien organisé.",
    },
    {
      imgSrc: "avis/avis1.jpg",
      title: "Une sonorisation professionnelle",
      content:
        "Nous avons fait appel à <strong>SUPER DECOR</strong> pour une inauguration d'entreprise et nous n'avons pas été déçus. Tout a été géré avec soin.",
    },
    {
      imgSrc: "avis/avis2.jpg",
      title: "Un service exceptionnel",
      content:
        "Leur équipe est très professionnelle. Les couverts étaient magnifiques et la nourriture délicieuse. Je recommande vivement.",
    },
  ];

  return (
    <section className="pt-[6%]" id="avis">
      <motion.div
        custom={0}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeCard}
        className="section-heading p-[50px]"
      >
        <h2 className="second-title text-3xl font-bold text-[#333] inline-block">
          Ils nous ont fait confiance !
        </h2>
        <br />
        <span className="spantexte font-[500] text-[#333]">
          Ce que nos clients disent de nous
        </span>
      </motion.div>

      <div className="flex justify-center items-center gap-[30px] flex-wrap">
        {avis.map((avi, index) => (
          <motion.div
            key={index}
            custom={index + 1}
            variants={fadeCard}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-[310px] h-[420px] rounded-[9px] shadow-2xl p-[20px] flex flex-col justify-start items-center text-center bg-white"
          >
            <img
              src={avi.imgSrc}
              alt={avi.title}
              className="h-[170px] w-[170px] object-cover hover:grayscale-100 rounded-full mb-4"
            />
            <div className="flex gap-[5px] mb-2">
              {[...Array(5)].map((_, i) => (
                <i key={i} className="fa-solid fa-star text-yellow-500"></i>
              ))}
            </div>
            <h4 className="third-title text-[#7C1152] md:text-[18px] font-bold text-[14px] mb-2">
              {avi.title}
            </h4>
            <p
              className="text-[13px] md:text-[15px] leading-relaxed text-[#444]"
              dangerouslySetInnerHTML={{ __html: avi.content }}
            ></p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Avis;
