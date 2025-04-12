import React from 'react';

const Contact = () => {
    return (
        <div>
            <section className="pt-10" id="contact">
                <div className="section-heading p-[50px]">

                    <h2 className="second-title text-3xl font-bold text-[#333] inlineblock ">Nous Contactez!</h2><br />
                    <span className="spantexte font-[500] text-[#333]">Inscription à la newsletter!</span>
                </div>


                <form>

                    <div class="container-form">
                        <div class="box-form">
                            <label for="name" class="scrollform text-[13px] md:text-[16px]">Entrer votre nom</label>
                            <input type="text" placeholder="SIMO" id="name" name="name" required className="scrollform" />
                            <span className="scrollform spanName"></span>
                        </div>
                        <div class="box-form">
                            <label for="email" class="scrollform text-[13px] md:text-[16px]">Entrer votre email</label>
                            <input type="text" placeholder="aubinsimo@gmail.com" id="email" name="email" required className="scrollform" />
                            <span className="scrollform spanEmail"></span>
                        </div>
                        <div class="box-form">
                            <label for="textarea" className="scrollform text-[13px] md:text-[16px]">Laisser un message</label>
                            <textarea name="message" id="textarea" placeholder="laisser un message" required className="scrollform"></textarea>
                            <span className="spanTextarea scrollform"></span>
                        </div>
                        <div >
                            <input type="submit" value="Envoyer" class="scrollform" />
                        </div>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default Contact;