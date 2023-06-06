import React from "react";
import './experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
    return (
        <section id="experience">
            <h2>My Experience</h2>
            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3> Frontend Develoment</h3>
                    <div className="experience__content">
                        <article className="experience_details">
                            <BsFillPatchCheckFill className=".experience_details-icon" />
                            <div>
                                <h4>HTML</h4>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsFillPatchCheckFill className="experience_details-icon" />
                            <div>
                                <h4>CSS</h4>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsFillPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>Javascript</h4>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsFillPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>React js</h4>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsFillPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>Typescript</h4>
                            </div>
                        </article>
                    </div>
                </div>

                <div className="experience__backend">
                    <h3>Backend Development</h3>
                    <div className="experience__content">
                        <article className="experience_details">
                            <BsFillPatchCheckFill className="experience_details-icon" />
                            <div>
                                <h4>NodeJs</h4>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsFillPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>PHP</h4>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsFillPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>MYQSL</h4>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsFillPatchCheckFill className="experience_details-icon" />
                            <div>
                                <h4>Python</h4>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Experience