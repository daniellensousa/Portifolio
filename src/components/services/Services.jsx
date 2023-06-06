import React from "react";
import './services.css'
import { BsCheck } from 'react-icons/bs'

const Services = () => {
    return (
        <section id="services">
            <h2>Servicos</h2>
            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>UI/UX Design</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BsCheck className="service__list-icon" />
                            <p> mapas de navegação do usuário</p>
                        </li>
                        <li>
                            <BsCheck className="service__list-icon" />
                            <p>Testes de usabilidade</p>
                        </li>
                        <li>
                            <BsCheck className="service__list-icon" />
                            <p>Criação e desenvolvimento</p>
                        </li>
                        <li>
                            <BsCheck className="service__list-icon" />
                            <p>Fluxo do usuário e de processos</p>
                        </li>
                    </ul>
                </article>

                {/*end*/}
                <article className="service">
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BsCheck className="service__list-icon" />
                            <p>Criação e integração</p>
                        </li>
                        <li>
                            <BsCheck className="service__list-icon" />
                            <p>API</p>
                        </li>
                        <li>
                            <BsCheck className="service__list-icon" />
                            <p>Administração de banco de dados</p>
                        </li>
                        <li>
                            <BsCheck className="service__list-icon" />
                            <p>Responsividade</p>
                        </li>
                    </ul>
                </article>
                {/*end*/}
            </div>
        </section>
    )
}
export default Services