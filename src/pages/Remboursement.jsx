import React from 'react';

const Remboursement = () => {
    return (
        <section class="pb-[30px] ">
        <h1 class="bg-[#7C1152]  text-center text-[#f1f1f1] p-[15px]">Conditions de Remboursement</h1>
        <div class="pt-[30px] pl-[30px] flex flex-col gap-[10px]">
            <p><em><strong>Nous nous engageons à fournir un service de qualité. Toutefois, en cas de problème, voici nos conditions de remboursement :</strong></em></p>
            
            <h3 class="font-bold text-[18px]">1. Délai de remboursement</h3>
            <p>Les demandes de remboursement doivent être effectuées dans un délai de <strong>14 jours</strong> après avoir passer la commande.</p>
    
            <h3 class="font-bold text-[18px]">2. Motifs acceptés</h3>
            <ul>
                <li class="pl-[30px]"><strong>2.1</strong> Produit ou service non conforme à la description.</li>
                <li class="pl-[30px]"><strong>2.2</strong> Problème technique empêchant l’utilisation.</li>
                <li class="pl-[30px]"><strong>2.3</strong> Erreur de facturation.</li>
                <li class="pl-[30px]"><strong>2.4</strong> Annulation avant l’utilisation du service.</li>
            </ul>
    
            <h3 class="font-bold text-[18px]">3. Cas non remboursables</h3>
            <ul>
                <li class="pl-[30px]"><strong>3.1</strong> Changement d’avis après utilisation.</li>
                <li class="pl-[30px]"><strong>3.2</strong> Non-respect des conditions d’utilisation.</li>
                <li class="pl-[30px]"><strong>3.3</strong> Service ou produit déjà consommé ou téléchargé.</li>
            </ul>
    
            <h3 class="font-bold text-[18px]">4. Procédure de remboursement</h3>
            <p>Pour demander un remboursement, veuillez nous contacter :</p>
            <p class="pl-[30px]"><a href="aubinborissimotsebo@gmail.com" class="font-bold" target="_blank">📧 Email : support@tonsite.com</a></p>
            <p class="pl-[30px] font-bold">📞 Téléphone : +237 675 75 71 00</p> 
        </div>
      </section>
    
    );
};

export default Remboursement;