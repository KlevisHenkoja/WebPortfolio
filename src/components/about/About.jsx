import React from 'react'
import './about.css'
import ME from '../../assets/1668852871468.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {AiFillFolderOpen} from 'react-icons/ai'
export const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="contanier about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Img" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
          <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>+1 Years</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>37 Worldwide</small>
            </article>
            <article className='about__card'>
              <AiFillFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small>+43 Completed</small>
            </article>
          </div>
          <p>
            The company itself is a very successful company. And we 
            do not lead them to anything greaer than their pleasure or pain,
            but they will indedd critize anything, because they abandon, trouble 
            and choose to drive away all the trouble that they have.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Tallk</a>
        </div>

      </div>
      
    </section>
  )
}

export default About