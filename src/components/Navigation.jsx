import React from 'react';
import { Link } from 'react-router-dom';


const Navigation = () => {
   
    return (
        <div>
            <header className="bg-[#7C1152] h-[10vh] shadow-2xl flex items-center justify-between px-3 fixed w-full top-0 z-50">
                <div>
                    <Link to='/' aria-label="Retour à l'accueil">
                    <img src='logo.jpg' alt="logo du site" className="w-[70px] h-[70px] rounded-full" />
                    </Link>
                </div>
                <nav className="bg-[#7C1152]">
                    <ul className="flex items-center gap-[30px]  ">
                        <li>
                            <Link to="/"
                                className="capitalize text-white text-[16px] hover:text-[#FF9D00] relative "
                               
                                >accueil</Link>
                        </li>
                        <li>
                            <Link to="/about" 
                         className="capitalize text-white text-[16px] hover:text-[#FF9D00] relative "
                            // className={({ isActive }) => `capitalize text-white text-[16px] hover:text-[#FF9D00] relative ${isActive ? 'nav-active' : ''}`}
                            >A
                                propos</Link>
                        </li>
                        <li>
                            <Link to="/services" className="capitalize text-white text-[16px] hover:text-[#FF9D00] relative">services</Link>
                        </li>
                        <li>
                            <Link to="/avis" className="capitalize text-white text-[16px] hover:text-[#FF9D00] relative">avis</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="capitalize text-white text-[16px] hover:text-[#FF9D00] relative">contact</Link>
                        </li>

                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Navigation;


