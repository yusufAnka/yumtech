import React from 'react';
import "./portfolio.css";
import proj1 from '../../assets/proj1.jpg';
import proj2 from '../../assets/proj2.png';
import proj3 from '../../assets/proj3.png';
import proj4 from '../../assets/fizido.png';
import proj5 from '../../assets/proj5.png';
import proj6 from '../../assets/proj6.png';
const data = [
    {
        id: 1,
        img: proj1,
        title: "Accessified",
        github: "https://github.com/yusufAnka/Accessified",
        demo: "https://github.com/yusufAnka/Accessified"
    },
    {
        id: 2,
        img:proj2,
        title: "TMB Catalog",
        github: "https://github.com/yusufAnka/TMB-Frontend.git",
        demo: "https://tmb-frontend-two.vercel.app/"
    },
   
    {
        id: 3,
        img: proj3,
        title: "Decagon Fellowship website",
        github: "https://github.comhttps://github.com/decadevs/score-card-api",
        demo: "https://fellowship.decagonhq.dev/engineer/login"
    },
    {
        id: 4,
        img: proj4,
        title: "Fizido Payment Application",
        github: "https://github.com",
        demo: "www.yusuf.com"
    },
    {
        id: 5,
        img: proj5,
        title: "Score Card",
        github: "https://github.com/decadevs/live-project-score-card-sq011a-group-2-frontend-group-2-project-node-sq011",
        demo: "https://astonishing-souffle-b0fb04.netlify.app/login"
    },
    {
        id: 6,
        img: proj6,
        title: "Mama-Africa Food Recipe",
        github: "https://github.com",
        demo: "www.yusuf.com"
    }

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
        <h5>My Projects</h5>
        <h2>Projects</h2>
        <div className='container portfolio__container'>
            {
                data.map(({id, title, img, github, demo}) => {
                    return (
                        <article key={id} className='portfolio__item'>
                            <div className='portfolio__item-image'>
                                <img src={img} alt="" />
                            </div>
                            <h3>{title}</h3>
                            <div className='portfolio__item-cta'>
                            <a href={github} className='btn' target='_blank'>Github</a>
                            <a href={demo} className='btn' target='_blank'>Live Demo</a>
                            </div>
                        </article>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Portfolio;