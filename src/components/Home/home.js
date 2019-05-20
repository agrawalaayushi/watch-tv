import React, { Component }  from 'react'
import VideoPlayer from '../video-player/video-player'
import VideoControls from '../video-player/video-control'
import { POPEYEVIDEO, BOSKOS_VIDEO, MOOCHER_VIDEO } from '../../constants/images';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos1: [
        MOOCHER_VIDEO,
        BOSKOS_VIDEO,
        POPEYEVIDEO
      ],
      isTVOn: false,
    }
  }

  //-----------------------------------
  // Methods
  //-----------------------------------

  handleTVPower(tvState) {
    this.setState={
      isTVOn: tvState
    }
  }

  //-----------------------------------
  // Lifecycle
  //-----------------------------------

  
  

  render() {
    const { videos1, isTVOn } = this.state;
    return (
      <div className="video-player-home-view">
       <VideoPlayer videos1={videos1} isTVOn={isTVOn}/>
       <VideoControls playVideo={this.handleTVPower}/>
      </div>
    );
  }
}


export default (Home);
