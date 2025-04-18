// Component: Footer.jsx


import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // La durée de l'animation en ms
            easing: 'ease-in-out', // Le type de mouvement de l'animation
            once: true, // Pour que l'animation ne se produise qu'une seule fois
        });
    }, []);

    const liens = ({ isActive }) => {
        return `capitalize text-white text-[16px] relative px-2 hover:text-[#FF9D00]
        after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-white after:transition-transform after:duration-300
        ${isActive ? 'after:scale-100' : 'after:scale-0 hover:after:scale-100'}`;
    };

    return (
        <div>
            <footer className="p-[20px] bg-[#7C1152] rounded-t-[40px] relative md:rounded-t-[90px] mt-10 lg:rounded-t-[120px]">
                <div className="container-footer flex justify-around flex-wrap">
                    <div className="box-footer text-center leading-[30px]" data-aos="fade-up">
                        <div className="child-bix-icon flex text-[#FF9D00] items-center">
                            <i
                                className="fas fa-shopping-cart text-2xl m-[6px] text-[#FF9D00] p-[5px] rounded-full h-[40px] w-[40px] border-2 border-solid border-[#333] hover:text-[#f1f1f1] hover:bg-[#FF9D00] cursor-pointer"></i>
                            <h3 className="third-title text-[1.4rem] text-[#FF9D00] font-bold capitalize">
                                <Link to='/'>SUPER DECOR</Link>
                            </h3>
                        </div>
                        <div className="icons hidden md:flex">
                            <i
                                className="fa-brands fa-facebook-f text-2xl flex justify-center items-center m-[6px] text-[#FF9D00] p-[10px] rounded-full h-[40px] w-[40px] border-2 border-solid border-[#333] hover:text-[#f1f1f1] hover:bg-[#FF9D00] cursor-pointer"></i>
                            <i
                                className="fa-brands fa-square-instagram text-2xl flex justify-center items-center m-[6px] text-[#FF9D00] p-[10px] rounded-full h-[40px] w-[40px] border-2 border-solid border-[#333] hover:text-[#f1f1f1] hover:bg-[#FF9D00] cursor-pointer"></i>
                            <i
                                className="fa-brands fa-youtube text-2xl flex justify-center items-center m-[6px] text-[#FF9D00 p-[10px] rounded-full h-[40px] w-[40px] text-[#FF9D00] border-2 border-solid border-[#333] hover:text-[#f1f1f1] hover:bg-[#FF9D00] cursor-pointer"></i>
                            <i
                                className="fa-brands fa-tiktok text-3xl flex justify-center items-center m-[6px] text-[#FF9D00] p-[10px] rounded-full h-[40px] w-[40px] border-2 border-solid border-[#333] hover:text-[#f1f1f1] hover:bg-[#FF9D00] cursor-pointer"></i>
                        </div>
                    </div>

                    <div className="box-footer none leading-[20px] text-left hidden md:block" data-aos="fade-up">
                        <h3 className="third-title text-[20px] md:text-2xl text-[#FF9D00] font-bold capitalize">Pages</h3>
                        <p className="parent-page relative text-[#f1f1f1] font-bold text-[14px] md:text-[16px]">
                            <Link to="/" rel="noopener noreferrer" className='hover:text-[#FF9D00]'>Accueil</Link>
                        </p>
                        <p className="parent-page relative text-[#f1f1f1] font-bold text-[14px] md:text-[16px]">
                            <Link to="/about" className='hover:text-[#FF9D00]' rel="noopener noreferrer">A propos</Link>
                        </p>
                        <p className="parent-page relative text-[#f1f1f1] font-bold text-[14px] md:text-[16px]">
                            <Link className='hover:text-[#FF9D00]' to="/services" rel="noopener noreferrer">Services</Link>
                        </p>
                        <p className="parent-page relative text-[#f1f1f1] font-bold text-[14px] md:text-[16px]">
                            <Link className='hover:text-[#FF9D00]' to="/avis" rel="noopener noreferrer">Avis</Link>
                        </p>
                        <p className="parent-page relative text-[#f1f1f1] font-bold text-[14px] md:text-[16px]">
                            <Link to="/contact" className='hover:text-[#FF9D00]' rel="noopener noreferrer">Contact</Link>
                        </p>
                    </div>

                    <div className="box-footer leading-[25px] text-[14px] md:text-[16px]" data-aos="fade-up">
                        <h3 className="third-title text-[20px] md:text-2xl text-[#FF9D00] font-bold capitalize">autres</h3>
                        <p className="para text-[#f1f1f1] font-bold">
                            <Link to="/legale" rel="noopener noreferrer" className="parent-page relative hover:text-[#FF9D00]">Mentions légales</Link>
                        </p>
                        <p className="para text-[#f1f1f1] font-bold">
                            <Link to='confidentialite' className='hover:text-[#FF9D00]'>Politique de confidentialité</Link>
                        </p>
                        <p className="para text-[#f1f1f1] font-bold">
                            <Link className='hover:text-[#FF9D00]' to="/cgv">Conditions générales de ventes</Link>
                        </p>
                        <p className="para text-[#f1f1f1] font-bold">
                            <Link to='/remboursement-condition' className='hover:text-[#FF9D00]'>Conditions de remboursement</Link>
                        </p>
                    </div>

                    <div className="box-footer leading-[15px]" data-aos="fade-up">
                        <h3 className="third-title text-[20px] md:text-2xl text-[#FF9D00] font-bold capitalize">Contact</h3>
                        <div className="para child4 flex flex-col leading-[10px] text-[14px] md:text-[16px]">
                            <p className="text-[#f1f1f1] font-bold text-[14px] md:text-[16px] flex items-center hover:text-[#FF9D00]">
                                <i className="fa-solid fa-location-dot text-[17px] flex justify-center items-center m-[6px] text-[#FF9D00] p-[10px] rounded-full h-[30px] w-[30px] md:h-[40px] md:w-[40px] border-2 border-solid border-[#333] hover:text-[#f1f1f1] hover:bg-[#FF9D00] cursor-pointer"></i>
                                Bangou Ville (Madagascar)
                            </p>
                            <div className="para text-[#f1f1f1] font-bold text-[14px] md:text-[16px] flex items-center hover:text-[#FF9D00]">
                                <i className="fa-solid fa-phone-volume phone text-[17px] flex justify-center items-center m-[6px] text-[#FF9D00] p-[5px] rounded-full h-[30px] w-[30px] md:h-[40px] md:w-[40px] border-2 border-solid border-[#333] hover:text-[#f1f1f1] hover:bg-[#FF9D00] cursor-pointer"></i>
                                (+237)/675757100 / 652339923
                            </div>
                            <div className="para text-[#f1f1f1] font-bold text-[14px] md:text-[16px] flex items-center justify-center hover:text-[#FF9D00]">
                                <i className="fa-solid fa-phone-volume phone text-[17px] flex justify-center items-center m-[6px] text-[#FF9D00] p-[5px] rounded-full h-[30px] w-[30px] md:h-[40px] md:w-[40px] border-2 border-solid border-[#333] hover:text-[#f1f1f1] hover:bg-[#FF9D00] cursor-pointer"></i>
                                (+237)/697987812 / 680736603
                            </div>
                            <div className="para text-[#f1f1f1] font-bold text-[14px] md:text-[16px] flex items-center">
                                <i className="fa-regular fa-envelope text-[17px] flex justify-center items-center m-[6px] text-[#FF9D00] p-[10px] cursor-pointer rounded-full h-[30px] w-[30px] md:h-[40px] md:w-[40px] border-2 border-solid border-[#333] hover:text-[#f1f1f1] hover:bg-[#FF9D00]"></i>
                                <a href="mailto:aubinborissimotsebo@gmail.com" target="_blank" className='hover:text-[#FF9D00]'>
                                    superdecor@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mx-auto flex justify-center w-full">
                    <p className="marquee text-[#f1f1f1] text-[14px] text-center flex items-center gap-[10px] md:text-[1.2rem]">
                     {/* Propulsé avec❤️ par Aubin Boris Simo (boris code).  */}
                     with ❤️  by  Boris-code 2025; 
                        <a href="https://github.com/boris2442" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github text-3xl p-[10px] rounded-full text-[#FF9D00] hover:text-[#333] "></i></a>
                        <a href="https://wa.me/+237679135177" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-whatsapp text-3xl p-[10px] rounded-full text-[#FF9D00] hover:text-[#333]"></i></a>
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;












