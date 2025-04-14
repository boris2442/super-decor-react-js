// import React from 'react';
// import { NavLink } from 'react-router-dom';


// const Navigation = () => {
//     const logo = 'logo.jpg'
//     const liens = ({ isActive }) => {
//         return `capitalize text-white text-[12px] relative px-2 hover:text-[#FF9D00] md:text-[1rem]
//     after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-white after:transition-transform after:duration-300
//     ${isActive ? 'after:scale-100' : 'after:scale-0 hover:after:scale-100'}`
//     }
//     return (

//         <div>
//             <header className="bg-[#7C1152] h-[12vh] shadow-2xl flex items-center justify-between px-3 fixed w-full top-0 z-50">
//                 <div>
//                     <NavLink to='/' aria-label="Retour à l'accueil">
//                         <img src={logo} alt="logo du site" className="w-[70px] h-[100%] rounded-full" />
//                     </NavLink>
//                 </div>
//                 <nav className="bg-[#7C1152]">
//                     <ul className="flex items-center gap-[30px]  ">
//                         <li>
//                             <NavLink to="/"
//                                 className={liens}
//                             >accueil</NavLink>
//                         </li>
//                         <li>
//                             <NavLink to="/about"
//                                 className={liens}
//                             >A
//                                 propos</NavLink>
//                         </li>
//                         <li>
//                             <NavLink to="/services" className={liens}>services</NavLink>
//                         </li>
//                         <li>
//                             <NavLink to="/avis" className={liens}>avis</NavLink>
//                         </li>
//                         <li>
//                             <NavLink to="/contact" className={liens}>contact</NavLink>
//                         </li>

//                     </ul>
//                 </nav>
//             </header>
//         </div>
//     );
// };

// export default Navigation;











// import React, { useState, useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
// import { Bars3Icon, XMarkIcon,SunIcon, MoonIcon } from '@heroicons/react/24/outline';

// const Navigation = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const logo = 'logo.jpg';

//   const toggleMenu = () => setIsOpen(!isOpen);
//   const closeMenu = () => setIsOpen(false);

//   const liens = ({ isActive }) => {
//     return `capitalize text-white text-[12px] relative px-2 hover:text-[#FF9D00] md:text-[1rem]
//     after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-white after:transition-transform after:duration-300
//     ${isActive ? 'after:scale-100' : 'after:scale-0 hover:after:scale-100'}`;
//   };

//   return (
//     <header className="bg-[#7C1152] h-[12vh] shadow-2xl flex items-center justify-between px-3 fixed w-full top-0 z-50">
//       {/* Logo */}
//       <NavLink to="/" aria-label="Retour à l'accueil">
//         <img src={logo} alt="logo du site" className="w-[70px] h-[100%] rounded-full" />
//       </NavLink>

//       {/* Menu Desktop */}
//       <nav className="hidden md:flex">
//         <ul className="flex items-center gap-[30px]">
//           <li><NavLink to="/" className={liens}>accueil</NavLink></li>
//           <li><NavLink to="/about" className={liens}>à propos</NavLink></li>
//           <li><NavLink to="/services" className={liens}>services</NavLink></li>
//           <li><NavLink to="/avis" className={liens}>avis</NavLink></li>
//           <li><NavLink to="/contact" className={liens}>contact</NavLink></li>
//         </ul>
//       </nav>

//       {/* Bouton menu mobile */}
//       <div className="md:hidden">
//         {!isOpen ? (
//           <Bars3Icon
//             className="h-8 w-8 text-white cursor-pointer"
//             onClick={toggleMenu}
//           />
//         ) : (
//           <XMarkIcon
//             className="h-8 w-8 text-white cursor-pointer"
//             onClick={toggleMenu}
//           />
//         )}
//       </div>

//       {/* Menu mobile dropdown */}
//       <div
//         className={`absolute top-[12vh] left-0 w-full bg-[#7C1152] z-40 transition-all duration-300 transform ${
//           isOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'
//         } md:hidden`}
//       >
//         <ul className="flex flex-col items-center py-4 gap-4">
//           <li><NavLink to="/" className={liens} onClick={closeMenu}>accueil</NavLink></li>
//           <li><NavLink to="/about" className={liens} onClick={closeMenu}>à propos</NavLink></li>
//           <li><NavLink to="/services" className={liens} onClick={closeMenu}>services</NavLink></li>
//           <li><NavLink to="/avis" className={liens} onClick={closeMenu}>avis</NavLink></li>
//           <li><NavLink to="/contact" className={liens} onClick={closeMenu}>contact</NavLink></li>
//         </ul>
//       </div>
//     </header>
//   );
// };

// export default Navigation;






import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const logo = 'logo.jpg';

  // Toggle du menu
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Définir les styles des liens
  const liens = ({ isActive }) => {
    return `capitalize text-white text-[12px] relative px-2 hover:text-[#FF9D00] md:text-[1rem]
      after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-white after:transition-transform after:duration-300
      ${isActive ? 'after:scale-100' : 'after:scale-0 hover:after:scale-100'}`;
  };

  // Vérification du mode sombre sauvegardé dans localStorage ou basé sur la préférence du système
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setDarkMode(savedMode === 'true');
    } else {
      setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  // Basculer entre le mode sombre et clair
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', !darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <header className="bg-[#7C1152] dark:bg-[#1F1F1F] text-white dark:text-white h-[12vh] shadow-2xl flex items-center justify-between px-3 fixed w-full top-0 z-50">
      {/* Logo */}
      <NavLink to="/" aria-label="Retour à l'accueil">
        <img src={logo} alt="logo du site" className="w-[70px] h-[100%] rounded-full" />
      </NavLink>

      {/* Menu Desktop */}
      <nav className="hidden md:flex">
        <ul className="flex items-center gap-[30px]">
          <li><NavLink to="/" className={liens}>accueil</NavLink></li>
          <li><NavLink to="/about" className={liens}>à propos</NavLink></li>
          <li><NavLink to="/services" className={liens}>services</NavLink></li>
          <li><NavLink to="/avis" className={liens}>avis</NavLink></li>
          <li><NavLink to="/contact" className={liens}>contact</NavLink></li>
        </ul>
      </nav>

      {/* Menu Burger Mobile */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {!isOpen ? (
            <Bars3Icon className="h-8 w-8 text-white cursor-pointer" />
          ) : (
            <XMarkIcon className="h-8 w-8 text-white cursor-pointer" />
          )}
        </button>
      </div>

      {/* Menu Mobile */}
      <div
        className={`absolute top-[12vh] left-0 w-full bg-[#7C1152] z-40 transition-all duration-300 transform ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'
        } md:hidden`}
      >
        <ul className="flex flex-col items-center py-4 gap-4">
          <li><NavLink to="/" className={liens} onClick={closeMenu}>accueil</NavLink></li>
          <li><NavLink to="/about" className={liens} onClick={closeMenu}>à propos</NavLink></li>
          <li><NavLink to="/services" className={liens} onClick={closeMenu}>services</NavLink></li>
          <li><NavLink to="/avis" className={liens} onClick={closeMenu}>avis</NavLink></li>
          <li><NavLink to="/contact" className={liens} onClick={closeMenu}>contact</NavLink></li>
        </ul>
      </div>

      {/* Bouton Dark Mode */}
      <div className="flex items-center sm:absolute sm:right-6 sm:top-6">
        <button onClick={toggleDarkMode} className="p-2">
          {darkMode ? (
            <MoonIcon className="w-6 h-6" />
          ) : (
            <SunIcon className="w-6 h-6" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Navigation;
