import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div>
            <section className="hero-section px-[50px] pt-[10%] justify-center flex  flex-col gap-[30px] flex-wrap  min-h-[100vh]" id="accueil">
                <div className=" h-[100%] w-[100%] flex flex-col gap-[30px] ">
                    <h1 className="title text-[#333] uppercase font-bold text-2xl md:text-5xl">
                        <span className='text-white'>SUPER DECOR:</span><br /> <span className='lowercase'>EXPERT EN DéCORATION éVèNEMENTIELLe </span>
                    </h1>
                    <p className="para font-bold text-2xl text-[#f1f1f1]">Sublimez vos événements avec des locations de qualité.</p>
                    <div className="">
                        <Link to='/about'
                            className="link bg-[#FF9D00] p-[10px] rounded font-bold text-[#fff] cursor-pointer text-lg hover:bg-[#333] ">En
                            savoir plus</Link>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Home;