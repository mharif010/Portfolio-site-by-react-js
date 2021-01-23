import React from 'react'
import { Link } from 'react-router-dom'
import Headroom from 'react-headroom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <section className="bg-light">
    <Headroom>
    <div className="mharif-nav">
		<div class="xnavigation-wrap bg-light start-header start-style">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<nav class="navbar navbar-expand-md navbar-light">
						
							<Link class="navbar-brand" to="/"><h1>mh Arif</h1></Link>	
							
							<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
								<span class="navbar-toggler-icon"></span>
							</button>
							
							<div class="collapse navbar-collapse" id="navbarSupportedContent">
								<ul class="navbar-nav ml-auto py-4 py-md-0">
									<li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4 active">
									<Link className="nav-link" to='/projects'>Projects</Link>
									</li>
									<li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
									<Link className="nav-link" to='/services'>Services</Link>
									</li>
									<li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
										<Link className="nav-link" to='/roster'>Blog</Link>
									</li>
									<li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
									<Link className="nav-link" to='/about'>About</Link>
									</li>
									<li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
									<Link className="nav-link" to='/contact'>Hire me</Link>
									</li>
								</ul>
							</div>
							
						</nav>		
					</div>
				</div>
			</div>
		</div>
	</div>
    </Headroom>
  </section>
  
)

export default Header
