import React from 'react';

const CGVSection = () => {
    return (
        <div>
            <section className="">

                <h1 className="bg-[#7C1152]  text-center text-[#f1f1f1] p-[15px]"><i className="fas fa-file-contract icon"></i> Conditions Générales de Vente</h1>
                <div className="flex flex-col gap-[10px] pl-[20px] py-[30px]">
                    <p>Dernière mise à jour : <strong>25 février 2025</strong></p>

                    <h2><i className="fas fa-shopping-cart icon text-2xl  m-[6px] text-[#FF9D00] p-[5px] rounded-full h-[40px] w-[40px] border-2 border-solid border-[#333]"></i> <span className="font-bold text-[18px]"></span> Article 1 : Objet</h2>
                    <p>Les présentes conditions générales de vente régissent la vente des produits et services proposés sur notre site.</p>

                    <h2><i className="fas fa-credit-card icon text-2xl  m-[6px] text-[#FF9D00] p-[5px] rounded-full h-[40px] w-[40px] border-2 border-solid border-[#333]"></i> <span className="font-bold text-[18px]"> Article 2 :</span>Prix</h2>
                    <p>Les prix de nos produits sont indiqués en euros, tien outes taxes comprises (TTC), et peuvent être modifiés à tout moment.</p>

                    <h2><i className="fas fa-shipping-fast icon text-2xl  m-[6px] text-[#FF9D00] p-[5px] rounded-full h-[40px] w-[40px] border-2 border-solid border-[#333] "></i> <span className="font-bold text-[18px]">Article 3 :</span> Livraison</h2>
                    <p>Les délais de livraison varient selon votre localisation. Nous nous engageons à expédier les commandes sous 48 heures.</p>

                    <h2><i className="fas fa-undo icon text-2xl  m-[6px] text-[#FF9D00] p-[5px] rounded-full h-[40px] w-[40px] border-2 border-solid border-[#333]"></i> <span className="font-bold text-[18px]"> Article 4 :</span> Retour et Remboursement</h2>
                    <p>Vous disposez d'un délai de 14 jours après réception pour retourner un produit et obtenir un remboursement sous conditions.</p>

                    <h2><i className="fas fa-shield-alt icon text-2xl  m-[6px] text-[#FF9D00] p-[5px] rounded-full h-[40px] w-[40px] border-2 border-solid border-[#333]"></i> <span className="font-bold text-[18px]"> Article 5 : </span>Responsabilité</h2>
                    <p>Nous ne sommes pas responsables des dommages indirects qui pourraient survenir lors de l'utilisation de nos produits.</p>

                    <h2><i className="fas fa-user-lock icon text-2xl  m-[6px] text-[#FF9D00] p-[5px] rounded-full h-[40px] w-[40px] border-2 border-solid border-[#333]"></i> <span className="font-bold text-[18px]"> Article 6 : </span>Protection des données</h2>
                    <p>Les informations personnelles collectées sont protégées et ne seront pas partagées sans votre consentement.</p>

                    <h2><i class="fas fa-gavel icon text-2xl  m-[6px] text-[#FF9D00] p-[5px] rounded-full h-[40px] w-[40px] border-2 border-solid border-[#333]"></i> <span className="font-bold text-[18px]"> Article 7 : </span>Droit applicable</h2>
                    <p>Les présentes conditions sont soumises à la législation en vigueur dans le pays de vente.</p>

                    <h2><i className="fas fa-envelope icon border-solid border-[#333]
text-2xl  m-[6px] text-[#FF9D00] p-[5px] rounded-full h-[40px] w-[40px] border-2 "></i><span className="font-bold text-[18px]">Contact</span> </h2>
                    <p>Pour toute question, contactez-nous à <a href="mailto:aubinborissimotsebo@gmail.com" className="font-bold" target="_blank">superdecor.com</a>.</p>

                </div>

            </section>
        </div>
    );
};

export default CGVSection;