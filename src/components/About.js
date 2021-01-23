import React from 'react'
import mhImage from './mharif.jpg'

const About = () => (
  <section>
    <div className="container-custom">
      <div className="row about-page">
        <h1>About Me</h1>
        <p>Hi! I'm mh Arif. I'm a software engineer & entrepreneur.</p><br/> <p>I create web application and mobile apps using Javasript framework React, React native, Node js, Php, MySql and Wordpress CMS.</p>
        <img src={mhImage}/>
          
        <p> I started <a href="">web developing</a> and programming career in 2015. When I starting my career I wrote any topics and I've been documenting everything I learn ever singce.</p>
      </div>
    </div>
  </section>
)

export default About
