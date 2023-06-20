import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolioi-img1.png'
import IMG2 from '../../assets/portfolioi-img2.webp'
import IMG3 from '../../assets/portfolioi-img3.webp'
import IMG4 from '../../assets/portfolioi-img4.webp'
import IMG5 from '../../assets/portfolioi-img5.webp'
import IMG6 from '../../assets/portfolioi-img6.webp'


const data = [
  {
    id:1,
    image: IMG1,
    title: 'Trading App',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/21649261-Pie-chart-library-Hyper-charts-UI-Kit'
  },
{
    id:2,
    image: IMG2,
    title: 'Social Media' ,
    github: 'https://github.com' ,
    demo: 'https://dribbble.com/shots/21649261-Pie-chart-library-Hyper-charts-UI-Kit'
  },
  {
    id:3,
    image: IMG6,
    title: 'Game Stream' ,
    github: 'https://github.com' ,
    demo: 'https://dribbble.com/shots/21649261-Pie-chart-library-Hyper-charts-UI-Kit'
  },
  {id:4,
    image: IMG3,
    title: 'Crypto Trading' ,
    github: 'https://github.com' ,
    demo: 'https://dribbble.com/shots/21649261-Pie-chart-library-Hyper-charts-UI-Kit'
  },
  {
    id:5,
    image: IMG4,
    title: 'Music Player',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/21649261-Pie-chart-library-Hyper-charts-UI-Kit'
  
  },
  {
    id:6,
    image: IMG5,
    title: 'Investment Ideas',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/21649261-Pie-chart-library-Hyper-charts-UI-Kit'
  
  }
]
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My React Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
      {
        data.map(({id,image,title,github,demo})=> {
          return (
            <article key={id} className='portfolio__item'>
             <div className="portfolio__item-image">
               <img src={image} alt="" />
             </div>
             <h3>{title}</h3>
             <div className="portfolio__item-cta">
               <a href={github} className='btn' target='_blank'>Github</a>
               <a href={demo} className='btn btn-primary'  target='_blank'>Live Demo</a>
             </div>
            </article>
          )
        }
        )
      }
      </div>
    </section>
  )
}

export default Portfolio