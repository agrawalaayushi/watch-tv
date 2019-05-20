import React, { Component }  from 'react'
import { POPEYEVIDEO, BOSKOS_VIDEO, MOOCHER_VIDEO } from '../../constants/images';

class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [
        {
          id: '1',
          name: 'video-1',
          src: {MOOCHER_VIDEO}
        },
        {
          id: '2',
          name: 'video-1',
          src: {BOSKOS_VIDEO}
        },
        {
          id: '3',
          name: 'video-1',
          src: {POPEYEVIDEO}
        },
      ],
      videos1: [
        MOOCHER_VIDEO,
        BOSKOS_VIDEO,
        POPEYEVIDEO
      ]
    }
  }

  //-----------------------------------
  // Methods
  //-----------------------------------

 

  //-----------------------------------
  // Lifecycle
  //-----------------------------------

  
  

  render() {
    const {videos1}  = this.state
    return (
      <div className="player-view">
        <video width="720" height="240" autoPlay className="player-video-wrapper" >
            <source src={videos1[1]} type="video/mp4"/>
        </video>
       
      </div>
    );
  }
}


export default (VideoPlayer);
