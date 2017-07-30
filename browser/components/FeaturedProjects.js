import React from 'react';

export default class FeaturedProjects extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {	
		return (
			<div>
				<p id="github" className="wow zoomIn">Featured Projects</p>
				<div className='row' style={{height: window.innerHeight}}>
				<div className='container'>

						<div className="col-md-4">
							<div className="panel panel-default featuredProj" style={{width: window.innerWidth/4}}>
							  <div className="panel-body">
								<p className="featuredTitle">
									<a target="_blank" href='https://github.com/jhoscar1/capstone'>
										I (AR)t NY
									</a>
								</p>
								<p className="featuredDemo">
									<a href='https://www.youtube.com/watch?v=Cal59NL6_0c'>
										Demo
									</a>
								</p>
								<ul className='list'>
									<li>
										Augmented-reality mobile app for iOS and Android that shows you the city's public art as you walk through the city.
									</li>
									<li>
										Built using React-Native with a Firebase datastore filled with NYC Parks Dept data
									</li>
									<li>
										Uses geolocation and compass/gyroscopic data to overlay information about nearby installations in the Camera View
									</li>
									<li>
										Map View displays all points of interest across all 5 boroughs
									</li>
									<li>
										Includes real-time Likes, list of My Favorites, and browsing by most popular
									</li>
								</ul>
								<p className="featuredDemo">
									Capstone project at Fullstack Academy with teammates <a href='https://github.com/christiancw'>Christian</a>, <a href='https://github.com/phoyt1'>Pat</a>, and <a href='https://github.com/jhoscar1'>Jason</a>.
								</p>
							  </div>
							</div>
						</div>


						<div className="col-md-4">
							<div className="panel panel-default featuredProj" style={{width: window.innerWidth/4}}>
							  <div className="panel-body featuredProjContainer">
								<p className="featuredTitle">
									<a target="_blank" href='https://piscesaquascaping.herokuapp.com/'>
										Pisces Aquascaping <span style={{fontSize: 12}}>(deployed)</span>
									</a>
								</p>
								<p className="featuredDemo">
									<a href='https://github.com/elinemzer/grace-shopper'>
										Github
									</a>
								</p>
								<ul className='list'>
									<li>
										Mock e-commerce website selling fish including full checkout workflow
									</li>
									<li>
										Built using Express server back-end, PostgreSQL Sequelize datastore, and React and Redux front-end 
									</li>
									<li>
										Supports external Google authentication for both basic and admin users. Admin users have expanded functionality to manage inventory and orders
									</li>
									<li>
										Users can search and browse fish by category, leave reviews once logged in, and manage their account information
									</li>
								</ul>
								<p className="featuredDemo">
									"Grace Shopper" project at Fullstack Academy with teammates <a href='https://github.com/elinemzer'>Eli</a>, <a href='https://github.com/J-Wicks'>Jeremy</a>, and <a href='https://github.com/emilyacres'>Emily</a>.
								</p>
							  </div>
							</div>
						</div>






				</div>
				</div>
			</div>
		)
	}
}