// import React from 'react';

// const Remboursement = () => {
//     return (
//         <section class="pb-[30px] ">
//         <h1 class="bg-[#7C1152]  text-center text-[#f1f1f1] p-[15px]">Conditions de Remboursement</h1>
//         <div class="pt-[30px] pl-[30px] flex flex-col gap-[10px]">
//             <p><em><strong>Nous nous engageons à fournir un service de qualité. Toutefois, en cas de problème, voici nos conditions de remboursement :</strong></em></p>
            
//             <h3 class="font-bold text-[18px]">1. Délai de remboursement</h3>
//             <p>Les demandes de remboursement doivent être effectuées dans un délai de <strong>14 jours</strong> après avoir passer la commande.</p>
    
//             <h3 class="font-bold text-[18px]">2. Motifs acceptés</h3>
//             <ul>
//                 <li class="pl-[30px]"><strong>2.1</strong> Produit ou service non conforme à la description.</li>
//                 <li class="pl-[30px]"><strong>2.2</strong> Problème technique empêchant l’utilisation.</li>
//                 <li class="pl-[30px]"><strong>2.3</strong> Erreur de facturation.</li>
//                 <li class="pl-[30px]"><strong>2.4</strong> Annulation avant l’utilisation du service.</li>
//             </ul>
    
//             <h3 class="font-bold text-[18px]">3. Cas non remboursables</h3>
//             <ul>
//                 <li class="pl-[30px]"><strong>3.1</strong> Changement d’avis après utilisation.</li>
//                 <li class="pl-[30px]"><strong>3.2</strong> Non-respect des conditions d’utilisation.</li>
//                 <li class="pl-[30px]"><strong>3.3</strong> Service ou produit déjà consommé ou téléchargé.</li>
//             </ul>
    
//             <h3 class="font-bold text-[18px]">4. Procédure de remboursement</h3>
//             <p>Pour demander un remboursement, veuillez nous contacter :</p>
//             <p class="pl-[30px]"><a href="aubinborissimotsebo@gmail.com" class="font-bold" target="_blank">📧 Email : support@tonsite.com</a></p>
//             <p class="pl-[30px] font-bold">📞 Téléphone : +237 675 75 71 00</p> 
//         </div>
//       </section>
    
//     );
// };

// export default Remboursement;






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
      ease: "easeOut",
    },
  }),
};

const Remboursement = () => {
  const sections = [
    {
      type: 'p',
      content: (
        <p>
          <em>
            <strong>
              Nous nous engageons à fournir un service de qualité. Toutefois, en
              cas de problème, voici nos conditions de remboursement :
            </strong>
          </em>
        </p>
      ),
    },
    {
      type: 'h3',
      title: '1. Délai de remboursement',
      content: (
        <p>
          Les demandes de remboursement doivent être effectuées dans un délai de{' '}
          <strong>14 jours</strong> après avoir passé la commande.
        </p>
      ),
    },
    {
      type: 'h3',
      title: '2. Motifs acceptés',
      list: [
        'Produit ou service non conforme à la description.',
        'Problème technique empêchant l’utilisation.',
        'Erreur de facturation.',
        'Annulation avant l’utilisation du service.',
      ],
    },
    {
      type: 'h3',
      title: '3. Cas non remboursables',
      list: [
        'Changement d’avis après utilisation.',
        'Non-respect des conditions d’utilisation.',
        'Service ou produit déjà consommé ou téléchargé.',
      ],
    },
    {
      type: 'h3',
      title: '4. Procédure de remboursement',
      content: (
        <>
          <p>Pour demander un remboursement, veuillez nous contacter :</p>
          <p className="pl-[30px]">
            <a
              href="mailto:aubinborissimotsebo@gmail.com"
              className="font-bold"
              target="_blank"
              rel="noreferrer"
            >
              📧 Email : support@tonsite.com
            </a>
          </p>
          <p className="pl-[30px] font-bold">📞 Téléphone : +237 675 75 71 00</p>
        </>
      ),
    },
  ];

  return (
    <section className="pb-[30px]">
      <motion.h1
        className="bg-[#7C1152] text-center text-[#f1f1f1] p-[15px]"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Conditions de Remboursement
      </motion.h1>

      <div className="pt-[30px] pl-[30px] flex flex-col gap-[10px]">
        {sections.map((section, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={fadeZoomSlide}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {section.type === 'p' && section.content}

            {section.type === 'h3' && (
              <>
                <h3 className="font-bold text-[18px]">{section.title}</h3>
                {section.content}
                {section.list && (
                  <ul>
                    {section.list.map((item, idx) => (
                      <li key={idx} className="pl-[30px]">
                        <strong>{`${section.title.split('.')[0]}.${idx + 1}`}</strong>{' '}
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Remboursement;
