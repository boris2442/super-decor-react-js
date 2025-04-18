
// import React from 'react';

// const Confidentialite = () => {
//   const conditionsData = [
//     {
//       icon: "fas fa-file-contract",
//       title: "Conditions Générales de Vente",
//       isMainTitle: true,
//       date: "Dernière mise à jour : 25 février 2025"
//     },
//     {
//       icon: "fas fa-shopping-cart",
//       title: "Article 1 : Objet",
//       content: "Les présentes conditions générales de vente régissent la vente des produits et services proposés sur notre site."
//     },
//     {
//       icon: "fas fa-credit-card",
//       title: "Article 2 : Prix",
//       content: "Les prix de nos produits sont indiqués en euros, toutes taxes comprises (TTC), et peuvent être modifiés à tout moment."
//     },
//     {
//       icon: "fas fa-shipping-fast",
//       title: "Article 3 : Livraison",
//       content: "Les délais de livraison varient selon votre localisation. Nous nous engageons à expédier les commandes sous 48 heures."
//     },
//     {
//       icon: "fas fa-undo",
//       title: "Article 4 : Retour et Remboursement",
//       content: "Vous disposez d'un délai de 14 jours après réception pour retourner un produit et obtenir un remboursement sous conditions."
//     },
//     {
//       icon: "fas fa-shield-alt",
//       title: "Article 5 : Responsabilité",
//       content: "Nous ne sommes pas responsables des dommages indirects qui pourraient survenir lors de l'utilisation de nos produits."
//     },
//     {
//       icon: "fas fa-user-lock",
//       title: "Article 6 : Protection des données",
//       content: "Les informations personnelles collectées sont protégées et ne seront pas partagées sans votre consentement."
//     },
//     {
//       icon: "fas fa-gavel",
//       title: "Article 7 : Droit applicable",
//       content: "Les présentes conditions sont soumises à la législation en vigueur dans le pays de vente."
//     },
//     {
//       icon: "fas fa-envelope",
//       title: "Contact",
//       content: 'Pour toute question, contactez-nous à ',
//       email: 'contact@votresite.com'
//     }
//   ];

//   return (
//     <section className="">
       
//       <div className="flex flex-col gap-[10px] pl-[20px] py-[30px]">
//         {conditionsData.map((item, index) => (
//           <div key={index}>
//             {item.isMainTitle ? (
//               <h1 className="bg-[#7C1152] text-center text-[#f1f1f1] p-[15px]">
//                 <i className={`${item.icon} icon`}></i> {item.title}
//               </h1>
//             ) : (
//               <>
//                 <h2 className="flex items-center gap-2 mt-4">
//                   <i className={`${item.icon} text-2xl text-[#FF9D00] p-[5px] rounded-full h-[40px] w-[40px] border-2 border-solid border-[#333]`}></i>
//                   <span className="font-bold text-[18px]">{item.title}</span>
//                 </h2>
//                 {item.date && <p><strong>{item.date}</strong></p>}
//                 <p>
//                   {item.content}
//                   {item.email && (
//                     <>
//                       <a href={`mailto:${item.email}`} className="font-bold ml-1" target="_blank" rel="noopener noreferrer">{item.email}</a>.
//                     </>
//                   )}
//                 </p>
//               </>
//             )}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Confidentialite;



import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFileContract,
  faShoppingCart,
  faCreditCard,
  faShippingFast,
  faUndo,
  faShieldAlt,
  faUserLock,
  faGavel,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';

const Confidentialite = () => {
  const conditionsData = [
    {
      icon: faFileContract,
      title: "Conditions Générales de Vente",
      isMainTitle: true,
      date: "Dernière mise à jour : 25 février 2025"
    },
    {
      icon: faShoppingCart,
      title: "Article 1 : Objet",
      content: "Les présentes conditions générales de vente régissent la vente des produits et services proposés sur notre site."
    },
    {
      icon: faCreditCard,
      title: "Article 2 : Prix",
      content: "Les prix de nos produits sont indiqués en fcfa, cautionnement y compris, et peuvent être modifiés à tout moment."
    },
    {
      icon: faShippingFast,
      title: "Article 3 : Livraison",
      content: "Les délais de livraison varient selon votre localisation. Nous nous engageons à expédier les commandes sous 48 heures."
    },
    {
      icon: faUndo,
      title: "Article 4 : Retour et Remboursement",
      content: "Vous disposez d'un délai de 14 jours après réception pour retourner un produit et obtenir un remboursement sous conditions."
    },
    {
      icon: faShieldAlt,
      title: "Article 5 : Responsabilité",
      content: "Nous ne sommes pas responsables des dommages indirects qui pourraient survenir lors de l'utilisation de nos produits."
    },
    {
      icon: faUserLock,
      title: "Article 6 : Protection des données",
      content: "Les informations personnelles collectées sont protégées et ne seront pas partagées sans votre consentement."
    },
    {
      icon: faGavel,
      title: "Article 7 : Droit applicable",
      content: "Les présentes conditions sont soumises à la législation en vigueur dans le pays de vente."
    },
    {
      icon: faEnvelope,
      title: "Contact",
      content: 'Pour toute question, contactez-nous à ',
    email: 'aubinborissimotsebo@mail.com'
    }
  ];

  return (
    <section>
      <div className="flex flex-col gap-[10px] pl-[20px] py-[30px]">
        {conditionsData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {item.isMainTitle ? (
              <h1 className="bg-[#7C1152] text-center text-[#f1f1f1] p-[15px]">
                <FontAwesomeIcon icon={item.icon} className="mr-2" />
                {item.title}
              </h1>
            ) : (
              <>
                <motion.h2
                  className="flex items-center gap-2 mt-4"
                  whileHover={{ scale: 1.1, color: "#7C1152" }}
                  transition={{ duration: 0.3 }}
                >
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="text-2xl text-[#FF9D00] p-[5px] rounded-full h-[40px] w-[40px] border-2 border-solid border-[#333]"
                  />
                  <span className="font-bold text-[18px]">{item.title}</span>
                </motion.h2>
                {item.date && <p><strong>{item.date}</strong></p>}
                <p>
                  {item.content}
                  {item.email && (
                    <a href={`mailto:${item.email}`} className="font-bold ml-1" target="_blank" rel="noopener noreferrer">
                      {item.email}
                    </a>
                  )}
                </p>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Confidentialite;











