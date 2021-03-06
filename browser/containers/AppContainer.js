import React from 'react';
import GitRepos from '../components/GitRepos'
import FeaturedProjects from '../components/FeaturedProjects'
import AboutMe from '../components/AboutMe'
import Current from '../components/Current'


export default class AppContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {  
    return (
      <div>
        <p id="wip">work in progress!</p>
        <p id="title" className="animated fadeIn" style={{marginTop: window.innerHeight/2 - 44, marginBottom: window.innerHeight/2 - 34}}>Danielle Westerman</p>
        <AboutMe />
        <FeaturedProjects />
        <Current />
        <GitRepos />
      </div>
    )
  }
}