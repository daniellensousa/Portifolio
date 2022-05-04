import React from "react";
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'


const Contact = () =>{
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_eccs6kg', 'template_rpyria2', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
    return(
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <HiOutlineMail className="contact__option-icon"/>
                        <h4>Email</h4>
                        <h5>danielle.nsousa@outlook.com</h5>
                        <a href="mailto:danielle.nsousa@outlook.com" target="_blank">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <AiOutlineLinkedin className="contact__option-icon"/>
                        <h4>Messeger</h4>
                        <h5>Danielle</h5>
                        <a href="https://www.linkedin.com/in/danielle-nascimento-sousa-5053a419b/ " target="_blank">Send a message</a>
                    </article>         
                    <article className="contact__option">
                        <BsWhatsapp className="contact__option-icon"/>
                        <h4>Whatsapp</h4>
                        <h5>+5511947081926</h5>
                        <a href="https://wa.me/5511944792550?text=Oi!%20Vim%20do%20site%20e%20desejo%20receber%20atendimento" target="_blank">Send a message</a>
                    </article>
                </div>
                {/*END OF CONTACT OPTION*/}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name"placeholder="Your Full Name" required/>
                    <input type="email" name="email" placeholder="Yout Email" required/>
                    <textarea name="message" rows="7" placeholder="Your Message" required> </textarea>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    )
}
export default Contact