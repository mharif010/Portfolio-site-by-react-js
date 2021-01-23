import React from 'react'
import Gallery from './Gallery'
import Client from './Client'
import { Link } from 'react-router-dom'
import Tool1 from './tools/wordpress.png'
import Tool2 from './tools/php.png'
import Tool3 from './tools/react.png'
import Tool4 from './tools/html.png'
import Tool5 from './tools/css.png'
import Tool6 from './tools/Bootstrap.png'
import Tool7 from './tools/js.png'
import Tool8 from './tools/node.png'
import Tool9 from './tools/api.png'
import Tool10 from './tools/mysql.png'
import Tool11 from './tools/laravel.png'
import Tool12 from './tools/github.png'
import Tool13 from './tools/Git.png'
import Tool14 from './tools/vs.png'


const Home = () => (
  <section className="p-2">
      <header>
          {/* <div className="mh-logo">
            <img src={Logo} alt="mharif logo" />
          </div> */}
          <h1 className="mh-title bg-white header-bg">Design, Development & Marketing</h1>
          <p className="about-me bg-white about-subtitle">Hey, I'm mh Arif. I'm determined to make design and code beautifully simple things, and I love what I do </p>
          <div className='mh-search'>
           <div className="mh-personal"> <a href="">Resume</a><a href="">Portfolio</a></div>
           <div className="searching-text text-center">
             <ul>
               <li><b>Type</b>-</li>
               <li>Web Services</li>/
               <li>Free Articles</li>/
               <li>Project Idea</li>
             </ul>
           </div>
          </div>
          <div className="container">
            <div className="client-section text-center">
              <h2>Trusted By 20+ Clients</h2>
              <Client />
            </div>
          </div>    
      </header>
      <section>
        <div className="container">
          <div className="row pt-4 pb-5">
            <div className="col-md-6 p-0 pr-2 mh-home">
            <h2>Free Resources<a class="section-button" href="/blog">View all</a></h2>
            <div class="posts">
              <div class="post"><a href="/redux-react-guide/"><div class="post-row"><time>Mar 09</time><h3>Redux Tutorial: An Overview and Walkthrough</h3></div></a></div>
              <div class="post"><a href="/overview-of-css-concepts/"><div class="post-row"><time>Dec 02</time><h3>A Complete Guide to CSS Concepts and Fundamentals</h3></div></a></div>
              <div class="post"><a href="/how-to-create-and-use-bash-scripts/"><div class="post-row"><time>May 29</time><h3>How to Create and Use Bash Scripts</h3></div></a></div>
              <div class="post"><a href="/how-to-connect-to-an-api-with-javascript/"><div class="post-row"><time>Dec 07</time><h3>How to Connect to an API with JavaScript</h3></div></a></div>
              <div class="post"><a href="/design-for-developers/"><div class="post-row"><time>Oct 12</time><h3>Design for Developers: Specific Steps to Improve Your Website Design</h3></div></a></div>
              
              <div class="post"><a href="/developing-a-wordpress-theme-from-scratch/"><div class="post-row"><time>Oct 17</time><h3>WordPress Tutorial: Developing a Wordpress Theme from Scratch</h3></div></a></div></div>
            </div>
            <div className="col-md-6 p-0 pl-2 mh-home">
            <h2>Projects<a class="section-button" href="/blog">View all</a></h2>
            <div class="posts">
              <div class="post"><a href="/redux-react-guide/"><div class="post-row"><time>Mar 09</time><h3>Redux Tutorial: An Overview and Walkthrough</h3></div></a></div>
             <div class="post"><a href="/how-to-connect-to-an-api-with-javascript/"><div class="post-row"><time>Dec 07</time><h3>How to Connect to an API with JavaScript</h3></div></a></div>
              <div class="post"><a href="/design-for-developers/"><div class="post-row"><time>Oct 12</time><h3>Design for Developers: Specific Steps to Improve Your Website Design</h3></div></a></div>
              <div class="post"><a href="/create-a-simple-database-app-connecting-to-mysql-with-php/"><div class="post-row"><time>May 16</time><h3>Build a PHP &amp; MySQL CRUD Database App From Scratch</h3></div></a></div>
              <div class="post"><a href="/what-is-bootstrap-and-how-do-i-use-it/"><div class="post-row"><time>Nov 10</time><h3>Bootstrap Tutorial: Using a CSS Framework</h3></div></a></div>
              <div class="post"><a href="/developing-a-wordpress-theme-from-scratch/"><div class="post-row"><time>Oct 17</time><h3>WordPress Tutorial: Developing a Wordpress Theme from Scratch</h3></div></a></div></div>
            </div>
          </div>
          <div className="title-for-sec pt-4">
          <h2>My Recent Work</h2>
          <p>Here are a few client projects I've worked on recently. Want to see more ? <Link to="/projects">Email me</Link></p>
          </div>
          <div className="row bg-white pt-4 pb-5">
            <Gallery />
          </div>
          <div className="title-for-sec pt-4">
          <h2>Choose the Service that is Best for You</h2>
          <p>Here are a few my service packages that I have continue. Want to know more ? <a href="mailto:mh.arif.web@gmail.com">Email me</a></p>
          </div>
          <div className="row pt-4 pb-5 bg-white">
              <div className="col-md-4 col-sm-6 col-6">
                <div className="tools-grid">
                  <h2>Premium </h2>
                  <p>It's a very professional service for the latest web application</p>
                  <span>Languages I Use</span>
                  <p>React, Node, Express, MongoDB</p>
                  <span>Advantages</span>
                  <p>Fast loading application,<br/> Without reload on click,<br/> Large application Manage,<br/> Easy user interface</p>
                  <div className="mh-orderbtn"><a href="" className="order-button text-right">Order Now</a></div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-6">
                <div className="tools-grid">
                  <h2>Standard </h2>
                  <p>It's popular technologie web solutions for any business</p>
                  <span>Languages I Use</span>
                  <p>Php, Laravel, WP Core, MySql</p>
                  <span>Advantages</span>
                  <p>Stable technologies using,<br/> Quick time delivery,<br/> All in one solutions,<br/>Awesome products making </p>
                  <div className="mh-orderbtn"><a href="" className="order-button">Order Now</a></div>
                  </div>
              </div>
              <div className="col-md-4 col-sm-12 col-12">
                <div className="tools-grid">
                  <h2>Basic</h2>
                  <p>It's a quick web solutions for all you need to business</p>
                  <span>WP CMS I Use</span>
                  <p>Theme/plugins customization,</p>
                  <span>Advantages</span>
                  <p>Quick solutions<br/>Any things possible<br/>Low budgets costing<br/>Everything customize</p>
                  <div className="mh-orderbtn"><a href="/hire-me" className="order-button">Order Now</a></div>
                </div>
              </div>
          </div>
          <div className="title-for-sec pt-4">
          <h2>What Tools I Use</h2>
          <p>Here are a few tools I've worked on continuously. Want to know more ? <a href="mailto:mh.arif.web@gmail.com">Email me</a></p>
          </div>
          <div className="row pt-4 pb-5 tools">
              <div className="col-md-2 col-6 col-sm-12 p-3 positive-m">
                <div className="tools-box">
                  <img src={Tool1} alt="wordpress tools"/>
                  <h3>WordPress</h3>
                </div>
              </div>
              <div className="col-md-2 col-6 p-3">
                <div className="tools-box">
                  <img src={Tool2} alt="php tools"/>
                  <h3>Php</h3>
                </div>
              </div>
              <div className="col-md-2 col-6 p-3">
                <div className="tools-box">
                  <img src={Tool3} alt="react tools"/>
                  <h3>React</h3>
                </div>
              </div>
              <div className="col-md-2 col-6 p-3">
                <div className="tools-box">
                  <img src={Tool4} alt="html tools"/>
                  <h3>Html</h3>
                </div>
              </div>
              <div className="col-md-2 col-6 p-3">
                <div className="tools-box">
                  <img src={Tool5} alt="css tools"/>
                  <h3>CSS</h3>
                </div>
              </div>
              <div className="col-md-2 col-6 p-3">
                <div className="tools-box">
                <img src={Tool6} alt="bootstrap tools"/>
                  <h3>Bootstrap</h3>
                </div>
              </div>
              <div className="col-md-2 col-6 p-3">
                <div className="tools-box">
                <img src={Tool7} alt="javascript tools"/>
                  <h3>JavaScript</h3>
                </div>
              </div>
              <div className="col-md-2 col-6 p-3">
                <div className="tools-box">
                <img src={Tool8} alt="node js tools"/>
                  <h3>Node JS</h3>
                </div>
              </div>
              <div className="col-md-2 col-6 p-3">
                <div className=" tools-box">
                <img src={Tool9} alt="api tools"/>
                  <h3>API</h3>
                </div>
              </div>
              <div className="col-md-2 col-6 p-3">
                <div className="tools-box">
                <img src={Tool10} alt="mysql tools"/>
                  <h3>MySql</h3>
                </div>
              </div>
              <div className="col-md-2 col-6 p-3 positive-m2">
                <div className="tools-box">
                  <img src={Tool11} alt="laravel tools" />
                  <h3>Laravel</h3>
                </div>
              </div>
              <div className="col-md-2 col-6 p-3">
                <div className="tools-box">
                <img src={Tool12} alt="Github tools" />
                  <h3>GitHub</h3>
                </div>
              </div>
              <div className="col-md-2 col-6 p-3">
                <div className="tools-box">
                <img src={Tool13} alt="Git tools" />
                  <h3>Git Bash</h3>
                </div>
              </div>
              <div className="col-md-2 col-6 p-3">
                <div className="tools-box">
                <img src={Tool14} alt="VS Code tools" />
                  <h3>VS Code</h3>
                </div>
              </div>
          </div>

        </div>
      </section>
  </section>
)

export default Home
