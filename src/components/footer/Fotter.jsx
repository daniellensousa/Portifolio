import React from "react";
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {AiFillLinkedin} from 'react-icons/ai'

const Footer = () =>{
    return(
        <footer>
            <a href="#" className="footer__logo">EGATOR</a>
            <ul className="permalinks">
               <li><a href="#">Home</a></li>
               <li><a href="#about">About</a></li>
               <li><a href="#experience">Experiencie</a></li>
               <li><a href="#services">Services</a></li>
               <li><a href="#portifolio">Portifolio</a></li>
               <li><a href="#testimonials">Testimonials</a></li>
               <li><a href="#contact">Contact</a></li>
                </ul>
            <div className="footer__socials">
                <a href="https://facebook.com"><FaFacebookF/></a>
                <a href="https://instagram.com"><FiInstagram/></a>
                <a href="https://linkedin.com"><AiFillLinkedin/></a>
            </div>
            <div className="footer__copyright">
                <small>&copy; Danielle Nascimento. All rights reserved.</small>
            </div>
        </footer>
    )
}
export default Footer