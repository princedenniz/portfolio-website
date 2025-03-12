import React from 'react'
import "./About.css"
import Hole from "../../ui/Hole";
import {skills} from "../../data"
import CardUi from "../../assets/CardUi"

const About = () => {
  return (
    <section id='about'>
      <div className='card section__wrapper'>
        <Hole/>
        <div className='column left-column'>
          <h3 className='skills__title'>My Skills</h3>
          <div className='skills__container'>
            {skills.map((skill,index)=>(
              <div className='flex skill__group' key={index}>
                {skill.data.map((list,key)=>(
                  <div className='blur__overlay flex__center skill' key={key}>
                    <div className='skill__logo'>
                      <img src={list.logo} alt="" />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <CardUi className="card__ui-item" color={"var(--color-primary)"}/>
        </div>
        <div className='column right-column'>
          <h2 className='shine'>About</h2>
          <h1 className='title'>
            I am <span className='color__primary'>Dennis Chukwumere</span>
          </h1>
          <p className='text__muted description'>
          a creative web designer and developer passionate about crafting stunning and functional websites. I specialize in building user-friendly, high-performance digital experiences that blend aesthetics with innovation. With a keen eye for design and strong technical skills, I turn ideas into reality. Let’s create something amazing together! 🚀
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
