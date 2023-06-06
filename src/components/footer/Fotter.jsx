import React from "react";
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {AiFillLinkedin} from 'react-icons/ai'

const Footer = () =>{
    return(
        <footer>
            <a href="#" className="footer__logo">Danielle</a>
            <ul className="permalinks">
               <li><a href="#">Home</a></li>
               <li><a href="#about">Sobre</a></li>
               <li><a href="#experience">Experiência</a></li>
               <li><a href="#services">Serviços</a></li>
               <li><a href="#portifolio">Portifolio</a></li>
               <li><a href="#contact">Contato</a></li>
                </ul>
            <div className="footer__socials">
                <a href="https://linkedin.com"><AiFillLinkedin/></a>
            </div>
            <div className="footer__copyright">
                <small>&copy; Danielle Nascimento. All rights reserved.</small>
            </div>
        </footer>
    )
}
export default Footer