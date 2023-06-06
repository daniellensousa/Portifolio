import React from "react";
import './about.css'
import ME from '../../assests/me.png'
import { FiAward } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'


const About = () => {
    return (
        <section id="about">
            <h2>Sobre mim</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FiAward className="about__icon" />
                            <h5>Experiência</h5>
                            <small>2 anos na área</small>
                        </article>

                        <article className="about__card">
                            <VscFolderLibrary className="about__icon" />
                            <h5>Projects</h5>
                            <small>20+ Completed</small>
                        </article>
                    </div>
                    <p>Apaixonada pelo mundo da tecnologia e design, pretendo um futuro proximo dar aulas para passar meu conhecimento para crianças</p>

                </div>
            </div>
        </section>
    )
}
export default About