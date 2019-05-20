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

  static getDerivedStateFromProps(nextProps, prevState) {    
    if (prevState.videoLink !== nextProps.videoLink) {
      let video = document.getElementById('sourcePlayer')
      if (video) {
        video.src = (nextProps.videoLink)
        document.getElementById("videoPlayer").load();
      }
    }
    else 
    return null
  }

  render() {
    const { videoLink }  = this.props
    return (
      <div className="player-view">
        <video autoPlay className="player-video-wrapper" id="videoPlayer">
            <source src={videoLink} type="video/mp4" id="sourcePlayer"/>
        </video>
      </div>
    );
  }
}


export default (VideoPlayer);
