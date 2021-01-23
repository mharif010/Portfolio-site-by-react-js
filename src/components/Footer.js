import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => (
  <footer className="bg-bluee"> 
  <div className="mharif-nav">
    <div class="start-header start-style">
            <div class="container">
                <div class="row p-3">
                    <div class="col-9 p-0 m-auto text-center">

                        <div>
                            <p className="footer-text">
                            <a href="https://www.facebook.com/mharif010/" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                            <a href="https://twitter.com/mharif010" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                            <a href="https://www.linkedin.com/in/mharif/" target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                            <a href="https://www.youtube.com/channel/UCTuGbaEUmj4HOPcSHI2orHQ" target="_blank"><i class="fa fa-youtube" aria-hidden="true"></i></a>
                            <a href="https://github.com/mharif010" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a>
                            </p>
                            <ul className="footer-nav">
                                <li><a href="https://mharif.com/blog/">Blog</a></li>
                                <li><Link to='/blog'>About</Link></li>
                                <li><Link to='/about'>Software</Link></li>
                                <li><Link to='/about'>Pricing</Link></li>
                            </ul>
                        </div>


                        <div className="footer-section">
                            {/* <h2><a href="">mhArif</a></h2> */}
                            <ul className="footer-nav">
                                <li><Link to='/about'>Privacy Policy</Link></li>
                                <li><Link to='/about'>Cookie Policy</Link></li>
                                <li><Link to='/about'>Term & Conditions</Link></li>
                            </ul>

                            <p className="copyright">Copyright © 2021&nbsp;mh arif&nbsp;•&nbsp;Global based Freelance Web Designer &amp; Developer</p>
                        </div>

                    </div>
                   
                </div>
            </div>
        </div>
    </div>
  </footer>
  
)

export default Footer
