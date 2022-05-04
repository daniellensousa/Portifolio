import React from "react";
import './about.css'
import ME from '../../assests/me-about.jpg'
import { FiAward } from 'react-icons/fi'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'


const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

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
                            <h5>Experience</h5>
                            <small>1 Year Working</small>
                        </article>

                        <article className="about__card">
                            <FiUsers className="about__icon" />
                            <h5>Clients</h5>
                            <small>Trainee</small>
                        </article>

                        <article className="about__card">
                            <VscFolderLibrary className="about__icon" />
                            <h5>Projects</h5>
                            <small>80+ Completed</small>
                        </article>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum quod corrupti obcaecati ullam, veniam vero. Repudiandae, veniam amet sint,
                         voluptates quia in quas quos qui natus quam odio repellat corrupti.</p>

                    <a href="#contact" className="btn btn-primary">Let's a Talk</a>
                </div>
            </div>
        </section>
    )
}
export default About