import React from 'react';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
    const liens = ({ isActive }) => {
        return `capitalize text-white text-[16px] relative px-2 hover:text-[#FF9D00]
    after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-white after:transition-transform after:duration-300
    ${isActive ? 'after:scale-100' : 'after:scale-0 hover:after:scale-100'}`
    }
    return (
        <div>
            <header className="bg-[#7C1152] h-[12vh] shadow-2xl flex items-center justify-between px-3 fixed w-full top-0 z-50">
                <div>
                    <NavLink to='/' aria-label="Retour à l'accueil">
                        <img src='logo.jpg' alt="logo du site" className="w-[70px] h-[100%] rounded-full" />
                    </NavLink>
                </div>
                <nav className="bg-[#7C1152]">
                    <ul className="flex items-center gap-[30px]  ">
                        <li>
                            <NavLink to="/"
                                className={liens}
                            >accueil</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about"
                               className={liens}
                            >A
                                propos</NavLink>
                        </li>
                        <li>
                            <NavLink to="/services"  className={liens}>services</NavLink>
                        </li>
                        <li>
                            <NavLink to="/avis"   className={liens}>avis</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact"   className={liens}>contact</NavLink>
                        </li>

                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Navigation;


