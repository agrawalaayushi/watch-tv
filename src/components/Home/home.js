import React, { Component }  from 'react'
import VideoPlayer from '../video-player/video-player'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  //-----------------------------------
  // Methods
  //-----------------------------------

 

  //-----------------------------------
  // Lifecycle
  //-----------------------------------

  
  

  render() {
    return (
      <div className="gojek-tv-view">
       <VideoPlayer/>
      </div>
    );
  }
}


export default (Home);
