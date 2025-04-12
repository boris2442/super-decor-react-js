import React from 'react';
import { Link } from 'react-router-dom';
const About = () => {
    return (
        <div>
            <section id="about" className="w-[100%] px-[10px] md:px-[30px] bg-[#f1f1f1] min-h-[90vh]  pt-[25%] md:pt-[7%]">
                <div className="section-heading">
                    <h2 className="second-title text-3xl font-bold text-[#333] inline-block relative">À propos de nous!</h2><br/>
                        <span className="text-[#FF9D00] spantexte">Une version simplifiée de nous!</span>
                </div>

                <div className="box-about md:grid grid-cols-2">
                    <div className="  p-10 rounded-lg shadow-lg w-[100%]  child-box-about">
                        <p className="mt-6 text-[14px] md:text-lg  leading-relaxed para">
                            <span className="font-semibold spantexte">Super Decor</span> est spécialisé dans l'organisation des
                            evènements sur mesure. Depuis <span className="font-semibold">2010</span>, nous mettons notre
                            passion pour la cuisine et l'élégance au service de vos événements : mariages, anniversaires,
                            séminaires et autres célébrations spéciales.
                        </p>

                        <Link to="/contact"
                            className="mt-6 inline-block bg-[#FF9D00] text-[#f1f1f1]  px-[10px] py-3 rounded-md text-[16px] font-semibold hover:bg-[#333] transition para">
                            Contactez-nous 📞
                        </Link>
                    </div>
                    <div className="">
                        <img src="carte maman.jpg" alt="carte de visite" className="para h-[100%] "/>

                    </div>



                </div>

            </section>

        </div>
    );
};

export default About;