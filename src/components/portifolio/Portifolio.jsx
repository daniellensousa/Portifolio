import React from "react";
import './portifolio.css'
import IMG1 from '../../assests/portfolio1.jpg'
import IMG2 from '../../assests/portfolio2.jpg'
import IMG3 from '../../assests/portfolio3.jpg'
import IMG4 from '../../assests/portfolio4.jpg'
import IMG5 from '../../assests/portfolio5.png'
import IMG6 from '../../assests/portfolio6.jpg'


const data = [
    {
        id: 1,
        image: IMG1,
        title: 'BuscaCEP',
        github: 'https://github.com',
        demo: 'https://github.com/danidevsousa/BuscaCEP'
    },
    {
        id: 2,
        image: IMG2,
        title: "Calculadora",
        github: "https://github.com",
        demo: "https://github.com/danidevsousa/Calculadora"
    },
    {
        id: 3,
        image: IMG3,
        title: "PYTHON",
        github: "https://github.com",
        demo: "https://https://github.com/danidevsousa/PYTHON"
    },
    {
        id: 4,
        image: IMG4,
        title: "exercicios_Javascrpit",
        github: "https://github.com",
        demo: "https://github.com/danidevsousa/exercicios_Javascrpit"
    },
    {
        id: 5,
        image: IMG5,
        title: "Academia PlayFit",
        github: "https://github.com",
        demo: "https://github.com/danidevsousa/playfit"
    },
    {
        id: 6,
        image: IMG6,
        title: "Transitions CSS",
        github: "https://github.com",
        demo: "https://github.com/danidevsousa/transicoes_css"
    }


]

const Portifolio = () => {
    return (
        <section id="portifolio">
            <h2>Portifolio</h2>
            <div className="container portifolio__container">
                {
                    data.map(({ id, image, title, github, demo }) => {
                        return (
                            <article  key={id} className="portifolio__item">
                                <div className="portifolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portifolio__item-cta">
                                    <a className="btn" href={github} target="_blank">GitHub</a>
                                    <a className="btn btn-primary" href={demo} target="_blank">Live Demo</a>
                                </div>
                            </article>
                        )
                    })

                }
            </div>
        </section>
    )
}
export default Portifolio