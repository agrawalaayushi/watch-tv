import React, { Component }  from 'react'

class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // videos: [
      //   {
      //     id: '1',
      //     name: 'video-1',
      //     src: {MOOCHER_VIDEO}
      //   },
      //   {
      //     id: '2',
      //     name: 'video-1',
      //     src: {BOSKOS_VIDEO}
      //   },
      //   {
      //     id: '3',
      //     name: 'video-1',
      //     src: {POPEYEVIDEO}
      //   },
      // ],
     
    }
  }

  //-----------------------------------
  // Methods
  //-----------------------------------

 

  //-----------------------------------
  // Lifecycle
  //-----------------------------------


  render() {
    const {videos1}  = this.props
    return (
      <div className="player-view">
        <video autoPlay className="player-video-wrapper" >
            <source src={videos1[0]} type="video/mp4"/>
        </video>
      </div>
    );
  }
}


export default (VideoPlayer);
