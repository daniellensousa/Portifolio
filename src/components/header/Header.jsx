import React from "react";
import './header.css'
import CTA from './CTA'
import ME from '../../assests/me.png'
import HeaderSocial from './HeaderSocials'

const Header = () =>{
    return(
        <header>
            <div className="container header__container">
                <h5>Oii, eu sou</h5>
                <h1>Danielle Nascimento</h1>
                <h5 className=".text-light">Desenvolvedora Front-end</h5>
                <CTA />
                <HeaderSocial />
                <div className="me">
                    <img src={ME} alt="me" />
                </div>
                <a href="#contact" className="scroll__down">Scroll Down</a>
            </div>
        </header>
    )
}
export default Header